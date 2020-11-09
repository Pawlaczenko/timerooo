import React from 'react';
import './index.css';
import logo from './../../assets/logo.svg';

import Navigation from './../../components/Navigation/Navigation';
import TimeLabel from './../../components/TimeLabel/TimeLabel';

const times = [12, 33, 44];

class Root extends React.Component {
    render() {
        return (
            <>
                <img src={logo} alt="timerooo logo" />
                <TimeLabel times={times} />
                <Navigation />
            </>
        )
    }
}

export default Root;