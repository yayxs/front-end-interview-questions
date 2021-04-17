// function Person(name, age) {
//   console.log("this", this);
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.height = 180;
// Person.prototype.sayName = function() {
//   console.log(this.name);
// };
// let p = new Person("yayxs", 20);
// console.log(p.name); // yayxs
// console.log(p.age);
// 20;
// p.sayName(); // yayxs
// console.log(p.__proto__ === Person.prototype); // 对象p（实例）的原型属性指向构造函数的原型，
// // 这样也就保证了实例能够访问在构造函数原型中定义的属性和方法。

// function myNew() {
//   let obj = new Object(),
//     [constructor, ...args] = [...arguments];
//   obj.__proto__ = constructor.prototype;

//   constructor.apply(obj, args);
//   return obj;
// }

// function Person(name) {
//   this.name = name;
//   //   return {};
// }

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

// Person.prototype.sayHi = function () {
//   console.log(`原型方法中的函数--${this.name}`);
// };
// let p1 = myNew(Person, "测试");
// // console.log(p1)
// p1.sayHi();
// console.log(p1.name);

// ------------------------------------

// let obj = {
//     name: "张三",
//     sayHi() {
//       console.log(this); // obj 这个对象
//       function sayName() {
//         console.log(this); // 是一个函数  this 指向window
//       }
//       sayName()
//       const foo = ()=>{
//         console.log(this)
//       }
//       foo()
//     },
//   };
//   console.log(obj.name);
//   obj.sayHi();
