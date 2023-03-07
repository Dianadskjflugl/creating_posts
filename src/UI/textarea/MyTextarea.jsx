import React, { forwardRef } from 'react';
import classes from './MyTextarea.module.css';

const MyTextArea = forwardRef((props, ref) => {
    return (
        <textarea className={classes.textarea} ref={ref} {...props}></textarea>
    );
})

export default MyTextArea;

