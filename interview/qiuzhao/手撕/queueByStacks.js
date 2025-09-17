class QueueByStacks {
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }
    enqueue(item) {
        this.inStack.push(item);
    }
    dequeue() {
        // 反向，如果outStack 为空，则将inStack 中的元素全部转移到outStack 中,
        if(this.outStack.length === 0) {
            while(this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop());
            }
        }
        if(this.outStack.length === 0) {
            return null;
        }
        return this.outStack.pop();
    }
    // 获取对头元素
    peek() {
        if(this.outStack.length > 0) {
            return this.outStack[this.outStack.length - 1];
        }
        return this.inStack[0];
    }
    size() {
        return this.inStack.length + this.outStack.length;
    }
}
const queue = new QueueByStacks();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.peek());
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.size());