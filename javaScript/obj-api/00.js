let obj = {
  name: "yayxs",
  fav: [
    {
      type: "0",
      desc: "eat"
    },
    {
      type: "1",
      desc: "play"
    }
  ]
};

let res1 = Object.values(obj);
console.log(res1);
// [
// 'yayxs',
// [ { type: '0', desc: 'eat' }, { type: '1', desc: 'play' } ]
// ]
