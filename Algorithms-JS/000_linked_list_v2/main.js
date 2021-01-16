class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const currentNode = new Node(val);
		if (this.length === 0) {
			this.head = currentNode;
			this.tail = currentNode;
		} else {
			this.tail.next = currentNode;
			this.tail = currentNode;
		}
		this.length++;

		return this;
	}

	pop() {
		if (this.length === 0) {
			return undefined;
		} else {
			let currentNode = this.head;
			let previousNode = currentNode;
			while (currentNode.next !== null) {
				previousNode = currentNode;
				currentNode = currentNode.next;
			}

			this.tail = previousNode;
			this.tail.next = null;
			this.length--;

			return currentNode.val;
		}
	}

	print() {
		let currentNode = this.head;
		const values = [];

		while (currentNode !== null) {
			values.push(currentNode.val);
			currentNode = currentNode.next;
		}

		return values;
	}
}

module.exports = SinglyLinkedList;
