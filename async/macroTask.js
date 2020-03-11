// 封装定时器/延时器
/**
 *
 * @param {*} type
 * @param {*} callback
 * @param {*} delay
 */
const macroTask = (callback, delay = 2000, type = "setTimeout") => {
  switch (type) {
    case "setTimeout":
      let timeOutId = setTimeout(() => callback(timeOutId), delay);
      break;
    case "setInterval":
      let intervalId = setInterval(() => callback(intervalId), delay);
      break;
    default:
      break;
  }
};
macroTask(id => {
  console.log(1212);
});
