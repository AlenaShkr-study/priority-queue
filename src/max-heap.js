const Node = require('./node');

class MaxHeap {
	constructor() {
		this.parentNodes = [];
		this.root = null;
		this.lastInsertedNode = null;
		this._size = 0;
	}

	push(data, priority) {
		this._size ++;
		const node = new Node(data, priority);
		this.lastInsertedNode = node;
		this.insertNode(node);	
		this.shiftNodeUp(node);
	}

	pop() {
		if(this.isEmpty()){
			return;
		}
		if(this._size){
			this._size--;
		}
		var root = this.detachRoot();
		this.restoreRootFromLastInsertedNode(root);
		this.shiftNodeDown(this.root);
		return root.data;		
	}

	detachRoot() {
		let root = this.root;
		const indexOfRoot = this.parentNodes.indexOf(root);
		if(indexOfRoot != -1){
			this.parentNodes.splice(indexOfRoot,1);
		}
		this.root = null;
		return root;
	}

	restoreRootFromLastInsertedNode(detached) {
		if(!detached.right && !detached.left){
			return;
		}
		let index = this.parentNodes.indexOf(detached);
		if(index != -1){
			this.parentNodes.splice(index,1);
		}
		
		let lastInsertedNode = this.parentNodes.pop();
		if(lastInsertedNode.parent.right == lastInsertedNode && lastInsertedNode.parent != detached){
			this.parentNodes.splice(0,0, lastInsertedNode.parent);
		}
		if(lastInsertedNode.parent.left == lastInsertedNode){
			lastInsertedNode.parent.left = null;
		}
		if(lastInsertedNode.parent.right == lastInsertedNode){
			lastInsertedNode.parent.right = null;
		}

		lastInsertedNode.parent = null;
		
		lastInsertedNode.left = detached.left;
		lastInsertedNode.right = detached.right;
		detached.left = detached.right = null;
		if(lastInsertedNode.left){
			lastInsertedNode.left.parent = lastInsertedNode;
		}
		if(lastInsertedNode.right){
			lastInsertedNode.right.parent = lastInsertedNode;
		}
		if(!lastInsertedNode.right || !lastInsertedNode.left){
			this.parentNodes.splice(0,0, lastInsertedNode);
		}
		this.root = lastInsertedNode;
		
	}

	size() {
		return this._size;
	}

	isEmpty() {
		return this.root == null;
		
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this._size = 0;
	}

	insertNode(node) {
		if (this.root === null) {
			this.root = node;
			
		} else{
			this.parentNodes[0].appendChild(node);
			if(this.parentNodes[0].left && this.parentNodes[0].right){
				this.parentNodes.splice(0,1);
			}
		}
		this.parentNodes.push(node);
	
	}

	shiftNodeUp(node) {
		if(this.root && this.root.parent == node){
			this.root = node;
		}else if(node && node.parent && node.priority > node.parent.priority){
			let nodeParentNodesIndex = this.parentNodes.indexOf(node);
			let nodeParentParentNodesIndex = this.parentNodes.indexOf(node.parent);
			if(nodeParentNodesIndex != -1){
				this.parentNodes[nodeParentNodesIndex] = node.parent;
			}
			if(nodeParentParentNodesIndex != -1){
				this.parentNodes[nodeParentParentNodesIndex] = node;
			}
			node.swapWithParent();
			
			this.shiftNodeUp(node);
			
		}
	}

	shiftNodeDown(node) {	
			
			var nextNode;
			if(!node||(!node.left && !node.right)){
				return;
			}
			if(node.left && node.right){
				nextNode = node.left.priority >= node.right.priority ? node.left : node.right;
			} else if(!node.left){
				nextNode = node.right;
			} else if(!node.right){
				nextNode = node.left;
			}
			if(nextNode && nextNode.priority >= node.priority){
				let nodeParentNodesIndex = this.parentNodes.indexOf(node);
				let nodeParentNextNodeIndex = this.parentNodes.indexOf(nextNode);
				if(nodeParentNextNodeIndex != -1){
					this.parentNodes[nodeParentNextNodeIndex] = node;
				}
				if(nodeParentNodesIndex != -1){
					this.parentNodes[nodeParentNodesIndex] = nextNode;
				}
				 
				if(this.root && this.root == node){
					this.root = nextNode;
				}
				nextNode.swapWithParent();
				this.shiftNodeDown(node);
			}
	}
}

module.exports = MaxHeap;
