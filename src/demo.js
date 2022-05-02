class Stack {
    constructor() {
        this.myStack = [];
    }
    push(element) {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        this.myStack.push(element);
    }

    pop() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        if (this.myStack.length == 0) return undefined;
        return this.myStack.pop();
    }

    peek() {
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        return this.myStack[this.myStack.length - 1];
    }
}

const stack = new Stack();
stack.push(1); // adds the element to the stack
stack.push(2);
stack.push(3);
stack.peek(); // returns the peek, but doesn't delete it, returns 1
// stack.pop(); // returns the top element from stack and deletes it, returns 1
// stack.pop(); // undefined

console.log(stack.myStack)