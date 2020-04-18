const agesArr = [12,13,7,8 ]

const res = agesArr.map(item=>`${item}岁`)
// console.log(res)

const fn  = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
const res1 = fn()
// console.log(res1)


function Person() {
    // Person() 构造函数定义 `this`作为它自己的实例.
    this.age = 0;
  
    setInterval(function growUp() {
        console.log(this)
      // 在非严格模式, growUp()函数定义 `this`作为全局对象, 
      // 与在 Person()构造函数中定义的 `this`并不相同.
      this.age++;
    }, 1000);
  }
  
  var p = new Person();