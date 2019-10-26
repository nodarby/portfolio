import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import Home from './Home'
import Profile from './Profile'
import Skills from './Skills'
import * as serviceWorker from './serviceWorker';
import TabsEx from "./Tab";

ReactDOM.render(
    <BrowserRouter>
        <TabsEx />
        <Route exact path={'/'} component={Home}/>
        <Route path={'/profile'}  component={Profile}/>
        <Route path={'/skill'} component={Skills}/>
        <Route path={'/works'} component={Skills}/>
        <Route path={'/contact'} component={Home}/>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
