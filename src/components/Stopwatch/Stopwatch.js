import React from 'react';
import TimeLabel from '../TimeLabel/TimeLabel';
import Button from '../Button/Button';

let intervalId = '';

class Stopwatch extends React.Component {
    state = {
        time: [0, 0, 0],
        isStarted: false,
        isPaused: null,
    }

    startStopwatch = () => {
        intervalId = setInterval(this.count, 10);

        this.setState({
            isStarted: true,
            isPaused: false
        })
    }

    count = () => {
        if (!this.state.isPaused) {
            let newTime = [...this.state.time];
            newTime[2] += 1;
            if (newTime[2] > 99) {
                newTime[2] = 0;
                newTime[1]++;
            }

            if (newTime[1] > 59) {
                newTime[1] = 0;
                newTime[0]++;
            }

            this.setState({
                time: newTime,
            });
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
            isPaused: true
        })
    }

    render() {
        return (
            <>
                <TimeLabel times={this.state.time} />
                <div>
                    {!this.state.isStarted && <Button color="lime" handleClick={this.startStopwatch}>Start</Button>}
                    {(this.state.isStarted && !this.state.isPaused) &&
                        <>
                            <Button color="red" handleClick={this.pause}>Stop</Button>
                            {/* <Button>Lap</Button> */}
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