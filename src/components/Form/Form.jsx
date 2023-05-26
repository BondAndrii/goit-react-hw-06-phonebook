import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { addContact } from "redux/contacts/actions";

import { getContacts } from "redux/contacts/selectors";

import { nanoid } from "nanoid";

// import PropTypes from "prop-types";

import "./Form.css"

export default function Form() {
    
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    // const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const nameId = nanoid();
    const numberId = nanoid();

    function reset() {
        // setId('');
        setName('');
        setNumber('');        
    }
    const handleChange = e => {
        const { name, value } = e.currentTarget;
        // setId(id);
        switch (name) {
            case "names":
                setName(value);
                break;
            case "number":
                setNumber(value);
                break;
            default:
                return;
        }
        
          
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (contacts.find(contact => contact.name === name)) {
            const message = `Абонент ${name} вже є в книзі`;
            alert(message);  
        }
        else { 
            
            const data = {id: nanoid(), name, number }
            dispatch(addContact(data));         
        }  
        
       
        
        reset(); 
        // return priSubmit(data);
        
    }
return (            
            <form className="Form" onSubmit={handleSubmit}>
                <label className="Label" htmlFor={nameId}>
                    <p className="Text">Iм'я:</p>
                    <input
                        type="text"
                        name="names"
                        className="Input"
                        id={nameId}
                        value={name}
                        onChange={handleChange}
                        placeholder="введи ім'я"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
               
                <label className="Label" htmlFor={numberId}>
                    <p className="Text">Номер:</p>
                    <input
                        type="tel"
                        name="number"
                        className="Input"
                        value={number}
                        id={numberId}
                        onChange={handleChange}
                        placeholder="введи номер телефону"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                
                <button className="Button" type="submit">Запиши!</button>
            </form>               
        );
    
}

// Form.propTypes = {
//     priSubmit: PropTypes.func.isRequired,
// }