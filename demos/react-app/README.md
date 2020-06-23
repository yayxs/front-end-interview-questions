`React 中的setState 是同步的还是异步的 什么时候同步 什么时候异步`

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
        <button onClick={this.handleClick.bind(this)}>按钮</button>
      </>
    );
  }
}

export default App;
```

首先需要我们去八一下官网 API [其他 API](https://zh-hans.reactjs.org/docs/react-component.html#setstate)

有两个方法是由开发自己调用

- setState(updater, [callback] ) 一个请求（可能需要一点时间） 一次传递 多组件更新
- forceUpdate()

**使用更新后的状态去渲染组件，达到更新的目的**

那么在不确定能取到最新状态值的情况该怎么实现

- 方案一(不推荐)

```js
this.setState({ num: this.state.num + 1 }, () => {
  console.log(this.state.num);
});
```

- 方案二

```js
componentDidUpdate(){
   console.log(this.state.num)
 }
```

### 使用

真正使用 `this.setState()` 的时候我们习惯上传入一个对象，其实我们上边也说了它是有两个参数，一是updater，参数二是一个可选的回调函数，在这个回调函数函数中我们可以取到页面更新后的最新值，但是通常情况下咱们不这个做，而是使用
`componentDidUpdate`
那应该是这样的 

```js


 this.setState((a,b)=>{
      console.log(a) // 其中a 是状态的引用不应该直接被修改
      console.log(b)


      return {}   // 浅拷贝
    },()=>{
      
    })
```