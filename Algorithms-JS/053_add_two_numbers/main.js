/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const l1Num = getReversed(l1);
    const l2Num = getReversed(l2);
    const splitedNums = makeSum(l1Num, l2Num);

    let mainNode = new ListNode(splitedNums[0], null);
    let currNode = mainNode;

    for (let i = 1; splitedNums.length > i; i++) {
        const currNum = splitedNums[i];
        const nextNode = new ListNode(currNum, null);
        currNode.next = nextNode;
        currNode = nextNode;
    }

    return mainNode;
};

var getReversed = function (list) {
    let currNode = list;
    let lNum = [];
    while (true) {
        lNum.push(currNode.val);
        if (currNode.next === null) break;
        currNode = currNode.next;
    }

    return lNum;
};

var makeSum = function (str1, str2) {
    let num1Len = str1.length;
    let num2Len = str2.length;
    const result = [];

    if (num1Len > num2Len) {
        for (let i = num2Len; num1Len > i; i++) {
            str2.push(0);
        }
    } else {
        for (let i = num1Len; num2Len > i; i++) {
            str1.push(0);
        }
    }
    num1Len = str1.length;
    num2Len = str2.length;

    let carry = 0;
    let curr1Sum = 0;
    let curr2Sum = 0;
    let currSum = 0;

    for (let i = 0; num1Len > i; i++) {
        curr1Sum = str1[i];
        curr2Sum = str2[i];
        currSum = curr1Sum + curr2Sum;
        const total = currSum + carry;

        if (total <= 9) {
            result.push(total);
            carry = 0;
        } else {
            result.push(total.toString().charAt(1));
            carry = 1;
        }
    }

    if (carry > 0) result.push(carry);

    return result;
};
