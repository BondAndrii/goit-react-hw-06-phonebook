
import initialContacts from "../../data/contacts.json";


const contactsInitialState = initialContacts;


export const contactsReducer = (state = contactsInitialState, action) => {
    switch (action.type) {
        case "contacts/addContact":            
            return [...state, action.payload,]
            
        case "contacts/delContact": 
            return state.filter(contact => contact.id !== action.payload)   
        default: 
            return state;
    }
}




// export const rootReducer = (state = {}, action) => {
//     return {
//         contacts: contactsReducer(state.contacts, action),
//         filter: filterReducer(state.filter, action),
//     };
// }

// const initialState = {
//     contacts: initialContacts,
//     filter:""
// }

// export const rootReducer = (state = initialState, action) => {
//     console.log("in reducer", state)
//     switch (action.type) {
//         case "contacts/addContact":
            
//             return {
//                 ...state,
//                 contacts: [...state.contacts, action.payload,]
//             }
//         case "contacts/delContact": 
//             return {
//                 ...state,
//                 contacts: state.contacts.filter(contact => contact.id !== action.payload),
//             }
//         case "filter/addFilter": 
//             return {
//                 ...state, 
//                 filter: action.payload,
//             }
//         case "filter/doClear":            
//             return {
//                 ...state,
//                 filter:"",
//             }
//         default: 
//             return state;
//     }
    
// }