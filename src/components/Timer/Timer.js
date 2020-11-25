import React from 'react';
import TimeLabel from '../TimeLabel/TimeLabel';
import Button from './../Button/Button';
import Modal from './../Modal/Modal';
import MyContext from '../../context';
import TimerForm from './TimerForm';
// import styles from './Timer.module.scss';

class Timer extends React.Component {
    state = {
        time: [0, 0, 0],
        setTime: [0, 0, 0],
        isStarted: false,
        isPaused: null
    }

    setTimer = (e) => {
        e.preventDefault();
        const values = [...e.target.getElementsByTagName('input')];
        values.forEach((item, index, array) => {
            array[index] = (isNaN(item.valueAsNumber)) ? 0 : item.valueAsNumber;
        });

        this.setState({
            setTime: [...values],
            time: [...values]
        });

        const contextValue = this.context;
        contextValue.closeModal();
    }

    formatTime = (time) => {
        if (time[2] < 0) {
            time[2] = 59;
            time[1]--;
        }

        if (time[1] < 0) {
            time[1] = 59;
            time[0]--;
        }

        return time;
    }

    startTimer = () => {
        this.setState({
            isStarted: true,
            isPaused: false
        });
        this.intervalId = setInterval(this.count, 1000);
    }

    count = () => {
        if (!this.state.isPaused) {
            let newTime = [...this.state.time];
            newTime[2] -= 1;

            newTime = this.formatTime(newTime);

            this.setState({
                time: newTime,
            });
        }
    }

    pause = () => {
        this.setState({
            isPaused: true
        });
    }

    reset = () => {
        clearInterval(this.intervalId);
        this.setState({
            time: [...this.state.setTime],
            isStarted: false,
            isPaused: null
        });
    }

    resume = () => {
        this.setState({
            isPaused: false
        });
    }

    checkTimer = () => this.state.setTime.every(e => e === 0);

    render() {
        return (
            <>
                <TimeLabel
                    times={this.state.time}
                    role="show"
                    centered={true}
                />
                <MyContext.Consumer>
                    {(context) => (
                        <>
                            {context.state.isOpen &&
                                <Modal header="Set timer">
                                    <TimerForm values={this.state.setTime} handleSubmit={this.setTimer} />
                                </Modal>
                            }
                            <div>
                                {!this.state.isStarted && !this.checkTimer() &&
                                    <Button handleClick={this.startTimer} color="lime">Start</Button>
                                }
                                {!this.state.isStarted &&
                                    <Button handleClick={context.openModal} color="orange">Set Timer</Button>
                                }
                                {this.state.isStarted &&
                                    <Button handleClick={this.reset} color="red">Reset</Button>
                                }
                                {this.state.isStarted && !this.state.isPaused &&
                                    <Button handleClick={this.pause} color="orange">Pause</Button>
                                }
                                {this.state.isStarted && this.state.isPaused &&
                                    <Button handleClick={this.resume} color="lime">Resume</Button>
                                }
                            </div>
                        </>
                    )}
                </MyContext.Consumer>

            </>
        );
    }
}

Timer.contextType = MyContext;

export default Timer;