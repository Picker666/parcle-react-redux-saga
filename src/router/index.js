import React, { Component } from 'react';
import { HashRouter, Route, Switch, NavLink } from 'react-router-dom';
import Home from '../containers/Home';
import FirstPage from '../containers/FirstPage';
import SecondPage from '../containers/SecondPage';
import Nav from '../components/Nav';

class Routers extends Component {
    constructor () {
        super()
    }

    render () {

        return <HashRouter>
            <div>
                <Switch>
                    <Route path='/' exact   component={Nav(Home)}/>
                    <Route path='/firstPage' exact  component={Nav(FirstPage)}/>
                    <Route path='/secondPage' exact  component={Nav(SecondPage)}/>
                </Switch>
            </div>
        </HashRouter>   
    }
}

export default Routers;