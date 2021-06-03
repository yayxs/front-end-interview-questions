---
title: Vue怎么用vm.$set()解决对象新增属性不能响应的问题？
---

# Vue怎么用vm.$set()解决对象新增属性不能响应的问题？


vue中依赖收集大体分两个时机，一个是属性值被改变的时候 还有就是 $set 或者 Vue.set 给数据添加新属性的时候，由于`js` 语言的限制  在没有`Proxy` 之前 Vue 没办法拦截到给对象添加的新属性。所以vue 暴露出 $set 以及 Vue.set 等方法让我们有能力在 给对象添加新属性的时候触发依赖

向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新 property，因为 Vue 无法探测普通的新增 property (比如 this.myObject.newProperty = 'hi') **注意对象不能是 Vue 实例，或者 Vue 实例的根数据对象。**

```js

 const vm = new Vue({
            el:'#app',
            methods: {
                handleClick(){
                    console.log('点击事件已经触发')
                    // this.obj.name = 'yayxs'
                    vm.$set(this.obj,'name','yayxs')
                }
            },
            data:{
                obj:{}
            },
        })
```