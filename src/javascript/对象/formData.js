
/**
 * formData 用于组装用于发送请求的 key value
 */
let formData = new FormData()

console.log( formData)

let files =  document.getElementById('file');
console.log(files)

let file = files.files[0]
console.log(file)
formData.append('myFile',files.files[0])