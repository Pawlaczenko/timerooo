import React from 'react';
import styles from './LapsTable.module.scss';
import TimeLabel from '../TimeLabel/TimeLabel';

const LapsTable = ({ laps }) => (
    <table className={styles.wrapper}>
        <thead className={styles.header}>
            <tr>
                <th>Lap</th>
                <th>Lap time</th>
                <th>Time</th>
            </tr>
        </thead>
        <tbody>
            {laps.map((item, index) => (
                <tr key={index + 1}>
                    <td>{(index + 1 < 10) ? '0' : null}{index + 1}</td>
                    <td><TimeLabel times={item.lapTime} role="table" /></td>
                    <td><TimeLabel times={item.time} role="table" /></td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default LapsTable;