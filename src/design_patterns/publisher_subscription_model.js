class Publisher {
  constructor() {
    this.observers = [];
    console.log("init");
  }
  add(observer) {
    console.log("add");
    this.observers.push(observer);
  }
  remove(observer) {
    console.log("remove");
    this.observers.forEach((item, i) => {
      if (item === observer) {
        this.observers.splice(i, 1);
      }
    });
  }
  notify() {
    console.log("notify");
    this.observers.forEach((item) => {
      item.update(this);
    });
  }
}

class Observer {
  constructor() {
    console.log("init");
  }
  update() {
    console.log("update");
  }
}
