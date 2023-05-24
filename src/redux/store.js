import { createStore } from "redux";

import { devToolsEnhancer } from "@redux-devtools/extension";

import { rootReducer } from "./contacts/reducer";

// import initialContacts from "../data/contacts.json";

// const initialState = {
//     contacts: initialContacts,
//     filter:""
// }

// const rootReducer = (state = initialState, actions) => {
//     return state;
// }

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
