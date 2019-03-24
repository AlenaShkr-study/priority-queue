const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		
		
		
		this.maxSize = maxSize ||30;
		this.heap = new MaxHeap(this.maxSize);

	}

	push(data, priority) {
		
		this.heap.push(data, priority);
		if (this.length === this.maxSize) {
			return new Error(error);
			
		}
		

	}

	shift() {
		this.heap.pop();

		 
		

	}

	size() {
		return this.heap.length;
	}

	isEmpty() {
		return this.length === 0;
		
	}
}

module.exports = PriorityQueue;
