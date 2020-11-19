import React from 'react';
import TimeLabel from '../TimeLabel/TimeLabel';
import Button from '../Button/Button';
import LapsTable from './LapsTable';
// import styles from './Stopwatch.module.scss';

class Stopwatch extends React.Component {
    state = {
        time: [0, 0, 0],
        lapTime: [0, 0, 0],
        isStarted: false,
        isPaused: null,
        laps: []
    }

    componentWillUnmount = () => {
        clearInterval(this.stopwatchId);
    }


    startStopwatch = () => {
        this.stopwatchId = setInterval(this.count, 10);

        this.setState({
            isStarted: true,
            isPaused: false
        });
    }

    formatTime = (time) => {
        if (time[2] > 99) {
            time[2] = 0;
            time[1]++;
        }

        if (time[1] > 59) {
            time[1] = 0;
            time[0]++;
        }

        return time;
    }

    count = () => {
        if (!this.state.isPaused) {
            let newTime = [...this.state.time];
            let newLap = [...this.state.lapTime];
            newTime[2] += 1;
            newLap[2] += 1;

            newTime = this.formatTime(newTime);
            newLap = this.formatTime(newLap);

            this.setState({
                time: newTime,
                lapTime: newLap
            });
        }
    }

    pause = () => {
        this.setState({
            isPaused: true
        });
    }

    resume = () => {
        this.setState({
            isPaused: false
        });
    }

    reset = () => {
        clearInterval(this.stopwatchId);
        this.setState({
            time: [0, 0, 0],
            lapTime: [0, 0, 0],
            isStarted: false,
            isPaused: true,
            laps: [],
        });
    }

    lap = () => {
        const lap = {
            lapTime: this.state.lapTime,
            time: this.state.time
        }

        this.setState(prevState => ({
            laps: [...prevState.laps, lap],
            lapTime: [0, 0, 0]
        }))
    }

    render() {
        const lapsQnt = this.state.laps.length;
        return (
            <>
                <TimeLabel
                    times={this.state.time}
                    role="show"
                    centered={(lapsQnt === 0)}
                />
                {lapsQnt > 0 &&
                    <>
                        <TimeLabel
                            times={this.state.lapTime}
                            role="lap"
                        />
                        <LapsTable laps={this.state.laps} />
                    </>
                }

                <div>
                    {!this.state.isStarted && <Button color="lime" handleClick={this.startStopwatch}>Start</Button>}
                    {(this.state.isStarted && !this.state.isPaused) &&
                        <>
                            <Button color="red" handleClick={this.pause}>Stop</Button>
                            <Button color="orange" handleClick={this.lap}>Lap</Button>
                        </>
                    }
                    {(this.state.isStarted && this.state.isPaused) &&
                        <>
                            <Button color="lime" handleClick={this.resume}>Resume</Button>
                            <Button color="red" handleClick={this.reset}>Reset</Button>
                        </>
                    }
                </div>

            </>
        )
    }
}

export default Stopwatch;