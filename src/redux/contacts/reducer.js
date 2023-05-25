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
            // const { contacts } = state;
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload),
                // contacts: contacts.filter(contact => contact.id !== action.payload),
            }
        case "filter/addFilter": 
            return {
                ...state, 
                filter: action.payload,
               

            }
        // case "filter/doFilter":
        //     return {

        //     }
        default: 
            return state;
    }
    
}