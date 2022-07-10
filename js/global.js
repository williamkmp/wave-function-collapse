let style = getComputedStyle(document.body);
let gridDimension = style.getPropertyValue('--grid-item-count');


const GLOBAL = {
    GRID : {
        SIZE : gridDimension,
        CHILD_COUNT : gridDimension * gridDimension,
    },

    GRID_ITEM : {
        CLASS : "item",
        ELEMENT_TAG : "DIV",
        IMG_PATH_PREFIX : "../images/"
    }
}

export default GLOBAL;