import React from 'react'
import styles from './TimerForm.module.scss';

const TimerForm = ({ values, handleSubmit }) => {
    const timer = [...values];
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formSetter}>
                <label className={styles.formLabel}>
                    hours
                <input type="number" name="hours" placeholder="00" className={styles.formInput} min="0" max="99" defaultValue={timer[0]} />
                </label>:
            <label className={styles.formLabel}>
                    minutes
                <input type="number" name="minutes" placeholder="00" className={styles.formInput} min="0" max="59" defaultValue={timer[1]} />
                </label>.
            <label className={styles.formLabel}>
                    seconds
                <input type="number" name="seconds" placeholder="00" className={styles.formInput} min="0" max="59" defaultValue={timer[2]} />
                </label>
            </div>
            <button className={styles.formButton}>submit</button>
        </form>
    );
};

export default TimerForm;