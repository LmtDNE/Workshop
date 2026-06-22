/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
const AVAILABLE_ITEMS = {
	Margherita: 7,
	Caprese: 9,
	Formaggio: 10,
	ExtraToppings: 2,
	ExtraSauce: 1,
};
export function pizzaPrice(pizza, ...extras) {
	if (extras.length === 0) {
		return AVAILABLE_ITEMS[pizza] || 0;
	}
	const [firstExtra, ...rest] = extras;
	return AVAILABLE_ITEMS[firstExtra] + pizzaPrice(pizza, ...rest);
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
	return pizzaOrders.reduce((orderAccum, order) => {
		const { pizza, extras } = order;

		const pizzaCost =
			AVAILABLE_ITEMS[pizza] +
			extras.reduce((accum, extra) => accum + AVAILABLE_ITEMS[extra], 0);
		return orderAccum + pizzaCost;
	}, 0);
}
