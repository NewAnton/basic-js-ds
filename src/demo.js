class ListNode {
    constructor(x) {
        this.value = x;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    getUnderlyingList() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return this.head;
    }

    enqueue(value) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if (this.length === 0) {
            this.head = new ListNode(value);
        } else {
            let current = this.head;
            // move to the last node
            while (current.next) {
                current = current.next;
            }
            current.next = new ListNode(value);
        }
        this.length++;
    }

    dequeue() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if (!this.head) {
            return this.head.value;
        }
        let value = this.head.value;
        this.head = this.head.next;
        return value;
    }
}

const queue = new Queue();

queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
console.log(queue.dequeue()); //5
console.log(queue.dequeue()); //6

current = queue.head;
while (current) {
    console.log(current.value);
    current = current.next;
}