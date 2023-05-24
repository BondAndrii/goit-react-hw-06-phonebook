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
        case "contacts/delContact": 
            const { contacts } = state;
            return {
                contacts: contacts.filter(contact => contact.id !== action.payload),
            }
        default: 
            return state;
    }
    
}