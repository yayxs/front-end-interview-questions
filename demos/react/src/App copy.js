import React ,{useState}from 'react'
    // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ 
    // 关于生命周期的图谱我们可以参考这个 其中包含 16.4 以及16.3版本
/**
 * 首先我们要围绕react 生命周期  13 14版本来讨论
 * 不管怎么说我们都要渐进式的了解一下 关于生命周期的演进
 * 我们先来看几个生命周期，先不管它们代表什么意思
 * 
 * 旧的生命周期名称和新的别名都可以在此版本中使用 16.3
 * 旧的名称在开发模式下会产生一个警告 未来 16.x 版本
 * 旧的名称不能够使用 在17.0以及之后的版本
 */
class Clock extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      date:new Date()
    }
  }
  /**
   * 16.3版本中心引入的 静态的
   */
  static getDerivedStateFromProps(props,state){
    console.log(`getDerivedStateFromProps`)
  }
  /**
   * 依旧是新引入的静态的方法
   */
  static getSnapshotBeforeUpdate(){
    console.log(`getSnapshotBeforeUpdate`)
  }
  // 组件已经被渲染到DOM中
  componentDidMount() {
    console.log(`componentDidMount`)

    // this.timerID = setInterval(()=>{ // 随意添加不参与数据流（比如计时器 ID）的额外字段。
    //  this.tick()
    // },1000)
  }
  UNSAFE_componentWillMount(){
    console.log(`UNSAFE_componentWillMount`)
  }
  UNSAFE_componentWillReceiveProps(){
    console.log(`UNSAFE_componentWillReceiveProps`)
  }
  UNSAFE_componentWillUpdate(){
    console.log(`UNSAFE_componentWillUpdate`)
  }
  componentWillUnmount() {
    console.log(`组件卸载`)
    clearInterval(this.timerID)
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render(){
    console.log(`render`)
    return(
      <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    )
  }
}

export default function App() {
  const [showClock,setShowClock] = useState(true)
  return (
    <div>
      {showClock? <Clock />:null}
     
      <button onClick={()=> setShowClock(!showClock) }>切换</button>
    </div>
  )
}
