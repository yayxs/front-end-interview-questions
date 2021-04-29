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
      return new Promise(resolve => {
        let id = setTimeout(() => {
          callback(id, resolve);
        }, delay);
      });

    case "setInterval":
      return new Promise(resolve => {
        let id = setInterval(() => {
          callback(id, resolve);
        }, delay);
      });
    default:
      break;
  }
};
macroTask(id => {
  console.log(1212);
});
