import { createReducer } from "@reduxjs/toolkit";
import { addFilter, doClear } from "./actions";

const filterInitialState = '';

export const filterReducer = createReducer(filterInitialState, {
    [addFilter]: (state, action) => {
        return action.payload;
    },
    [doClear]: (state, action) => {
        return ""
    }
})

// export const filterReducer = (state = filterInitialState, action) => {
//      switch (action.type) {
//          case "filter/addFilter":
//              return action.payload;
//          case "filter/doClear":
//              return "";
//         default: 
//             return state;
//     }
// }