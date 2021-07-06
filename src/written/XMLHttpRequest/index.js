const URL = `https://jsonplaceholder.typicode.com/todos/1`;

let xhr = new XMLHttpRequest();

xhr.onload = () => {
  console.log(xhr);
  console.log(xhr.responseText);
};

xhr.onprogress = (e) => {
  console.log(e.lengthComputable);
};

xhr.open("get", URL, false);

xhr.send(null);

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    // status http的状态 304 从浏览器缓存直接读取
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
      console.log(xhr.responseText);
    }
  }
};
xhr.open("get", "https://jsonplaceholder.typicode.com/todos/1", false);
xhr.send(null);

console.log(xhr.getAllResponseHeaders());

function submit() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
        console.log(xhr.responseText);
      }
    }
  };
  xhr.open("post", "https://jsonplaceholder.typicode.com/todos");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  let form = document.getElementById("user-info");
  xhr.send(serialize(form));
}

let res = fetch(`'https://jsonplaceholder.typicode.com/todos`);
console.log(res);
