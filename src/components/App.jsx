import React, { useEffect } from "react";
// import {
//   useState,
//   useEffect
// } from 'react';
import Form from "./Form/Form";
import Filter from './Filter/Filter'
import ContactList from "./ContactList/ContactList";
// import contactsList from "../../src/data/contacts.json"
import "./App.css";
import { useSelector } from "react-redux";
import { getContacts } from "redux/contacts/selectors";
import { getFilter } from "redux/filter/selectors";

export default function App() {

  // const [contacts, setContacts] = useState(() => (JSON.parse(window.localStorage.getItem('contactsArr')) ?? contactsList)); 
 
  // const [filter, setFilter] = useState('');
  const filtr = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  // const formSubmitHandler = data => {
  //       if (contacts.find(contact => contact.name === data.name)) {
  //     const message = `Абонент ${data.name} вже є в книзі`;
  //     alert(message);  
  //   }
  //       else {
          
  //         setContacts(contacts => [data, ...contacts]);
  //         console.log("in app", contacts, filter);
      
  //   }  
  // }
  useEffect(()=>{
    window.localStorage.setItem('contactsArr', JSON.stringify(contacts))
  }, [contacts]);
  
  // const doFilter = (e) => { 
  //   setFilter(e.currentTarget.value)
  // }
  // const doClear = () => {
  //   setFilter(''); 
  // }
 function toFoundAbonent(a,b) {
   const normalizedFilter = a.toLowerCase();
   console.log("normalizedFilter", normalizedFilter);
   const findAbonent = b.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
   console.log("findAbonent", findAbonent);
   return findAbonent;
    // return b.filter(contact =>
    //   contact.name.toLowerCase().includes(normalizedFilter),
    // );
  };
 const arr = toFoundAbonent(filtr, contacts)

  
  // const deleteContact = (contactId) => { 
  //   setContacts((contacts) => (contacts.filter(contact => contact.id !== contactId)));
  // };
  return (
    <div className="Container">
      <h1 className="Tittle">Записник контактів</h1>
      <Form />      
      <h2 className="SecondTittle">Контакти</h2>
      <Filter />
      <ContactList contacts={arr}  />
    </div>
  );
}
