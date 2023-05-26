// import { combineReducers, createStore } from "redux";

// import { devToolsEnhancer } from "@redux-devtools/extension";

import { contactsReducer } from "./contacts/reducer";

import { filterReducer } from "./filter/reducer";

import { configureStore } from "@reduxjs/toolkit";

// const rootReducer = combineReducers(
//     {
//         contacts: contactsReducer,
//         filter: filterReducer,
//     }
// );

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    }
})
