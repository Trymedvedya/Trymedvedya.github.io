import React from 'react';
import classes from './UserForm.module.css'

const UserForm = ({ children, ...props }) => {
    return (
        <form {...props} className={classes.UserForm}>
            {children}
        </form>
    );
};
export default UserForm;