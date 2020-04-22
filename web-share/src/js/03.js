// var self;
// function Person(name) {

//   self = this;
//   this.name = name;
//   console.log(this)
// }

// let p = new Person("张三");
// console.log(p);
// console.log(self === p); // true 构造函数中的this 绑定在了p这个对象上
// console.log(p.__proto__ === Person.prototype); // 对象p的原型属性指向构造函数的原型，这样也就保证了实例能够访问在构造函数原型中定义的属性和方法。
// ----------------------------------------------------------------

// function Persion(name){
//     this.name = name
// }
// console.log(Persion.prototype)
// Persion.prototype.sayHello = function(){
//     console.log(this) // 指向构造出的对象
//     console.log(this.name) // 小明
// }

// let xiaoMing = new Persion('小明')
// xiaoMing.sayHello()
// console.log(xiaoMing.name)
// console.log(xiaoMing.__proto__ === Persion.prototype)
// --------------------------------------------------------------------
// function Person(name) {
//   this.name = name;
//   //   return 1; // 返回内部新创建的对象
//   //   return "1"; // 返回内部新创建的对象
//   // return null; // 返回内部新创建的对象
//   //   return undefined; // 返回内部新创建的对象
//   //   return {}; // {} // 直接返回
//   return function () {}; // 直接返回
//   return [1]; // [1] // 直接返回
// }
// let p = new Person("李四");
// console.log(p);
// ------------------------------------------------

// function myNew() {
//   let [constructor, ...args] = [...arguments];
//   let obj = {};
//   obj.__proto__ = constructor.prototype;

//   let res = constructor.apply(obj, args);
//   return res instanceof Object ? res : obj;
// }

// function Person(name) {
//   this.name = name;
// //   return {};
// }

// Person.prototype.sayHi = function () {
//   console.log(`原型方法中的函数--${this.name}`);
// };
// let p1 = myNew(Person, "测试");
// // console.log(p1)
// p1.sayHi();
// console.log(p1.name);

// ------------------------------------

let obj = {
  name: "张三",
  sayHi() {
    console.log(this);
    function sayName() {
      console.log(this);
    }
    sayName()
  },
};
console.log(obj.name);
obj.sayHi();
