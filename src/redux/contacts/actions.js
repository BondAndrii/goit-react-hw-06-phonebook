import { nanoid } from "nanoid";

export const addContact = (data) => {
    console.log("addContact", data);
    const { name, number } = data;
    return {
        type: "contacts/addContact",
        payload: {
            id: nanoid(),
            name,
            number,
        }
    }
}