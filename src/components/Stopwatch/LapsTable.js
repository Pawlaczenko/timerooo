import React from 'react';
import styles from './LapsTable.module.scss';
import TimeLabel from '../TimeLabel/TimeLabel';

const getFastestLap = (laps) => {
    // console.log(laps);
}

const LapsTable = ({ laps }) => {
    const revLaps = laps.slice(0).reverse();
    getFastestLap(revLaps);

    return (
        <div className={styles.wrapper}>
            <table className={styles.table}>
                <thead className={styles.header}>
                    <tr>
                        <th>Lap</th>
                        <th>Lap time</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {revLaps.map((item, i, array) => {
                        const index = array.length - i;
                        return (
                            <tr className={styles.fastest} key={index}>
                                <td>{(index < 10) ? '0' : null}{index}</td>
                                <td><TimeLabel times={item.lapTime} role="table" /></td>
                                <td><TimeLabel times={item.time} role="table" /></td>
                            </tr>);
                    })}
                </tbody>
            </table>
        </div>
    );
};

function areEqual(prevProps, nextProps) {
    return prevProps.laps.length === nextProps.laps.length;
}

export default React.memo(LapsTable, areEqual);