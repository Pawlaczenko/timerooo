import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import logo from './../../assets/logo.svg';
import MyContext from '../../context';

import Navigation from './../../components/Navigation/Navigation';
import ClocksView from '../ClocksView/ClocksView';
import StopwatchsView from '../StopwatchsView/StopwatchsView';
import TimersView from '../TimersView/TimersView.js';


class Root extends React.Component {
    state = {
        isOpen: false,
    }

    openModal = () => {
        this.setState({
            isOpen: true
        });
    }

    closeModal = () => {
        if (this.state.isOpen) {
            this.setState({
                isOpen: false
            });
        }
    }

    render() {
        const contextValue = {
            state: { ...this.state },
            openModal: this.openModal,
            closeModal: this.closeModal
        }

        return (
            <BrowserRouter>
                <img className="logo" src={logo} alt="timerooo logo" />
                <MyContext.Provider value={contextValue}>
                    <Switch>
                        <Route exact path="/" component={ClocksView} />
                        <Route path="/stopwatch" component={StopwatchsView} />
                        <Route path="/timer" component={TimersView} />
                    </Switch>
                </MyContext.Provider>
                <Navigation />
            </BrowserRouter>
        )
    }
}

export default Root;