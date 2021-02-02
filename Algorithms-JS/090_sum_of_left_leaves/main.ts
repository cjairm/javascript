/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

interface TreeNodeType {
	val: number;
	left: TreeNodeType | null;
	right: TreeNodeType | null;
}

function sumOfLeftLeaves(root: TreeNodeType | null): number {
	if (root === null) return 0;
	let currentSum: number = 0;

	if (
		root.left !== null &&
		root.left.left === null &&
		root.left.right === null
	) {
		currentSum += root.left.val;
	} else {
		currentSum += sumOfLeftLeaves(root.left);
	}
	currentSum += sumOfLeftLeaves(root.right);

	return currentSum;
}
