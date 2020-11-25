import React from 'react';
import TimeLabel from '../TimeLabel/TimeLabel';
import Button from './../Button/Button';
import Modal from './../Modal/Modal';
import MyContext from '../../context';
import styles from './Timer.module.scss';

class Timer extends React.Component {
    state = {
        time: [0, 0, 0],
        setTime: [0, 0, 0],
        isStarted: false,
        isPaused: null
    }

    setTimer = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    render() {
        return (
            <>
                <TimeLabel
                    times={this.state.setTime}
                    role="show"
                    centered={true}
                />
                <MyContext.Consumer>
                    {(context) => (
                        <>
                            {context.state.isOpen &&
                                <Modal header="Set timer">
                                    <form className={styles.form}>
                                        <div className={styles.formSetter}>
                                            <label className={styles.formLabel}>
                                                hours
                                                <input type="number" name="hours" placeholder="00" className={styles.formInput} min="0" max="99" />
                                            </label>:
                                            <label className={styles.formLabel}>
                                                minutes
                                                <input type="number" name="minutes" placeholder="00" className={styles.formInput} min="0" max="59" />
                                            </label>.
                                            <label className={styles.formLabel}>
                                                seconds
                                                <input type="number" name="seconds" placeholder="00" className={styles.formInput} min="0" max="59" />
                                            </label>
                                        </div>
                                        <button className={styles.formButton}>submit</button>
                                    </form>
                                </Modal>
                            }
                            <div>
                                {!this.state.isStarted && <Button handleClick={context.openModal} color="orange">Set Timer</Button>}
                            </div>
                        </>
                    )}
                </MyContext.Consumer>

            </>
        );
    }
}

export default Timer;