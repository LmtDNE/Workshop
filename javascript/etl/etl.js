//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (inputObj) => {
	const transformObj = {};
	for (let [key, value] of Object.entries(inputObj)) {
		key = parseInt(key);
		value.forEach((item) => {
			transformObj[item.toLowerCase()] = key;
		});
	}
	return transformObj;
};
