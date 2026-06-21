//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const normalize = (word) => [...word.toLowerCase()].sort().join('');

export const findAnagrams = (target, wordList) => {
	const targetKey = normalize(target);
	const targetLower = target.toLowerCase();

	return wordList.filter(
		(word) =>
			word.length === target.length &&
			word.toLowerCase() !== targetLower &&
			normalize(word) === targetKey,
	);
};
