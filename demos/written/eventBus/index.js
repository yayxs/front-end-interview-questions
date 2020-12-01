class EventEmitter {
  constructor() {
    this.handles = new Map(); // 存储实践回调之间的关系
  }

  on(evtName, cb) {
    if (!this.handles.has(evtName)) {
      this.handles.set(evtName, []);
    }

    this.handles[evtName].push(cb);
  }

  emit(evtName, ...args) {
    if (this.handles.has(evtName)) {
      for (let i = 0, len = this.handles[evtName].length; i < len; i++) {
        this.handles[evtName][cb](...args);
      }
    }
  }

  off(evtName, cb) {
    const cbs = this.handles[evtName];
    const idx = cbs.indexOf(cb);
    if (idx !== -1) {
      cbs.splice(idx, 1);
    }
  }
  once(evtName, cb) {
    const warp = (...args) => {
      cb(...args);
      this.off(evtName, warp);
    };
    this.on(evtName, warp);
  }
}
