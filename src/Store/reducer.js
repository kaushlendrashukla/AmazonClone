import React from "react";

export const initialState = {
    cart: [],
}

function reducer(state, action) {
    switch (action.type) {
        case "ADD":
            break;
        case "REMOVE":
            break;
            default : 
            return state;
    }
}

export default reducer;