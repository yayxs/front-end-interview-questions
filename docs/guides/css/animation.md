---
title: css中动画常考面试题
---

# css中动画常考面试题

## css的动画有几种
 - transition 补间动画
 - keyframe 关键帧动画

```css
 .container{
            width: 100px;
            height: 100px;
            background: red;
            
            animation: run 1s linear;
            /* 方向 */
            /* animation-direction: reverse; */
            /* animation-fill-mode: forwards; */
            /*无限循环 */
            animation-iteration-count: infinite;
            /* 播放状态 */
            /* animation-play-state: paused; */
        }
        @keyframes run{
            0%{
                width: 100px;
            }
            50%{
                width: 800px;
            }
            100%{
                width: 100px;
            }
        }
```
## 过渡动画和关键帧动画的区别
 - 过度动画需要状态变化
 - 关键帧不需要状态变化
 - 关键帧动画控制的更加精细

## 如何实现逐帧动画

## 如果需要手动写动画，你认为最小时间间隔是多久？

## animate如何停留在最后一帧!

## `transition`和`animate`有何区别? 

`transition` 是补间动画，其中包括位置、平移的属性、方位（旋转）、大小（缩放）、透明度、线性transform

```css
    .container{
            width: 100px;
            height: 100px;
            background: red;
            /* all 代表所有能够动画的属性 */
            transition: all 1s;
            /* 动画进度和时间的关系 */
            /* transition-timing-function: ease-in-out; */
            transition-timing-function: cubic-bezier(0.465, -0.460, 0.525, 1.435);
            /* 延迟时间 */
            /* transition-delay: 1s; */
        }
        .container:hover{
            width: 800px;
            background:green;
        }
```