import GLOBAL from "./global.js";
import { Cell } from "./cell.js";
const GRID = GLOBAL.GRID;

export class Board {
	constructor() {
		this.ref = document.getElementById("board");
		this.ref.innerHTML = "";

		for (let row = 0; row < GRID.SIZE; row++) {
			for (let col = 0; col < GRID.SIZE; col++) {
				let cell = new Cell(row, col);
				cell.renderTo(this);
			}
		}
	}
}
