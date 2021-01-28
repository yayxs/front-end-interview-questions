class Student {
  constructor(name, no) {
    this.name = name;
    this.no = no;
  }
  sayHi() {
    console.log(`姓名${this.name},学号${this.no}`);
  }
}
