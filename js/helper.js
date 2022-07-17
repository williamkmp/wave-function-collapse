export const DOM = {
	create: (string) => document.createElement(string),
	finds: (selector) => Array.from(document.querySelectorAll(selector)),
	find: (selector) => document.querySelector(selector),
};

export const NUMBER = {
	randomBetween : (min = 0, max = 100) => {
		let difference = max - min;
		let rand = Math.random();
		return Math.floor(rand * difference) + min;
	}
}

export const ARRAY = {
	chooseRandom: (array) => {
		if (!Array.isArray(array) && array.length <= 0) return undefined;
		let result = array[NUMBER.randomBetween(0, array.length)]; 
		return Array.isArray(result) ? ARRAY.chooseRandom(result) : result;
	},
};
