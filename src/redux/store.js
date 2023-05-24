import { createStore } from "redux";

import { devToolsEnhancer } from "@redux-devtools/extension";

// import initialContacts from "../data/contacts.json";

const initialState = {
    contacts: [],
    filter:""
}

const rootReducer = (state = initialState, actions) => {
    return state;
}

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
