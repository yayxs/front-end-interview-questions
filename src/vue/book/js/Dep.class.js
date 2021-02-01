class Dep {
    constructor(){
        this.subs = []
    }

    addSub(){

    }
    removeSub(){

    }
    depend(){

    }
    notufy(){

    }

}

function handleRemove (arr,item){
    if(arr.length){
        const index = arr.indexOf(item)
        if(index>-1){
            return arr.splice(index,1)
        }
    }
}