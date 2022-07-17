import { Board } from "./board.js";
import { DOM } from "./helper.js";
import { generateInitialState } from "./stateGenerator.js";

let count = 0;
const ALL_STATES = generateInitialState();
const RENDER_BUTTON = DOM.find("#renderButton");
const STEP_VIEW = DOM.find("#stepView");
const BOARD_DIV = DOM.find("#board");

let board = new Board(BOARD_DIV, ALL_STATES);
STEP_VIEW.innerHTML = count;

RENDER_BUTTON.addEventListener("click", (e) => {
	e.preventDefault();
	render();
});

function render() {
	//TODO: implement render, entropy calculateio and board update
	count = count + 1;
	STEP_VIEW.innerHTML = count; 
}