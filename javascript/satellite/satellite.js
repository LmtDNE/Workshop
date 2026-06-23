//
// This is only a SKELETON file for the 'Satellite' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const treeFromTraversals = (preorder, inorder) => {
	if (preorder.length === 0 && inorder.length === 0) return {};
	if (preorder.length !== inorder.length)
		throw new Error('traversals must have the same length');
	if (new Set(preorder).size !== preorder.length)
		throw new Error('traversals must contain unique items');
	if (!preorder.every((value) => inorder.includes(value)))
		throw new Error('traversals must have the same elements');

	const root = preorder[0];
	const rootIdx = inorder.indexOf(root);
	const leftInorder = inorder.slice(0, rootIdx);
	const rightInorder = inorder.slice(rootIdx + 1);
	const leftPreorder = preorder.slice(1, 1 + leftInorder.length);
	const rightPreorder = preorder.slice(1 + leftPreorder.length);

	return {
		value: root,
		left: treeFromTraversals(leftPreorder, leftInorder),
		right: treeFromTraversals(rightPreorder, rightInorder),
	};
};
