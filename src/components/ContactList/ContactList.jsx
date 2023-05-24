import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { getContacts } from "redux/contacts/selectors";

import { delContact } from "redux/contacts/actions";

import PropTypes from "prop-types";

import "./ContactList.css"

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    console.log("cont", contacts);
    return (
    <ul className="ContactList">
        {contacts.map((contact) => <li className="ContactList__element" key={contact.id} id={contact.id}>
            <p className="Text">{contact.name}: {contact.number}</p>
            <button className="Button__element" type="button" onClick={()=> dispatch(delContact(contact.id))}>Видали!</button>
        </li>
        )}
    </ul>
);}

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
    }))
}