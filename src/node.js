class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;


	}

	appendChild(node) {
		if(!node){
			return
		}
		if (!this.left) {
			this.left = node;
			this.left.parent = this;
		} else if (!this.right) {
			this.right = node;
			this.right.parent = this;
		} else return;
	}

	removeChild(node) {
		if(!node){
			return;
		}
		if (this.left === node) {
			this.left.parent = null;
			this.left = null;
			
		}  else	if (this.right === node) {
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
		const thisParent = this.parent;
		const thisParentParent = this.parent.parent;
		
		thisParent.remove();
		
		const parentLeft = thisParent.left;
		const parentRight = thisParent.right;
		
		thisParent.removeChild(parentLeft);
		
		thisParent.removeChild(parentRight);
		
		const thisLeft = this.left;
		
		const thisRight = this.right;
		
		this.removeChild(thisLeft);
		this.removeChild(thisRight);
		
		if(parentLeft == this){
			this.appendChild(thisParent);
			this.appendChild(parentRight);
			
		} else if(parentRight == this){
			this.appendChild(parentLeft);
			this.appendChild(thisParent)
		}
		thisParent.appendChild(thisLeft);
		thisParent.appendChild(thisRight);
		
		if(thisParentParent){
			thisParentParent.appendChild(this);
		}
	}
}

module.exports = Node;
