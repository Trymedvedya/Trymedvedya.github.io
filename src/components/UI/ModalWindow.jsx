import React from 'react';

import classes from './ModalWindow.module.css'



const ModalWindow = ({ children, visible, setVisible }) => {

    const rootCl = [classes.outsideModal];
    if (visible === true) {
        rootCl.push(classes.active)
    }

    return (

        <div>
            <div className={rootCl.join(' ')} onClick={() => setVisible(false)}>

                <div className={classes.insideModal} onClick={(event) => event.stopPropagation()}>
                    {children}
                </div>
            </div>

        </div>
    );
};



export default ModalWindow;