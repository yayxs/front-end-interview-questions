import React,{useEffect} from 'react'

export default function App() {


  useEffect(() => {
    let obj1 = {name:'yayxs',age:18}
    let obj2 = {age:'nan'}
    let res =    Object.assign(obj1, obj2);
    console.log(res)
    console.log(obj1)
    console.log(obj2)
    console.log(obj1===res)
  }, [])


  return (
    <div>
      
    </div>
  )
}
