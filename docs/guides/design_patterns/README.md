---
title: JavaScript 设计模式
---

# JavaScript 设计模式

## 什么是设计模式？

>在面向对象的软件设计过程中针对特定问题的简洁优雅的解决方案

## JavaScript中的“多态”？

所谓多态：同一操作作用于不同的对象上面，可以产生不同的解释和不同的执行结果。

```javascript
const print = function(type){
    if(type==='enter'){
        console.log('确认')
    }else if(type==='esc'){
        console.log('取消')
    }else if(){
             
    }
}
```

 显然这是会带来一定的问题，比如当`type` 的类型非常多的情况下，`print` 函数就会一发不可收拾。而avaScript 作为一门动态类型语言，它在编译时没有类型
检查的过程，既没有检查创建的对象类型，又没有检查传递的参数类型。   


## 常见的设计模式有哪些？

::: tip
- 单例模式
- 原型模式
- 构造器模式
- 工厂模式
- 抽象工厂模式
- 桥接模式
- 外观模式
- 组合模式
- 装饰器模式
- 适配器模式
- 代理模式
- 享元模式
- 迭代器模式
- 解释器模式
- 观察者模式
- 中介者模式
- 访问者模式
- 状态模式
- 备忘录模式
- 策略模式
- 模板方法模式
- 职责链模式
- 命令方式
:::

## 构造器模式

## 工厂模式

其核心目的是为了实现无脑的传参。将创建对象的过程单独封装.
```js
  function Persion(name,age,profession,work){
            this.name = name
            this.age = age
            this.profession  = profession
            this.work = work
        }
```

 - 第一个简单的工厂

```js
 function Factory(name,age,profession){
            let work; // 是干什么的
            switch (profession) {
                case 'coder':
                 work = ['摸鱼']
                    break;
                    case 'coder':
                 work = ['摸鱼']
                    break;
                case 'Fisherman':
                    work = ['捕鱼']
                default:
                    break;
            }
            return new Persion(name,age,profession,work)
        }
```

## 单例模式(vuex)

- 定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点。
- 应用：我们的`vuex` 就是应用了单例模式保证全局`store` 还有浏览器的`window对象` 
- 思路：是用一个变量来标志当前是否已经为某个类创建过对象，如果是，则在下一次获取该类的实例时，直接返回之前创建的对象  

```js
 class SingletonMode {
            sayHi(){
                console.log('你好，我是单例模式')
            }
            static isHaveInstance(){
                if(!SingletonMode.isHaveInstance){ // 不存在采取重新创建
                    SingletonMode.instance = new SingletonMode()
                }

                return SingletonMode.instance
            }
        }
```

## 原型模式(创建一个对象)

>在 Brendan Eich 为 JavaScript 设计面向对象系统时，借鉴了 Self 和 Smalltalk 这两门基于原型
>的语言。之所以选择基于原型的面向对象系统，并不是因为时间匆忙，它设计起来相对简单，而
>是因为从一开始 Brendan Eich 就没有打算在 JavaScript 中加入类的概念。  

接下来我们提到的原型模式不仅仅是一个设计模式，也被称之为一种编程的泛型。

- 作用适用于创建对象的一种模式

原型模式的实现关键，是语言本身是否提供了 clone 方法。`ECMAScript 5` 提供了 `Object.create`方法，可以用来克隆对象。因为本文主要是介绍分享`设计模式相关` 不会具体分析js的`api`   

```js
   class Coder1{

            constructor(name,age){
                this.name = name
                this.age = age
            }
            like(){
                console.log('i like mofish')
            }
        }

        function Coder2(name,age){
            this.name = name
            this.age = age
        }
        Coder2.prototype.like = function(){
            console.log('i like mofish')
        }

```
 - `构造函数Coder2`.prototype.constructor===构造函数Coder2
 - `实例对象coderYayxs`.__proto__ //  原型对象 {like: ƒ, constructor: ƒ}


>当我试图访问一个 JavaScript 实例的属性/方法时，它首先搜索这个实例本身；当发现实例没有定义对应的属性/方法时，它会转而去搜索实例的原型对象；如果原型对象中也搜索不到，它就去搜索原型对象的原型对象，这个搜索的轨迹，就叫做原型链。

或者说，我们通过`es5` 的语法来创建一个对象

```javascript

```



## 装饰器模式(Nest.js）

它的定义是“在不改变原对象的基础上，通过对其进行包装拓展，使原有对象可以满足用户的更复杂需求”。

```ts

import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
```

## 适配器模式(axios)

```js
// 若用户未手动配置适配器，则使用默认的适配器
var adapter = config.adapter || defaults.adapter;
  
  // dispatchRequest方法的末尾调用的是适配器方法
  return adapter(config).then(function onAdapterResolution(response) {
    // 请求成功的回调
    throwIfCancellationRequested(config);

    // 转换响应体
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    // 请求失败的回调
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // 转换响应体
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
```

## 代理模式(Proxy)

- 定义：在某些情况下，出于种种考虑/限制，一个对象不能直接访问另一个对象，需要一个第三者（代理）牵线搭桥从而间接达到访问目的，这样的模式就是代理模式。`es6中` 的`proxy`  一个Proxy 对象包装另一个对象并拦截诸如读取写入等其他的操作,简言之，拦截对象的操作。为一个对象提供一个代用品或占位符，以便控制对它的访问  
- 场景：图片的懒加载、合并`http `请求
- 其他代理：
  - 防火墙代理
  - 远程代理
  - 保护代理
  - 智能引用

```js
  const user = {
        name: "洋小洋同学",
        age: 18,
      };

      /**
       * 参数一 target目标对象  要包装的对象（可以是函数）
       * 参数二 handler对象    代理配置 拦截操作方法
       */
      const  proxy = new Proxy(user, {
          get(user,key){

          },
           /**
         * 参数一 target目标对象
         * 参数二 prop目标属性名称
         * 参数三 val 目标属性的值
         * 参数四
         */
          set: function(user, key, val){

          }
      });
```

## 策略模式

- 定义：定义一系列的算法，把它们一个个的封装起来，并且它们可以相互替换

## 状态模式

## 观察者模式


观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个目标对象，当这个目标对象的状态发生变化时，会通知所有观察者对象，使它们能够自动更新，有人也称之为`发布者订阅模式`

```js
class Publisher {
  constructor() {
    this.observers = [];
    console.log("init");
  }
  add(observer) {
    console.log("add");
    this.observers.push(observer);
  }
  remove(observer) {
    console.log("remove");
    this.observers.forEach((item, i) => {
      if (item === observer) {
        this.observers.splice(i, 1);
      }
    });
  }
  notify() {
    console.log("notify");
    this.observers.forEach((item) => {
      item.update(this);
    });
  }
}

class Observer {
  constructor() {
    console.log("init");
  }
  update() {
    console.log("update");
  }
}

```


## 迭代器模式

- 定义：