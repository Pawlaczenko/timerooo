import React from 'react';
import TimeLabel from '../TimeLabel/TimeLabel';

class Clock extends React.Component {
    state = {
        time: [0, 0, 0]
    }

    componentDidMount() {
        const date = new Date;
        this.setState({ time: [date.getHours(), date.getMinutes(), date.getSeconds()] });
        this.intervalId = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    tick = () => {
        const date = new Date;
        this.setState({ time: [date.getHours(), date.getMinutes(), date.getSeconds()] });
    }

    render() {
        return (
            <TimeLabel
                times={this.state.time}
                role="show"
                centered={true}
            />
        )
    }
}

export default Clock;