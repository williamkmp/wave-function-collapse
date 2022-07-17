import GLOBAL from "./global.js";
import { Board } from "./board.js";
import { DOM } from "./helper.js";
import { State } from "./state.js";

const GRID_ITEM = GLOBAL.GRID_ITEM;
const GRID_SIZE = GLOBAL.GRID.SIZE;

export class Cell {
    constructor(row, col, possibleStates){
        this.isResolved = false;
        this.states = possibleStates;

        //initial render
        this.ref = DOM.create(GRID_ITEM.ELEMENT_TAG);
        this.ref.className = GRID_ITEM.CLASS;
        this.ref.dataset.row = row;
        this.ref.dataset.col = col;
        this.ref.dataset.index = row * GRID_SIZE + col;
        this.ref.dataset.isResolved = false;
        this.ref.dataset.possibleState = this.states.map(state => state.type).join(", ");
    }

    /**
     * add this cell to an instance of a Board class, making this 
     * cell rendering is managed by the passed board argument 
     * @param {Board} board 
     */
    renderTo(board){
        board.ref.appendChild(this.ref);
    }

    setState(state){
        this.states = [];
        if(state instanceof State){
            this.states.push(state);
        }
        return;
    }

    update(){
        if(this.states.length == 1){
            let resolvedState = this.states.pop();
            let url = `url(../images/${resolvedState.type})`;
            this.ref.style.setProperty("background-image", url);
            this.isResolved = true;
            this.ref.removeAttribute("possibleState");
        }else{
            this.ref.dataset.possibleState = this.states.map(state => state.type).join(", ");
        }
    }
}
