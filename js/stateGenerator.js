import { State, STATE } from "./state.js"; 

const stateBlank    = new State(STATE.BLANK);
const stateUp       = new State(STATE.UP); 
const stateLeft     = new State(STATE.LEFT); 
const stateRight    = new State(STATE.RIGHT);
const stateDown     = new State(STATE.DOWN); 

//setting the up state
stateBlank.addTopCandidate      (stateUp);
stateBlank.addTopCandidate      (stateBlank);
stateBlank.addLeftCandidate     (stateLeft);
stateBlank.addLeftCandidate     (stateBlank);
stateBlank.addRightCandidate    (stateRight);
stateBlank.addRightCandidate    (stateRight);
stateBlank.addBottomCandidate   (stateDown);
stateBlank.addBottomCandidate   (stateBlank);

stateDown.addTopCandidate       (stateBlank);
stateDown.addTopCandidate       (stateUp);
stateDown.addLeftCandidate      (stateDown);
stateDown.addLeftCandidate      (stateRight);
stateDown.addLeftCandidate      (stateUp);
stateDown.addRightCandidate     (stateDown);
stateDown.addRightCandidate     (stateLeft);
stateDown.addRightCandidate     (stateUp);
stateDown.addBottomCandidate    (stateLeft);
stateDown.addBottomCandidate    (stateRight);
stateDown.addBottomCandidate    (stateUp);

stateLeft.addTopCandidate       (stateDown);
stateLeft.addTopCandidate       (stateLeft);
stateLeft.addTopCandidate       (stateRight);
stateLeft.addLeftCandidate      (stateDown);
stateLeft.addLeftCandidate      (stateRight);
stateLeft.addLeftCandidate      (stateUp);
stateLeft.addRightCandidate     (stateBlank);
stateLeft.addRightCandidate     (stateRight);
stateLeft.addBottomCandidate    (stateLeft);
stateLeft.addBottomCandidate    (stateRight);
stateLeft.addBottomCandidate    (stateUp);

stateRight.addTopCandidate      (stateDown);
stateRight.addTopCandidate      (stateLeft);
stateRight.addTopCandidate      (stateRight);
stateRight.addLeftCandidate     (stateBlank);
stateRight.addLeftCandidate     (stateLeft);
stateRight.addRightCandidate    (stateDown);
stateRight.addRightCandidate    (stateLeft);
stateRight.addRightCandidate    (stateUp);
stateRight.addBottomCandidate   (stateLeft);
stateRight.addBottomCandidate   (stateRight);
stateRight.addBottomCandidate   (stateUp);

stateUp.addTopCandidate         (stateDown);
stateUp.addTopCandidate         (stateLeft);
stateUp.addTopCandidate         (stateRight);
stateUp.addLeftCandidate        (stateDown);
stateUp.addLeftCandidate        (stateRight);
stateUp.addLeftCandidate        (stateUp);
stateUp.addRightCandidate       (stateDown);
stateUp.addRightCandidate       (stateLeft);
stateUp.addRightCandidate       (stateUp);
stateUp.addBottomCandidate      (stateBlank);
stateUp.addBottomCandidate      (stateDown);

/**
 * 
 */
export function generateInitialState(){
    return [stateUp,  stateLeft, stateRight, stateDown];
}