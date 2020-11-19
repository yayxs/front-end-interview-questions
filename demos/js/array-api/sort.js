let arr = [
  {
    starttime: "2020-03-06 16:22:00"
  },
  {
    starttime: "2020-03-18 17:08:00"
  },
  {
    starttime: "2020-03-18 23:19:00"
  },
  {
    starttime: "2020-03-18 19:43:00"
  },
  {
    starttime: "2019-12-18 14:30:00"
  }
];

// functiion formDate(time) {

//     var nowTime = new Date(thisTime)
//     nowTime = nowTime.getTime()
//     return nowTime
//   }

const formatDate = time =>  new Date(time.replace(/ /g, "/")).getTime()

const res =  formatDate("2019-12-18 14:30:00");
console.log(res)
const sortArr =  arr.sort((a, b) => formatDate(a.starttime) < formatDate(b.starttime) ? 1 : -1)
console.log(sortArr);
