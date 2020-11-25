import React from 'react'
import styles from './TimerBar.module.scss';

const TimerBar = ({ width }) => {
    const progress = `${width * 100}%`;
    return (
        <div className={styles.wrapper}>
            <div className={styles.bar} style={{ width: progress }}></div>
        </div>
    );
};

export default TimerBar;