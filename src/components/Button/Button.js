import React from 'react';
import styles from './Button.module.scss';

const Button = ({ color, handleClick, children, secondary }) => {
    const isSecondary = secondary ? styles.secondary : null;
    const classes = [styles.button, styles[color], isSecondary].join(' ');
    return (
        <button
            className={classes}
            onClick={handleClick}>
            {children}
        </button>
    )
}

export default React.memo(Button);