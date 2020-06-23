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


      return {}   // 浅拷贝
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
