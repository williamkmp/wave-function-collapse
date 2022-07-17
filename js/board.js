import GLOBAL from "./global.js";
import { Cell } from "./cell.js";
import { ARRAY } from "./helper.js";
const GRID = GLOBAL.GRID;

export class Board {
	constructor(element, givenStates) {
		this.initialStates = givenStates;
		
		this.ref = element;
		this.ref.innerHTML = "";
		
		this.cells = [];
		for (let row = 0; row < GRID.SIZE; row++) {
			let cellRows = [];
			for (let col = 0; col < GRID.SIZE; col++) {
				let newCell = new Cell(row, col, this.initialStates);
				newCell.renderTo(this);
				cellRows.push(newCell);
			}
			this.cells.push(cellRows);
		}
	
		let initialState = ARRAY.chooseRandom(this.initialStates);
		let initialCell = ARRAY.chooseRandom(this.cells);
	
		initialCell.setState(initialState);
		initialCell.update();
	}
}
