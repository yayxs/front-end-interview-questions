
```javascript

 useEffect(() => {
    let obj1 = {name:'yayxs',age:18}
    let obj2 = {age:'nan'}
    let res =    Object.assign(obj1, obj2);
    console.log(res)
    console.log(obj1)
    console.log(obj2)
    console.log(obj1===res)
  }, [])


```

```js

/*
 * @Author: your name
 * @Date: 2020-06-23 14:54:24
 * @LastEditTime: 2020-06-23 16:48:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-app\src\App.js
 */

/**
 * 请问react中的setState 是同步的还是异步的？什么时候同步什么时候异步
 */

import React from "react";
/**
 * 首先在react中合成事件 例如像 onClick
 * 解决的问题  this的绑定问题
 * Object.assign() 
 */

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 0,
    };
  }
  // 1 合成事件中的setState
  // handleClick() {
  //   console.log(  this.state);
  //   this.setState({ num: this.state.num + 1 },()=>{
  //     console.log(this.state.num)
  //   }); // 合成事件执行完，  state 并没有更新 造成所谓的 异步 try 代码块执行完事之后
  //   console.log(this.state);
  // }


  handleClick() {
    console.log(this.state);
    this.setState((a,b)=>{
      console.log(a)
      console.log(b)
    },()=>{
      console.log(this.state.num)
    }); // 合成事件执行完，  state 并没有更新 造成所谓的 异步 try 代码块执行完事之后
    console.log(this.state);
  }
  componentDidUpdate(){
    console.log(this.state.num)
  }
  // 2 生命周期中的setState
  // 和合成事件类似 react内部并没有更新，执行完componentDidmount后才去commitUpdateQueue更新
  //   componentDidMount() {
  //     console.log(this.state.num)
  //     this.setState({ num: this.state.num + 1 })
  //    console.log(this.state.num) // 输出的还是更新前的值 --> 0
  //  }

  // 3 原生事件中的
  // changeValue = () => {
  //   console.log(this.state.num);
  //   this.setState({ num: this.state.num + 1 });
  //   console.log(this.state.num); // 输出的是更新后的值 --> 1
  // };
  // componentDidMount() {
  //   document.addEventListener("click", this.changeValue, false);
  // }

  // 4 setTimeout 中的setState
  //   componentDidMount() {
  //     setTimeout(_ => {
  //       console.log(this.state.num)
  //       this.setState({ num: this.state.num + 1 })
  //       console.log(this.state.num) // 输出更新后的值 --> 1
  //     }, 0)
  //  }

  // 5 批量更新
  batchUpdates = () => {
    this.setState({ num: this.state.num + 1 });
    this.setState({ num: this.state.num + 1 });
    this.setState({ num: this.state.num + 1 });
  };

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
// export default class App extends Component {

//   render() {
//     const handleClick =()=>{
//       console.log(`点击按钮`)
//     }
//     return (
//       <div>
//         123
//         <button onClick={ handleClick }>按钮</button>
//       </div>
//     )
//   }
// }
/**
 * 在合成事件和钩子函数中是所谓的异步  调用顺序在更新之前 没法立刻拿到更新后的值
 * 在原生事件或者 setTimeout 是同步的
 */

```

```js


/*
 * @Author: your name
 * @Date: 2020-06-23 17:00:08
 * @LastEditTime: 2020-06-23 17:39:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react-app\src\App copy 2.js
 */ 
import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 0,
    };
  }
  handleClick = ()=>{
    /**
     * a 状态的引用 bu应直接被修改。
     * b 
     */
    this.setState((a,b)=>{
      console.log(a)
      console.log(b)


      return {}   // 浅
    },()=>{
      
    })

  }
  render() {
    return (<>
    
    <button  onClick ={this.handleClick }>按钮点击
    </button></>);
  }
}
export default App;

```
