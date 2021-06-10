/**
 * @description 封装ajax请求
 * @param {string} method HTTP 方法。通常是 "GET" 或 "POST"。
 * @param {string | URL} url 要请求的 URL，通常是一个字符串，也可以是 URL 对象。
 * @param {boolean} async 如果显式地设置为 false，那么请求将会以同步的方式处理
 */
function vastAjax(options = {}) {
  // 请求参数默认化处理
  options.method = options.method.toUpperCase() || "GET"; // 默认GET
  options.url = options.url || ""; // 默认空字符串
  options.async = options.async || true; // 默认异步请求
  options.data = options.data || null; // 默认为null
  options.success = options.success || function () {}; // 成功的回调
  let xhr = null;
  // 兼容处理
  if (XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  var params = [];
  for (var key in opt.data) {
    params.push(key + "=" + opt.data[key]);
  }
  var postData = params.join("&");
  if (opt.method.toUpperCase() === "POST") {
    xmlHttp.open(opt.method, opt.url, opt.async);
    xmlHttp.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded;charset=utf-8"
    );
    xmlHttp.send(postData);
  } else if (opt.method.toUpperCase() === "GET") {
    xmlHttp.open(opt.method, opt.url + "?" + postData, opt.async);
    xmlHttp.send(null);
  }
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      opt.success(xmlHttp.responseText);
    }
  };
}

const options = {
  url: ``,
};
vastAjax();
