const path = require('path');
module.exports = {
  // 入口文件
  entry: {
    index: "./src/index.js"
  },
  //   出口文件
  output: {
    filename: "[name].js",
    path:  path.resolve(__dirname, 'dist'),
  }
};
