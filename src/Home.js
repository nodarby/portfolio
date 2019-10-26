import React from 'react';
import {BrowserRouter, Route,Link} from 'react-router-dom';




function Home() {
    return (
        <div className="App">
            <h5>Hello</h5>
            <Link className="navbar__link" to="/about">about</Link>
        </div>
    );
}

export default Home;