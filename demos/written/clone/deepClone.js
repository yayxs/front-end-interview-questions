
// 不同于浅拷贝的是，深拷贝可以将深层的数据进行复制
let obj = {
  name: "yayxs",
  fav: [
    {
      type: "play"
    }
  ],
  friend: {
    name: "wanghuahua"
  }
};


function firstDeepClone(target){
  if(typeof target !== 'target') return

  let res = target instanceof Array ? [] : {};
  for(let key in res){
    if(obj.hasOwnProperty(key)){
      // 首先判断当前key 所对应的属性值是否是个引用类型
      if(typeof obj[key] === 'object'){
        res[key] = firstDeepClone(obj[key])
      }else{
        res[key] = obj[key]
      }
    }
  }
}