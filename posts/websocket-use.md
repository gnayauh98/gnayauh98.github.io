---
id: websocket-use
title: WebSocket食用手册
---

## 在Web端构造WebSocket对象

```js
var socket = new WebSocket(url [,protocols])
```

- `protocols`: 一个协议字符串或一个包含协议字符串的数组

异常：

- `SECURITY_ERR`: 正在尝试连接的端口被阻止

常量：

- WebSocket.CONNECTING
- WebSocket.OPEN
- WebSocket.CLOSING
- WebSocket.CLOSED

## 属性

- WebSocket.binaryType: blob|arraybuffer

用于控制通过WebSocket连接接收的二进制数据类型，

- WebSocket.bufferedAmount

返回被send方法放入队列但还没有被发送到网络中的数据的字节数

- WebSocket.extensions

服务器选择的扩展

- WebSocket.onclose

属性返回WebSocket连接的readyState变为CLOSED时的回调。

- WebSocket.onerror

当WebSocket连接由于一些错误事件的发生而被关闭时。

- WebSocket.onmessage

当接收新消息时被触发。

- WebSocket.onopen

WebSocket连接状态readyState变为1时调用。

- WebSocket.protocol

返回服务器选择的子协议

- WebSocket.readyState

返回WebSocket连接的当前状态

WebSocket.CONNECTING(0) // 套接字已创建，但连接尚未打开

WebSocket.OPEN(1) // 连接已打开，准备进行通信

WebSocket.CLOSING(2) // 连接正在关闭中

WebSocket.CLOSED(3) // 连接已关闭或无法打开


- WebSocket.url

构造函数创建实例对象时URL的绝对路径

## 方法

- WebSocket.close([code[,reason]])

code: 一个数字状态码，解释连接关闭的原因，默认1005，[可用状态码](https://developer.mozilla.org/zh-CN/docs/Web/API/CloseEvent#status_codes)

reason: 一个人类可读的字符串，解释了连接关闭的原因，UTF-8编码字符串不能超过123个字节。

错误：

INVALID_ACCESS_ERR: 一个无效的code

SYNTAX_ERR: reason字符串太长

- WebSocket.send

WebSocket.send() 方法将需要通过 WebSocket 链接传输至服务器的数据排入队列，并根据所需要传输的 data bytes 的大小来增加 bufferedAmount的值。若数据无法传输（例如数据需要缓存而缓冲区已满）时，套接字会自行关闭。


传输数据类型：

USVString: UTF-8格式文本字符串

ArrayBuffer: 使用类型化数组对象发送底层二进制数据

Blob: Blob类型将队列blob中的原始数据以二进制传输

ArrayBufferView: 以二进制帧的形式发送任何JavaScript类数组对象

错误：

INVALID_STATE_ERR: 当前连接未处于OPEN状态

SYNTAX_ERR: 数据是一个包含未配对代理的字符串
