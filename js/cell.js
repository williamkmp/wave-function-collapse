import GLOBAL from "./global.js";
import { Board } from "./board.js";
import { DOM } from "./helper.js";

const GRID_ITEM = GLOBAL.GRID_ITEM;
const GRID_SIZE = GLOBAL.GRID.SIZE;

export class Cell {
    constructor(row, col){
        this.isResolved = false;
        this.state = [];

        this.ref = DOM.create(GRID_ITEM.ELEMENT_TAG);
        this.ref.className = GRID_ITEM.CLASS;
        this.ref.dataset.row = row;
        this.ref.dataset.col = col;
        this.ref.dataset.index = row * GRID_SIZE + col;
    }

    /**
     * add this cell to an instance of a Board class, making this 
     * cell rendering is managed by the passed board argument 
     * @param {Board} board 
     */
    renderTo(board){
        board.ref.appendChild(this.ref);
    }
}
