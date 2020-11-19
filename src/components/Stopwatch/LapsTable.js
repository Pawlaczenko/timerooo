import React from 'react';
import styles from './LapsTable.module.scss';
import TimeLabel from '../TimeLabel/TimeLabel';

const getExtremes = (laps) => {
    let results = laps.map(item => {
        let msSeconds = item.lapTime[0] * 6000 + item.lapTime[1] * 100 + item.lapTime[2];
        return msSeconds;
    });
    const fastestLap = Math.max(...results);
    const slowestLap = Math.min(...results);
    return {
        fastest: results.findIndex(e => e === fastestLap),
        slowest: results.findIndex(e => e === slowestLap),
    }
}

const LapsTable = ({ laps }) => {
    const revLaps = laps.slice(0).reverse();

    let extremes = getExtremes(revLaps);

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
                        let modifier = null;
                        if (array.length > 2) {
                            if (i === extremes.fastest) {
                                modifier = 'slowest';
                            } else if (i === extremes.slowest) {
                                modifier = 'fastest'
                            }
                        }

                        return (
                            <tr className={styles[modifier]} key={index}>
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