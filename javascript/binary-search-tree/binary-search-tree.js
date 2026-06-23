//
// This is only a SKELETON file for the 'Binary Search Tree' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BinarySearchTree {
	constructor(data) {
		this.node = {
			data: data,
			left: null,
			right: null,
		};
	}

	get data() {
		return this.node.data;
	}
	get right() {
		return this.node.right;
	}

	get left() {
		return this.node.left;
	}

	insert(item) {
		if (item <= this.node.data) {
			if (this.node.left === null) {
				this.node.left = new BinarySearchTree(item);
			} else {
				this.node.left.insert(item);
			}
		} else {
			if (this.node.right === null) {
				this.node.right = new BinarySearchTree(item);
			} else {
				this.node.right.insert(item);
			}
		}
	}

	each(callback) {
		if (this.node.left) {
			this.node.left.each(callback);
		}
		callback(this.data);
		if (this.node.right) {
			this.node.right.each(callback);
		}
	}
}
