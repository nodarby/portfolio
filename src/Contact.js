import React from 'react';
import './Common.css';
import {Fade} from "@material-ui/core";




class Contact extends React.Component{
    state={
        visible:window.contact,
    }

    render(){
        return (
            <Fade in={this.state.visible}  timeout={2000}>
                <div className="App">
                    <h2 className="main">Contact</h2>
                    <div className="main">
                        <div className="jap-in"> メールアドレス</div>：<div className="eng"> noda.tomohiro@h.mbox.nagoya-u.ac.jp</div>
                    </div>
                    <div className="main">
                        <div className="jap-in"> github</div>　　　　：<a className="eng_line" href={"https://github.com/nodarby"}>https://github.com/nodarby</a>
                    </div>
                </div>
            </Fade>
        );
    }
}

export default Contact;