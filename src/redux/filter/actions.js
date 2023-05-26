import { createAction } from "@reduxjs/toolkit";

// export const addFilter = (filter) => {
//     return {
//         type: "filter/addFilter",
//         payload: filter,
//     }
// }
export const addFilter = createAction("filter/addFilter");

// export const doClear = () => {
//     return {
//         type: "filter/doClear",
//     }
    
// }
export const doClear = createAction("filter/doClear");