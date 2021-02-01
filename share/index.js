let a = {
  name: 'aname',
  age: 20,
}

function change(o) {
  o.age = 24 // a = { name:'aname',age:20}
  o = {
    name: 'oname',
    age: 30,
  }
  return o
}
let b = change(a) // 注意这里没有new，后面new相关会有专门文章讲解
console.log(b.age) // 第一个console 30
console.log(a.age) // 20
