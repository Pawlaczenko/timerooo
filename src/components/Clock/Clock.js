import React from 'react';
import TimeLabel from '../TimeLabel/TimeLabel';

class Clock extends React.Component {
    state = {
        time: [0, 0, 0]
    }

    render() {
        return (
            <TimeLabel times={this.state.time} />
        )
    }
}

export default Clock;