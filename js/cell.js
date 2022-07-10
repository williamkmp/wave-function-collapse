import GLOBAL from "./global.js";
import { DOM } from "./helper.js";

const GRID_ITEM = GLOBAL.GRID_ITEM;
const GRID_SIZE = GLOBAL.GRID.SIZE;

export class Cell {
    constructor(row, col){

        this.isResolved = false;
        this.state = [];

        this.ref = DOM.create(GRID_ITEM.ELEMENT_TAG);
        if(this.ref instanceof HTMLDivElement){
            this.ref.className = GRID_ITEM.CLASS;
            this.ref.dataset.row = row;
            this.ref.dataset.col = col;
            this.ref.dataset.index = row * GRID_SIZE + col;
            this.ref.style.backgroundImage = `url(${GLOBAL.GRID_ITEM.IMG_PATH_PREFIX}blank.png)`;
        }
    }

    renderTo(board){
        board.ref.appendChild(this.ref);
    }
}
