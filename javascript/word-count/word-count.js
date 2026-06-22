//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (subtitles) => {
	const cleanWordList = subtitles.match(/[a-zA-Z\d]+(?:'[a-zA-Z\d]+)*/g) ?? [];
	const subtitlesMap = new Map();
	for (word of cleanWordList) {
		const normalized = word.toLowerCase();
		subtitlesMap.set(normalized, (subtitlesMap.get(normalized) || 0) + 1);
	}
	const obj = Object.fromEntries(subtitlesMap);

	return obj;
};
