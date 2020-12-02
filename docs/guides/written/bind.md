---
title: 手写实现bind 函数
---
# 手动实现 bind 函数

在手写实现`bind`之前，我们先来回忆一下`bind` 的使用场景，我们就说在`react` 框架中好了，
```js
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 0,
    };
  }
  // 1 合成事件中的setState
  handleClick() {
    console.log(this.state);

    this.setState({ num: this.state.num + 1 }); // 合成事件执行完，  state 并没有更新 造成所谓的 异步 try 代码块执行完事之后
    console.log(this.state);
  }
  componentDidUpdate() {
    console.log(this.state.num);
  }
  render() {
    return (
      <>
        {this.state.num}
        // 可以看到我们使用 bind函数来绑定this
        <button onClick={this.handleClick.bind(this)}>按钮</button>
      </>
    );
  }
}

export default App;
```
>bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函
>数的参数，供调用时使用。但是我们需要事先说一下`bind` 是需要`Polyfill`的。

```js
const user = {
    name:'yayxs',

}

function showYourself(){
    console.log(this.name)
}

const result = showYourself.bind(user)

```

## 第一个bind
```js
const user = {
  name: "yayxs",
};

function showYourself(sex) {
  console.log(this.name);
  console.log(sex)
}

let resultFn;
resultFn = showYourself.bind(user);

// console.log(resultFn)

Function.prototype.myFirstBind = function(ctx) {
  console.log(ctx); // user {name:'yayxs'}
  let _this = this;

  // 第一步返回一个函数
  return function() {
    //    _this 此时是showYourself函数
    return _this.apply(ctx);
  };
};

resultFn = showYourself.myFirstBind(user);

// console.log(resultFn)

```

## 第二个bind

slice 返回新数组副本