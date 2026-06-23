//
// This is only a SKELETON file for the 'Binary Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const find = (list, target, start = 0, end = list.length - 1) => {
	if (start > end) throw new Error('Value not in array');

	const midIdx = Math.floor((start + end) / 2);
	const middle = list[midIdx];

	if (target === middle) return midIdx;
	if (middle > target) return find(list, target, start, midIdx - 1);
	return find(list, target, midIdx + 1, end);
};
