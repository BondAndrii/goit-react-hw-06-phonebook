import { createAction } from "@reduxjs/toolkit";

// import { nanoid } from "nanoid";

export const addContact = createAction("contacts/addContact");
// export const addContact = (name, number) => {
//     return {
//         type: "contacts/addContact",
//         payload: {
//             id: nanoid(),
//             name,
//             number,
//         }
//     }
// }
export const delContact = createAction("contacts/delContact");
// export const delContact = (contactId) => {
//     return {
//         type: "contacts/delContact",
//         payload: contactId,
//     }
// }