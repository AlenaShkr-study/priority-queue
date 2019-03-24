const Node = require('./node');

class MaxHeap {
	constructor() {
		this.parentNodes = [];
		this.root = null;
	}

	push(data, priority) {
		
		const node = new Node(data, priority);
		
		this.insertNode(node);	
		this.shiftNodeUp(node);
	}

	pop() {
		if (this.root === null) return ; else {
			return this.root.data;
		}
			
	}

	detachRoot() {
		this.root = null;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.parentNodes.length;
		
	}

	isEmpty() {
		return this.parentNodes.length === 0;
		
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		
	}

	insertNode(node) {
		if (this.root === null) {
			this.root = node;
		}

		
	}

	shiftNodeUp(node) {
		

	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
