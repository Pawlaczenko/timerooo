import React from 'react';
import styles from './Navigation.module.scss';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => (
    <ul className={styles.wrapper}>
        <li className={styles.item}><NavLink exact activeClassName={styles.itemActive} to="/">Clock</NavLink></li>
        <li className={styles.item}><NavLink activeClassName={styles.itemActive} to="/stopwatch">Stopwatch</NavLink></li>
        <li className={styles.item}><NavLink activeClassName={styles.itemActive} to="/timer">Timer</NavLink></li>
    </ul>
);

export default Navigation;