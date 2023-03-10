import React from 'react';
import classes from './TextAreaForm.module.css'
const TextAreaForm = (props) => {
    return (
        <textarea className={classes.TextAreaForm} {...props} >

        </textarea>
    );
};



export default TextAreaForm;