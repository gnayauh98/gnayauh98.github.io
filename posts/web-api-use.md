---
id: web-api-use
title: Web API食用手册
---

## 空闲时调用API: Background Task API(requestIdleCallback)

## 广播通道(Broadcast Channel API)

允许浏览上下文（即window/tab/frame/iframe）与同源的worker直接进行基本通信

通过构造BroadcastChannel对象完成双向通信

通过调用对象的postMessage方法传输数据

通过onmessage方法接受信息

通过close方法断开
