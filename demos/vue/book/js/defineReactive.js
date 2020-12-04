function defineReactive(data,key,val){
    // let dep = [] // 存储当前的依赖
    let dep = new Dep()
    Object.defineProperty(data,key,{
        enumerable: true,
        configurable: true,
        get(){
            // 在getter中收集依赖
            // dep.push(window.target)
            dep.depend() // 修改
            return val
        },
        set(newVal){
            if(val===newVal){
                return val
            }

            // for(let i =0;i<dep.length;i++){
            //     // 触发收集到的依赖
            //     dep[i](newVal,val)
            // }
            dep.notify() // 新增
            val = newVal
        }
    })
}