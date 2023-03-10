import React from 'react';
import classes from './InputForm.module.css';
import ReactInputMask from 'react-input-mask';
const InputForm = (props) => {
    return (
        <ReactInputMask {...props} className={classes.InputForm} ></ReactInputMask>
    );
};

export default InputForm;