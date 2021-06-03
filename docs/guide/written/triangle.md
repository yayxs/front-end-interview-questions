---
title: 手写实现输出由*号组成的三角形
---

# 手写实现打印输出由*号组成的三角形、菱形、平行四边形


```js

 /**
       *      *       1----1
       *      **      2----2
       *      ***     3----3
       *      ****    4----4
       */
      for (let row = 0; row < 4; row++) { // 行数
        for (let num = 0; num < row; num++) {
          document.write("*");
        }
        document.write("<br />");
      }

      for(let row = 4;row>0;row--){
          for(let num=0;num<row;num++){
            document.write("*");
          }
          document.write("<br />");
      }
```