import React from 'react';
import styles from './TimeLabel.module.scss';

const TimeLabel = ({ times }) => (
    <div className={styles.clock}>
        <span className={styles.bold}>{times[0] < 10 ? '0' : null}{times[0]}</span>:
        <span className={styles.bold}>{times[1] < 10 ? '0' : null}{times[1]}</span>.
        <span className={styles.thin}>{times[2] < 10 ? '0' : null}{times[2]}</span>
    </div>
);

export default TimeLabel;