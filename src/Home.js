import React from 'react';
import './Common.css';
import {Fade} from "@material-ui/core";


class Home extends React.Component{
    state={
        visible:window.home,
    }


    render(){
        return (
            <Fade in={this.state.visible} timeout={2000}>
                <div className="App">
                    <h1 className="big">Welcome</h1>
                    <h1 className="big">to</h1>
                    <h1 className="big">Noda's Portfolio!</h1>
                </div>
            </Fade>
        );
    }


}

export default Home;