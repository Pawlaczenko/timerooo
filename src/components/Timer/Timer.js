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
            setTime: [...values]
        });

        const contextValue = this.context;
        contextValue.closeModal();
    }

    checkTimer = () => this.state.setTime.every(e => e === 0);

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
                                    <TimerForm values={this.state.setTime} handleSubmit={this.setTimer} />
                                </Modal>
                            }
                            <div>
                                {!this.checkTimer() &&
                                    <Button color="lime">Start</Button>
                                }
                                {!this.state.isStarted &&
                                    <Button handleClick={context.openModal} color="orange">Set Timer</Button>
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