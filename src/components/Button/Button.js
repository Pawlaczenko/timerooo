import React from 'react';
import styles from './Button.module.scss';

const Button = ({ color, handleClick, children }) => (
    <button className={[styles.button, styles[color]].join(' ')} onClick={handleClick}>{children}</button>
)

export default Button;