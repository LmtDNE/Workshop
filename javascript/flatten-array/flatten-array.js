//
// This is only a SKELETON file for the 'Flatten Array' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const flatten = (input) => {
	if (!Array.isArray(input)) {
		return input === null || typeof input === 'undefined' ? [] : [input];
	}
	return input.reduce(
		(accumValue, value) => [...accumValue, ...flatten(value)],
		[],
	);
};
