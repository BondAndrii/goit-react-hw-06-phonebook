import React from "react";

import {useDispatch, useSelector } from "react-redux";

import { getFilter } from "redux/filter/selectors";

import { addFilter } from "redux/filter/actions";

// import { getContacts } from "redux/contacts/selectors";

import PropTypes from "prop-types";

import "./Filter.css"

const Filter = ({ value, onChange, onDelete }) => {
    const filtr = useSelector(getFilter);
    // const contacts = useSelector(getContacts);
    console.log("filtr", filtr);
    const dispatch = useDispatch()
    const doFilter = (event) => { 
        dispatch(addFilter(event.currentTarget.value ))
    }
    return (
    <label className="LabelFilter">
        <p className="Text">Пошук за ім'ям:</p> 
        <input
            type="text" value={filtr}
            className="FilterInput"
            placeholder="введи ім'я"
            onChange={doFilter}
        />
        <button className="ButtonFilter" type="button" onClick={onDelete}>Зітрись!</button>
    </label>
    )}
export default Filter;

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}