//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (num) => {
	let converted = '';
	if (num % 3 === 0) {
		converted += 'Pling';
	}
	if (num % 5 === 0) {
		converted += 'Plang';
	}
	if (num % 7 === 0) {
		converted += 'Plong';
	}

	return converted.length === 0 ? String(num) : converted;
};
