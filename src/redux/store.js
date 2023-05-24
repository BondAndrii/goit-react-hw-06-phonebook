import { createStore } from "redux";

// import initialContacts from "../data/contacts.json";

const initialState = {
    contacts: [],
    filter:""
}

const rootReducer = (state = initialState, actions) => {
    return state;
}

export const store = createStore(rootReducer);