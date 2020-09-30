---
title: for of , for in 和 forEach,map 的区别
---

## for in

`for-in`语句是一种严格的迭代语句，用于枚举对象中的非符号键属性
**如果for-in循环要迭代的变量是null或undefined，则不执行循环体。**

```js
for (const key in window) {
  document.write(`${key}-------`);
}
```

```js
parent
index.html:11 opener
index.html:11 top
index.html:11 length
index.html:11 frames
index.html:11 closed
index.html:11 location
index.html:11 self
index.html:11 window
index.html:11 document
index.html:11 name
index.html:11 customElements
index.html:11 history
index.html:11 locationbar
index.html:11 menubar
index.html:11 personalbar
index.html:11 scrollbars
index.html:11 statusbar
index.html:11 toolbar
index.html:11 status
index.html:11 frameElement
index.html:11 navigator
index.html:11 origin
index.html:11 external
index.html:11 screen
index.html:11 innerWidth
index.html:11 innerHeight
index.html:11 scrollX
index.html:11 pageXOffset
index.html:11 scrollY
index.html:11 pageYOffset
index.html:11 visualViewport
index.html:11 screenX
index.html:11 screenY
index.html:11 outerWidth
index.html:11 outerHeight
index.html:11 devicePixelRatio
index.html:11 clientInformation
index.html:11 screenLeft
index.html:11 screenTop
index.html:11 defaultStatus
index.html:11 defaultstatus
index.html:11 styleMedia
index.html:11 onsearch
index.html:11 isSecureContext
index.html:11 onabort
index.html:11 onblur
index.html:11 oncancel
index.html:11 oncanplay
index.html:11 oncanplaythrough
index.html:11 onchange
index.html:11 onclick
index.html:11 onclose
index.html:11 oncontextmenu
index.html:11 oncuechange
index.html:11 ondblclick
index.html:11 ondrag
index.html:11 ondragend
index.html:11 ondragenter
index.html:11 ondragleave
index.html:11 ondragover
index.html:11 ondragstart
index.html:11 ondrop
index.html:11 ondurationchange
index.html:11 onemptied
index.html:11 onended
index.html:11 onerror
index.html:11 onfocus
index.html:11 onformdata
index.html:11 oninput
index.html:11 oninvalid
index.html:11 onkeydown
index.html:11 onkeypress
index.html:11 onkeyup
index.html:11 onload
index.html:11 onloadeddata
index.html:11 onloadedmetadata
index.html:11 onloadstart
index.html:11 onmousedown
index.html:11 onmouseenter
index.html:11 onmouseleave
index.html:11 onmousemove
index.html:11 onmouseout
index.html:11 onmouseover
index.html:11 onmouseup
index.html:11 onmousewheel
index.html:11 onpause
index.html:11 onplay
index.html:11 onplaying
index.html:11 onprogress
index.html:11 onratechange
index.html:11 onreset
index.html:11 onresize
index.html:11 onscroll
index.html:11 onseeked
index.html:11 onseeking
index.html:11 onselect
index.html:11 onstalled
index.html:11 onsubmit
index.html:11 onsuspend
index.html:11 ontimeupdate
index.html:11 ontoggle
index.html:11 onvolumechange
index.html:11 onwaiting
index.html:11 onwebkitanimationend
index.html:11 onwebkitanimationiteration
index.html:11 onwebkitanimationstart
index.html:11 onwebkittransitionend
index.html:11 onwheel
index.html:11 onauxclick
index.html:11 ongotpointercapture
index.html:11 onlostpointercapture
index.html:11 onpointerdown
index.html:11 onpointermove
index.html:11 onpointerup
index.html:11 onpointercancel
index.html:11 onpointerover
index.html:11 onpointerout
index.html:11 onpointerenter
index.html:11 onpointerleave
index.html:11 onselectstart
index.html:11 onselectionchange
index.html:11 onanimationend
index.html:11 onanimationiteration
index.html:11 onanimationstart
index.html:11 ontransitionend
index.html:11 onafterprint
index.html:11 onbeforeprint
index.html:11 onbeforeunload
index.html:11 onhashchange
index.html:11 onlanguagechange
index.html:11 onmessage
index.html:11 onmessageerror
index.html:11 onoffline
index.html:11 ononline
index.html:11 onpagehide
index.html:11 onpageshow
index.html:11 onpopstate
index.html:11 onrejectionhandled
index.html:11 onstorage
index.html:11 onunhandledrejection
index.html:11 onunload
index.html:11 performance
index.html:11 stop
index.html:11 open
index.html:11 alert
index.html:11 confirm
index.html:11 prompt
index.html:11 print
index.html:11 queueMicrotask
index.html:11 requestAnimationFrame
index.html:11 cancelAnimationFrame
index.html:11 captureEvents
index.html:11 releaseEvents
index.html:11 requestIdleCallback
index.html:11 cancelIdleCallback
index.html:11 getComputedStyle
index.html:11 matchMedia
index.html:11 moveTo
index.html:11 moveBy
index.html:11 resizeTo
index.html:11 resizeBy
index.html:11 scroll
index.html:11 scrollTo
index.html:11 scrollBy
index.html:11 getSelection
index.html:11 find
index.html:11 webkitRequestAnimationFrame
index.html:11 webkitCancelAnimationFrame
index.html:11 fetch
index.html:11 btoa
index.html:11 atob
index.html:11 setTimeout
index.html:11 clearTimeout
index.html:11 setInterval
index.html:11 clearInterval
index.html:11 createImageBitmap
index.html:11 close
index.html:11 focus
index.html:11 blur
index.html:11 postMessage
index.html:11 onappinstalled
index.html:11 onbeforeinstallprompt
index.html:11 crypto
index.html:11 indexedDB
index.html:11 webkitStorageInfo
index.html:11 sessionStorage
index.html:11 localStorage
index.html:11 chrome
index.html:11 onpointerrawupdate
index.html:11 trustedTypes
index.html:11 speechSynthesis
index.html:11 webkitRequestFileSystem
index.html:11 webkitResolveLocalFileSystemURL
index.html:11 openDatabase
index.html:11 caches
index.html:11 ondevicemotion
index.html:11 ondeviceorientation
index.html:11 ondeviceorientationabsolute
index.html:11 GetParams
index.html:11 __REDUX_DEVTOOLS_EXTENSION__
index.html:11 devToolsExtension
index.html:11 __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
index.html:11 TEMPORARY
index.html:11 PERSISTENT
index.html:11 addEventListener
index.html:11 removeEventListener
index.html:11 dispatchEvent
```

## for-of
for-of语句是一种严格的迭代语句，用于遍历可迭代对象的元素，
```js
for(const ele of [12,34]){
console.log(ele)}
VM278:2 12
VM278:2 34
undefined
```