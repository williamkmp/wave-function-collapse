export const STATE = {
    VOID : "__void__",
    BLANK : "blank.png",
    UP : "up.png",
    LEFT : "left.png",
    RIGHT : "right.png",
    DOWN : "down.png",
}

/**
 * class to represent the state of a cell,
 * a state has a type and candidate. A candidate is an
 * array that stores possible state of neigbouring cell 
 * of this type of cell  
 */
export class State {
    constructor(type){
        this.type = type;
        this.candidate = {
            top: [],
            left : [],
            right : [],
            bottom : []
        }
    }

    /**
     * add to the left state candidate for this state,
     * used for determining the entropy of neighbouring
     * cell from current cell
     * 
     * @param {State} state
     */
    addLeftCandidate(state){
        this.candidate.left.push(state); 
    }

    /**
     * add to the right state candidate for this state,
     * used for determining the entropy of neighbouring
     * cell from current cell
     * 
     * @param {State} state
     */
     addRightCandidate(state){
        this.candidate.right.push(state); 
    }

     /**
     * add to the top state candidate for this state,
     * used for determining the entropy of neighbouring
     * cell from current cell
     * 
     * @param {State} state
     */
      addTopCandidate(state){
        this.candidate.top.push(state); 
    }

     /**
     * add to the bottom state candidate for this state,
     * used for determining the entropy of neighbouring
     * cell from current cell
     * 
     * @param {State} state
     */
      addBottomCandidate(state){
        this.candidate.bottom.push(state); 
    }
}