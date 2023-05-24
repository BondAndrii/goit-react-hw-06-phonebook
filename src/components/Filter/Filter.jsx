import React from "react";

import { useSelector } from "react-redux";

import { getFilter } from "redux/filter/selectors";

import PropTypes from "prop-types";

import "./Filter.css"

const Filter = ({ value, onChange, onDelete }) => {
    const filtr = useSelector(getFilter);
    // console.log("filtr", filtr);
    return (
    <label className="LabelFilter">
        <p className="Text">Пошук за ім'ям:</p> 
        <input
            type="text" value={value}
            className="FilterInput"
            placeholder="введи ім'я"
            onChange={onChange}
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