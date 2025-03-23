function Message(message,sender) {
    this.message = message;
    this.sender = sender;
}
function TextMessage(message,sender) {
    Message.call(this,message,sender);
    // Message(message,sender); // 当成了普通函数调用
    this.msgText = '文本消息';
    
}
function ImageMessage(message,sender) {
    Message.call(this,message,sender);
    // Message(message,sender);
    this.msgText = '图片消息';
}
var message = new TextMessage('hello','zhangsan');
var image = new ImageMessage('world','lisi');

console.log(message.message,message.msgText);
console.log(image.message,image.msgText);

