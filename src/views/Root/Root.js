import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import logo from './../../assets/logo.svg';

import Navigation from './../../components/Navigation/Navigation';
import TimeLabel from './../../components/TimeLabel/TimeLabel';
import ClocksView from '../ClocksView/ClocksView';
import StopwatchsView from '../StopwatchsView/StopwatchsView';
import TimersView from '../TimersView/TimersView.js';

const times = [12, 33, 44];

class Root extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <>
                    <img src={logo} alt="timerooo logo" />
                    <Switch>
                        <Route exact path="/" component={ClocksView} />
                        <Route path="/stopwatch" component={StopwatchsView} />
                        <Route path="/timer" component={TimersView} />
                    </Switch>
                    <TimeLabel times={times} />
                    <Navigation />
                </>
            </BrowserRouter>
        )
    }
}

export default Root;