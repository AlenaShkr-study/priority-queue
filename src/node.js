class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;


	}

	appendChild(node) {
		
		if (!this.left) {
			this.left = node;
			this.left.parent = this;
		} else if (!this.right) {
			this.right = node;
			this.right.parent = this;
		} else return;
	}

	removeChild(node) {
		
		if (this.left === node) {
			this.left.parent = null;
			this.left = null;
			
		}  else
		if (this.right === node) {
			this.right.parent = null;
			this.right = null;
			

		} else {new Error(error);
		}
			
	}

	remove() {
		
		if (this.parent === null) return;
			
		this.parent.removeChild(this);
			 
			  
		
	}

	swapWithParent() {
		
		if (this.parent === null) return;
		
		if(this.parent.parent.left === this.parent){
			this.parent.parent.left = this;
		} else if(this.parent.parent.right === this.parent){
			this.parent.parent.right = this;
		}
		
		let  swap = this.parent;
		this.parent = this.parent.parent;
		this.parent.parent = swap;

		

		

		
		
		

		
		
		

		
		
	}
}

module.exports = Node;
