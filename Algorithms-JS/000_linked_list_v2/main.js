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
}

(function () {
	const sll = new SinglyLinkedList();

	//Regarding Push TESTS
	console.log(sll.push(5));
	console.log(sll.length);
	console.log(sll.head.val);
	console.log(sll.tail.val);

	console.log("===");

	console.log(sll.push(10));
	console.log(sll.length);
	console.log(sll.head.val);
	console.log(sll.head.next.val);
	console.log(sll.tail.val);

	console.log("===");

	console.log(sll.push(15));
	console.log(sll.length);
	console.log(sll.head.val);
	console.log(sll.head.next.val);
	console.log(sll.head.next.next.val);
	console.log(sll.tail.val);
})();
