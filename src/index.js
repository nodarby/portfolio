import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './index.css';
import Home from './Home'
import Profile from './Profile'
import Skills from './Skills'
import Works from './Works'
import Contact from './Contact'
import * as serviceWorker from './serviceWorker';
import TabsEx from "./Tab";

window.home=true
window.profile=true
window.skill=true
window.works=true
window.contact=true

ReactDOM.render(
    <BrowserRouter>
        <TabsEx />
        <Route exact path={'/'} component={Home}/>
            <div className="fade" id="fadeprofile">
                    <Route path={'/profile'}  component={Profile}/>
            </div>
            <div className="fade" id="fadeskill">
                    <Route path={'/skill'} component={Skills}/>
            </div>
            <div className="fade" id="fadeworks">
                    <Route path={'/works'} component={Works}/>
            </div>
            <div className="fade" id="fadecontact">
                    <Route path={'/contact'} component={Contact}/>
            </div>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
