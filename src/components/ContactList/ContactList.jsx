import React from "react";

import { useDispatch } from "react-redux";

import { delContact } from "redux/contacts/contactsSlice";

import PropTypes from "prop-types";

import styles from "./ContactList.module.css"

const ContactList = ({ contacts }) => {
    
    const dispatch = useDispatch();
    
    return (
        <ul className={styles.ContactList}>
            {contacts.map((contact) => <li className={styles.ContactList__element} key={contact.id} id={contact.id}>
                <p className={styles.Text}>{contact.name}: {contact.number}</p>
                <button className={styles.Button__element} type="button" onClick={()=> dispatch(delContact(contact.id))}>Видали!</button>
            </li>
            )}
        </ul>
    );
}

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
    }))
}