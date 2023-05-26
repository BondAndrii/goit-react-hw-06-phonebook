import { createSlice } from "@reduxjs/toolkit";

import initialContacts from "../../data/contacts.json"

const contactsInitialState = JSON.parse(window.localStorage.getItem('contactsArr')) ?? initialContacts;

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact(state, action) {
            return [...state, action.payload,]
        },
        delContact(state, action) {
            state.filter(contact => contact.id !== action.payload)
        }
    }
})

export const { addContact, delContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;