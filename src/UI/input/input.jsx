import { forwardRef } from 'react';
import classes from './input.module.css';

const MyInput = forwardRef((props, ref) => {
    return(
        <input className={classes.input} ref={ref} {...props}/>
    )
})

export default MyInput