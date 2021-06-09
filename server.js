const express = require('express')
const path = require('path')
const app = express()
const serveIndex = require('serve-index')
app.use(serveIndex('./src')) // 进行浏览目录
// 利用express.static中间件来托管静态资源。
app.use(express.static(path.join(__dirname, 'src')))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})
app.listen(2022, () => {
  console.log(`http://localhost:2022`)
})
