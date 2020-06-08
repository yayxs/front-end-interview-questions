// 依旧是高频事件的触发在n秒内只会执行一次节流稀释函数的执行频率
function throttle(fn){
    let canRun  = true // 通过闭包保存标记
    return function(){
        // 如果不能执行的情况直接return 
        if(!canRun)return
        canRun = false
        setTimeout(()=>{
            fn.apply(this,arguments)
            canRun = true
        },500)
    }
}

function helloWorld(e){
    console.log(e.target.innerWidth, e.target.innerHeight)
}
