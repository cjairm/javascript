// Add any extra import statements you may need here

class Node {
	constructor(x) {
		this.data = x;
		this.next = null;
	}
}

// Add any helper functions you may need here

class List {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	push(v) {
		const node = new Node(v);
		if (this.size === 0) {
			this.head = node;
			this.tail = this.head;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.size++;
		return this;
	}

	reverse() {
		let node = this.head;
		this.head = this.tail;
		this.tail = node;

		let next,
			prev = null;

		for (let i = 0; i < this.size; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}

		return this;
	}

	reverseE(head = this.head, prev = null) {
		if (head === null) return null;

		let curr = head,
			next;

		while (curr !== null && curr.data % 2 === 0) {
			next = curr.next;
			curr.next = prev;
			prev = curr;
			curr = next;
		}

		if (curr !== head) {
			head.next = curr;
			curr = this.reverseE(curr, null);
			return prev;
		} else {
			head.next = this.reverseE(head.next, head);
			return head;
		}
	}

	reverseEven() {
		let old = this.reverseE();

		this.head = null;
		this.tail = null;
		this.size = 0;

		while (old !== null) {
			this.push(old.data);
			old = old.next;
		}

		return this;
	}
}

function toArray(h) {
	const arr = [];
	let curr = h.head;
	while (curr) {
		arr.push(curr.data);
		curr = curr.next;
	}
	return arr;
}

function reverse(head) {
	// Write your code here
	const sl = new List();
	let curr = head;
	while (curr !== null) {
		sl.push(curr.data);
		curr = curr.next;
	}

	const result = sl.reverseE();

	return result;
}

// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom, but they are otherwise not editable!
var test_case_number = 1;

function printLinkedList(head) {
	var out = "[";
	while (head != null) {
		out += head.data;
		head = head.next;
		if (head != null) {
			out += " ";
		}
	}
	out += "]";
	return out;
}

function check(expectedHead, outputHead) {
	var result = true;
	var tempExpectedHead = expectedHead;
	var tempOutputHead = outputHead;
	while (expectedHead != null && outputHead != null) {
		result &= expectedHead.data == outputHead.data;
		expectedHead = expectedHead.next;
		outputHead = outputHead.next;
	}
	if (!(expectedHead == null && outputHead == null)) result = false;

	var rightTick = "\u2713";
	var wrongTick = "\u2717";
	if (result) {
		var out = rightTick + " Test #" + test_case_number;
		console.log(out);
	} else {
		var out = "";
		out += wrongTick + " Test #" + test_case_number + ": Expected ";
		out += printLinkedList(tempExpectedHead);
		out += " Your output: ";
		out += printLinkedList(tempOutputHead);
		console.log(out);
	}
	test_case_number++;
}

function createLinkedList(arr) {
	var head = null;
	var tempHead = head;
	for (var v of arr) {
		if (head == null) {
			head = new Node(v);
			tempHead = head;
		} else {
			head.next = new Node(v);
			head = head.next;
		}
	}
	return tempHead;
}

var head_1 = createLinkedList([1, 2, 8, 9, 12, 16]);
var expected_1 = createLinkedList([1, 8, 2, 9, 16, 12]);
var output_1 = reverse(head_1);
check(expected_1, output_1);

var head_2 = createLinkedList([2, 18, 24, 3, 5, 7, 9, 6, 12]);
var expected_2 = createLinkedList([24, 18, 2, 3, 5, 7, 9, 12, 6]);
var output_2 = reverse(head_2);
check(expected_2, output_2);

// Add your own test cases here
