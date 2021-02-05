const expect = require("chai").expect;

const SingleLinkedList = require("../main.js");

const sll = new SingleLinkedList();

describe("Push Method - SingleLinkedList", () => {
	it("No elements", () => {
		expect(sll).to.have.lengthOf(0);
	});

	it("1 element", () => {
		sll.push(5);
		expect(sll).to.have.lengthOf(1);
		expect(sll.head.val).to.equal(5);
		expect(sll.tail.val).to.equal(5);
	});

	it("2 elements", () => {
		sll.push(10);
		expect(sll).to.have.lengthOf(2);
		expect(sll.head.val).to.equal(5);
		expect(sll.tail.val).to.equal(10);
	});

	it("3 elements", () => {
		sll.push(15);
		expect(sll).to.have.lengthOf(3);
		expect(sll.head.val).to.equal(5);
		expect(sll.tail.val).to.equal(15);
	});

	it("n elements", () => {
		const sll2 = new SingleLinkedList();
		const randomNumber = Math.floor(Math.random() * 100 + 1);

		let i = 0;
		while (i < randomNumber) {
			i++;
			sll2.push(i);
		}

		expect(sll2).to.have.lengthOf(randomNumber);
		expect(sll2.tail.val).to.equal(randomNumber);
	});
});

describe("Pop Method - SingleLinkedList", () => {
	it("Remove last element (15)", () => {
		expect(sll).to.have.lengthOf(3);
		expect(sll.pop()).to.equal(15);
	});

	it("Remove last element (10)", () => {
		expect(sll).to.have.lengthOf(2);
		expect(sll.pop()).to.equal(10);
	});

	it("Remove last element (5)", () => {
		expect(sll).to.have.lengthOf(1);
		expect(sll.pop()).to.equal(5);
	});

	it("Remove from empty list", () => {
		expect(sll).to.have.lengthOf(0);
		expect(sll.pop()).to.equal(undefined);
	});
});

describe("Get Method - SingleLinkedList", () => {
	before(() => {
		let i = 0;
		sll.push(1);
		while (i < 50) {
			sll.push(Math.floor(Math.random() * 50 + 1));
			i++;
		}
		sll.push(52);
	});

	it("Get value from position 0", () => {
		expect(sll).to.have.lengthOf(52);
		expect(sll.get(0)).to.equal(1);
	});

	it("Get value from position outbounds", () => {
		expect(sll.get(60)).to.equal(undefined);
	});

	it("Get value from position negative number", () => {
		expect(sll.get(-1)).to.equal(undefined);
	});

	it("Get value from position (n)", () => {
		expect(sll.get(Math.floor(Math.random() * 50 + 1))).not.undefined;
	});
});
