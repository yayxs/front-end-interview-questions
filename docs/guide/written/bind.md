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
> bind(..) 会返回一个硬编码的新函数，它会把参数设置为 this 的上下文并调用原始函数。，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函
>数的参数，供调用时使用。但是我们需要事先说一下`bind` 是需要`Polyfill`的。因为大部分的浏览器都实现了内置的`Function.prototype.bind` 的实现，也有些是不支持的

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

```js
Function.prototype.secBind = function() {
  let self = this, // 保存原来的函数
    context = [].shift.call(arguments); // 需要绑定的this的上下文
  args = [].slice.call(arguments); // 剩余的参数转成数组
  return function() {
    // 返回一个新的函数
    // 执行新的函数的时候，会把之前传入的context当做新函数体内的this 并且组合两次分别差UN额逇参数 作为新函数的参数
    return self.apply(context, [].concat.call(args, [].slice.call(arguments)));
  };
};

```