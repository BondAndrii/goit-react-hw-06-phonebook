import initialContacts from "../../data/contacts.json";


const initialState = {
    contacts: initialContacts,
    filter:""
}

export const rootReducer = (state = initialState, action) => {
    console.log("in reducer", state)
    switch (action.type) {
        case "contacts/addContact":
            
            return {
                ...state,
                contacts: [
                    ...state.contacts, action.payload,
                ]
            }
        default:
            return state;
    }
    
}