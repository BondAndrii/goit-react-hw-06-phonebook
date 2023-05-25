import { nanoid } from "nanoid";

export const addContact = (name, number) => {
    // console.log("addContact", data);
    // const { name, number } = data;
    return {
        type: "contacts/addContact",
        payload: {
            id: nanoid(),
            name,
            number,
        }
    }
}

export const delContact = (contactId) => {
    return {
        type: "contacts/delContact",
        payload: contactId,
    }
}