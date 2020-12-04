---
title: 谈谈Object和Array的变化侦测采用的不同处理方式
---

# 谈谈Object和Array的变化侦测采用的不同处理方式

  - (1)Vue 框架怎么实现对象和数组的监听？
  - (2)直接给一个数组项赋值，Vue 能检测到变化吗？
  - (3)在 Vue 中怎么检测数组的变化
  - (4)对比一下 `Object.defineProperty` 与`proxy`
  - (5)vue如何侦测新增元素的变化


## 对象的变化侦测

使用`Object.defineproperty` 侦测对象的变化。`template中的数据`在`getter中`收集依赖，在`setter` 中触发依赖。收集到`Dep` 中。其中模板或者用户写的`watch` 都是`Watcher`

```js
class Dep {
    constructor(){
        this.subs = []
    }

    addSub(){

    }
    removeSub(){

    }
    depend(){

    }
    notufy(){

    }

}

function handleRemove (arr,item){
    if(arr.length){
        const index = arr.indexOf(item)
        if(index>-1){
            return arr.splice(index,1)
        }
    }
}
```

```js
function defineReactive(data,key,val){
    // let dep = [] // 存储当前的依赖
    let dep = new Dep()
    Object.defineProperty(data,key,{
        enumerable: true,
        configurable: true,
        get(){
            // 在getter中收集依赖
            // dep.push(window.target)
            dep.depend() // 修改
            return val
        },
        set(newVal){
            if(val===newVal){
                return val
            }

            // for(let i =0;i<dep.length;i++){
            //     // 触发收集到的依赖
            //     dep[i](newVal,val)
            // }
            dep.notify() // 新增
            val = newVal
        }
    })
}
```

## 对比一下 `Object.defineProperty` 与`proxy`

JavaScript没有提供元编程的能力，无法侦测到一个新属性被添加到了对象中，也无法侦测到一个属性从对象中删除了。
由于在ES6之前，JavaScript并没有提供元编程的能力，所以对于数组类型的数据，一些语法无法追踪到变化，只能拦截原型上的方法，而无法拦截数组特有的语法，例如使用length清空数组的操作就无法拦截。
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>object.defineproperty</title>
  </head>
  <body>
    <div id="app">123{{$data.obj}}

      <button  @click="action">action</button>
    </div>
    <script src="../js/vue.js"></script>
    <script>
      // 属性标志和属性描述符
      let user = {
        name: "zs",
        age: 19,
      };
      let descriptor = Object.getOwnPropertyDescriptor(user, "name"); // 其中desc 是属性描述符
      /* 属性描述符：
        {
        "value": "zs",
        "writable": true,
        "enumerable": true,
        "configurable": true
        }
        */
      // 除了 value 外 其他的叫标志 存在 age就进行更新
      Object.defineProperty(user, "age", {
        value: "20",
      });
      let admin = {};
      Object.defineProperty(admin, "name", {
        value: "admin",
      });

      const vm = new Vue({
        el: "#app",
        data: {
          obj: {},
        },
        methods: {
          action() {
            console.log('action触发');
            this.obj.name = 'add-name-key'
          },
        },
      });
    </script>
  </body>
</html>

```

## 使用 JavaScript Proxy 实现简单的数据绑定

## 数组的变化侦测
对Array的变化侦测是通过拦截原型的方式实现的。正是因为这种实现方式，其实有些数组操作Vue.js是拦截不到的
```js
  let model = [1, 2, 3];
      const vm = new Vue({
        el:'#app',
        data(){
          return {
            list : []
          }
        },
        methods: {
          handlePush(){
            console.log('数组中push数据触发')
            this.list.push(1)
          }
        },
      })
      model.forEach((val, key) => {
        Object.defineProperty(model, key, {
          get() {
            return val;
          },
          set(newVal){
            console.log(`${val}变至${newVal}`)
            val = newVal
          }
        });
      });
```

处理数组的方式与纯对象不同 数组是一个特殊的数据结构 有很多实例方法 这些方法会改变数组的值（变异方法）像 `push` `pop` `shift` `unshift` `splice` `reverse` `sort` 重点关注**增加元素的操作** 因为新增的元素不是响应式的 所以需要获取到新增的元素 并把他们变成响应式的才行。核心思路就是push来改变数组的内容，那么我们只要能在用户使用push操作数组的时候得到通知。

```js
  const arrayProto = Array.prototype,
        arrayMethods = Object.create(arrayProto)
        ['push','pop','shift','unshift','splice','sort','reverse'].forEach(method=>{
            const oldMe = arrayProto[method]
            Object.defineproperty(arrayMethods,method,{
                value:function mutator(...args){
                    return oldMe.apply(this.args)
                },
                
            })
        })
```
需要通过Observer，所以我们只需要在Observer中使用拦截器覆盖那些即将被转换成响应式Array类型数据的原型就好了**Array在getter中收集依赖，在拦截器中触发依赖**
总结：对于纯对象只需要逐个将对象的属性重新定义访问器属性，当某一属性的值也是个对象的时候就对其进行递归定义，对于数组的处理通过拦截数组的变异方法（push shift reverse等）直接通过 arr[0] = xxx 这种方式是触发不了响应 因为数组的索引不是“访问器” 属性。正是因为数组的索引不是访问器属性 所以当有观察者依赖数组的某一个元素的时候 触发不了元素的 get 函数 ，那自然而然收集不到依赖

## vue如何侦测新增元素的变化

如果操作数组的方法是push、unshift和splice（可以新增数组元素的方法），则把参数中新增的元素拿过来，用Observer来侦测

## 直接给一个数组项赋值，Vue 能检测到变化吗

```js
this.list[0] = 2
this.list.length = 0
```