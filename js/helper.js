export const DOM = {
	create : (string) => document.createElement(string),
	finds : (selector) => Array.from(document.querySelectorAll(selector)),
    find : (selector) => Array.from(document.querySelector(selector))
};
