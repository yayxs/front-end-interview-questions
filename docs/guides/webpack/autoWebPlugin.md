---
title: webpack怎么配置单页应用？怎么配置多页应用？
---

配置单页应用是webpack的默认模式，直接通过`entry: "./src/index.js"` 配置默认的入口；至于如何管理多个单页应用
多页应用使用webpack的`AutoWebPlugin`来完成简单自动化构建，但是目录结构是按照一定的规范

```bash
├── pages
│   ├── index
│   │   ├── index.css // 该页面单独需要的 CSS 样式
│   │   └── index.js // 该页面的入口文件
│   └── login
│       ├── index.css
│       └── index.js
├── common.css // 所有页面都需要的公共 CSS 样式
├── template.html
└── webpack.config.js
```
