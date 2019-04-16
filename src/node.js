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
		 var thisParent = this.parent;
		 var thisParentParent = this.parent.parent;
		 if(thisParentParent && thisParentParent.left == thisParent){
			 thisParentParent.left = this;
		 } else if(thisParentParent && thisParentParent.right == thisParent){
			thisParentParent.right = this;
		}
		
		// swap parents
		 this.parent = this.parent.parent;
		 thisParent.parent = this;
		 
		 var thisLeft = this.left;
		 var thisRight = this.right;
		 if(thisParent.left == this){
			this.left = thisParent;
			this.right = thisParent.right;
			if(this.right){
				this.right.parent = this;
			}
		 } else {
			 this.right = thisParent;
			 this.left = thisParent.left;
			 if(this.left){
			 	this.left.parent = this;
			 }
		 }
		 
		 thisParent.left = thisLeft;
		 thisParent.right = thisRight;
		 
		 if(thisLeft){
			 thisLeft.parent = thisParent;
		 }
		 
		 if(thisRight){
			 thisRight.parent = thisParent;
		 }
	}
}

module.exports = Node;
