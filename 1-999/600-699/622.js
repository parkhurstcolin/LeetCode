/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.queue = new Array(k);
    this.head = -1
    this.tail = -1
    this.count = 0;
    this.capacity = k;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()) return false;
    if(this.count == 0) this.head++;
    if(this.tail == this.capacity) this.tail = -1;
    this.tail++;
    this.queue[this.tail] = value;
    this.count++;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()) return false;
    if(this.head == this.capacity) this.head = 0
    this.head++;
    this.count--;
    if(this.count == 0) this.head = -1, this.tail = -1;
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.head == -1) return this.head
    return this.queue[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.tail == -1) return this.tail
    return this.queue[this.tail]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    if(this.count == 0) return true
    return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    if(this.count == this.capacity) return true;
    return false;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */