const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = {};
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueueRecursively (queue, value) {
    if (!queue.next) {
      queue.next = { value, next: null };
    } else {
      this.enqueueRecursively(queue.next, value);
    }
  }

  enqueue(value) {
    if (!Object.keys(this.queue).length) {
      this.queue = { value, next: null };
    } else {
      this.enqueueRecursively(this.queue, value);
    }
  }

  dequeue() {
    const elem = this.queue.value;
    this.queue = this.queue.next;
    return elem;
  }
}

module.exports = {
  Queue
};
