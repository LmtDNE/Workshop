/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingMins) {
	if (remainingMins === undefined) return 'You forgot to set the timer.';

	if (remainingMins === 0) {
		return 'Lasagna is done.';
	}
	return 'Not done, please wait.';
}

export function preparationTime(layers, estTime = 2) {
	return layers.length * estTime;
}

export function quantities(layers) {
	const layersObj = {
		noodles: 0,
		sauce: 0,
	};
	for (let layer of layers) {
		if (layersObj.hasOwnProperty(layer)) {
			if (layer === 'noodles') {
				layersObj[layer] += 50;
			} else {
				layersObj[layer] += 0.2;
			}
		}
	}

	return layersObj;
}

export function addSecretIngredient(friendList, myList) {
	const secretIngedient = friendList[friendList.length - 1];
	myList.push(secretIngedient);
}

export function scaleRecipe(recipe, portions) {
	const portionRecipe = { ...recipe };
	const factor = portions / 2;
	for (let [key, value] of Object.entries(portionRecipe)) {
		portionRecipe[key] = value * factor;
	}
	console.log(scaleRecipe);
	return portionRecipe;
}
