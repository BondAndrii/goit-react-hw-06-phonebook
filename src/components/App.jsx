import React from "react";

import { useSelector } from "react-redux";

import { getContacts } from "redux/contacts/selectors";

import { getFilter } from "redux/filter/selectors";

import Form from "./Form/Form";

import Filter from './Filter/Filter'

import ContactList from "./ContactList/ContactList";

import styles from "./App.module.css";


export default function App() {

  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  
  function toFoundAbonent(a, b) {  
    if (!a) {
      return contacts;
    }
    
    const normalizedFilter = a.toLowerCase();
    
    const findAbonent = b.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    
    return findAbonent;   
  };

  const arr = toFoundAbonent(filter, contacts);

  return (
    <div className={styles.Container}>
      <header>
        <h1 className={styles.Tittle}>Записник контактів</h1>
      </header>
      <Form />      
      <h2 className={styles.SecondTittle}>Контакти</h2>
      <Filter />
      <ContactList contacts={arr}  />     
    </div>
  );
}
