import classes from './buttonNone.module.css';

const MyButtonNone = ({children, ...props}) => {
    return (
        <button {...props} className={classes.button}>
            {children}
        </button>
    );
};

export default MyButtonNone;