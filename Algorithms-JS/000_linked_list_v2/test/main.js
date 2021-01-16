const assert = require("assert");

const SingleLinkedList = require("../main.js");

const sll = new SingleLinkedList();

describe("Push Method - SingleLinkedList", () => {
	it("No elements", () => {
		assert.equal(0, sll.length);
	});

	it("1 element", () => {
		sll.push(5);
		assert.equal(1, sll.length);
		assert.equal(5, sll.head.val);
		assert.equal(5, sll.tail.val);
	});

	it("2 elements", () => {
		sll.push(10);
		assert.equal(2, sll.length);
		assert.equal(10, sll.head.next.val);
		assert.equal(10, sll.tail.val);
	});

	it("3 elements", () => {
		sll.push(15);
		assert.equal(3, sll.length);
		assert.equal(15, sll.head.next.next.val);
		assert.equal(15, sll.tail.val);
	});

	it("n elements", () => {
		const sll2 = new SingleLinkedList();
		const randomNumber = Math.floor(Math.random() * 100 + 1);

		let i = 0;
		while (i < randomNumber) {
			i++;
			sll2.push(i);
		}

		assert.equal(randomNumber, sll2.length);
		assert.equal(randomNumber, sll2.tail.val);
	});
});

describe("Pop Method - SingleLinkedList", () => {
	it("Remove last element (15)", () => {
		assert.equal(15, sll.pop());
		assert.equal(2, sll.length);
	});

	it("Remove last element (10)", () => {
		assert.equal(10, sll.pop());
		assert.equal(1, sll.length);
	});

	it("Remove last element (5)", () => {
		assert.equal(5, sll.pop());
		assert.equal(0, sll.length);
	});

	it("Remove from empty list", () => {
		assert.equal(undefined, sll.pop());
		assert.equal(0, sll.length);
	});
});
