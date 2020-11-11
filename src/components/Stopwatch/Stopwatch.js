import React from 'react';
import TimeLabel from '../TimeLabel/TimeLabel';
import Button from '../Button/Button';
import LapsTable from './LapsTable';

let intervalId = '';

class Stopwatch extends React.Component {
    state = {
        time: [0, 0, 0],
        lapTime: [0, 0, 0],
        isStarted: false,
        isPaused: null,
        laps: []
    }

    componentWillUnmount = () => {
        clearInterval(intervalId);
    }

    startStopwatch = () => {
        intervalId = setInterval(this.count, 10);

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
            let newLap = (this.state.laps.length > 0) ? [...this.state.lapTime] : newTime;
            newTime[2] += 1;
            newLap[2] += 1;

            newTime = this.formatTime(newTime);
            newLap = this.formatTime(newLap);

            this.setState({
                time: newTime,
                lapTime: newLap
            });
            // let newTime = (this.state.time[0] * 6000) + (this.state.time[1] * 100) + this.state.time[2];
            // newTime++;
            // let minutes = Math.floor(newTime / 6000);
            // let seconds = Math.floor((newTime % 6000) / 100);
            // let ms = Math.floor((newTime % 6000) - (seconds * 100));
            // this.setState({
            //     time: [minutes, seconds, ms]
            // });
        }
    }

    pause = () => {
        this.setState({
            isPaused: true
        })
    }

    resume = () => {
        this.setState({
            isPaused: false
        })
    }

    reset = () => {
        clearInterval(intervalId);
        this.setState({
            time: [0, 0, 0],
            isStarted: false,
            isPaused: true,
            laps: [],
        })
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
        return (
            <>
                <TimeLabel times={this.state.time} role="show" />
                {this.state.laps.length > 0 && <LapsTable laps={this.state.laps} />}

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