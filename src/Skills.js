import React from 'react';
import './Common.css';
import './Skills.css'
import Card from './component/Card'
import {Fade} from "@material-ui/core";

const rails={
    name:"Rails(Ruby)",
    states:"サーバサイドとして、teamLabサマーインターン2019で使用。",
    image:"/static/images/rails_logo.png",
    image2:"/static/images/rails_maru.png"
}

const rn ={
    name:"React Native",
    states:"スペース２４コミニュケーションズのITインターン生としてアプリを作成中。",
    image:"/static/images/react-native.png"
}

const py = {
    name:"Python",
    states:"学部1年次に習得。講義内で数値解析や機械学習等に利用。",
    image:"/static/images/Python.png",
    image2:"/static/images/ac.png"
}

const react = {
    name:"React",
    states:"React Nativeでの経験を元に利用を開始。このポートフォリオサイトもReactを用いた。",
    image:"/static/images/react-dev-tools-logo.jpg",
    image2:"/static/images/react.png"
}

const node = {
    name:"Node.js",
    states:"",
    image:"/static/images/nodejs-1.png",
    image2:"/static/images/nodemaru.png"
}

const firebase = {
    name:"Firebase",
    states:"Authorization, CloudFunctions, Firestoreを中心に利用経験あり。",
    image:"/static/images/firebase.png",
    image2:"/static/images/f1.png"
}


class Skills extends React.Component{


    state = {
        visible:window.skill,
        width:500
    }


    componentDidMount() {
        this.setState({width:window.innerWidth})
        window.addEventListener('resize', () => {
            this.setState({width:window.innerWidth})
        })
    }



    render(){
        if(this.state.width >= 900){
            return (
                <Fade in={this.state.visible} timeout={2000}>
                <div className="App">
                    <h2 className="main">Skill</h2>
                    <div className="set">
                        <div className="item-skill">
                            <Card name={rails.name} states={rails.states} image={rails.image}/>
                        </div>
                        <div className="item-skill">
                            <Card name={rn.name} states={rn.states} image={rn.image}/>
                        </div>
                        <div className="item-skill">
                            <Card name={py.name} states={py.states} image={py.image}/>
                        </div>
                    </div>
                    <div className="set">
                        <div className="item-skill">
                            <Card name={react.name} states={react.states} image={react.image}/>
                        </div>
                        <div className="item-skill">
                            <Card name={node.name} states={node.states} image={node.image}/>
                        </div>
                        <div className="item-skill">
                            <Card name={firebase.name} states={firebase.states} image={firebase.image}/>
                        </div>
                    </div>

                </div>
                </Fade>
            );
        }else if(this.state.width >= 550 && this.state.width<900){
            return (
                <Fade in={this.state.visible}  timeout={2000}>
                <div className="App">
                    <h2 className="main">Skill</h2>
                    <div className="set2">
                        <div className="item2-skill">
                            <Card name={rails.name} states={rails.states} image={rails.image}/>
                        </div>
                        <div className="item2-skill">
                            <Card name={rn.name} states={rn.states} image={rn.image}/>
                        </div>
                    </div>
                    <div className="set2">
                        <div className="item2-skill">
                            <Card name={py.name} states={py.states} image={py.image}/>
                        </div>
                        <div className="item2-skill">
                            <Card name={react.name} states={react.states} image={react.image}/>
                        </div>
                    </div>
                    <div className="set2">
                        <div className="item2-skill">
                            <Card name={node.name} states={node.states} image={node.image}/>
                        </div>
                        <div className="item2-skill">
                            <Card name={firebase.name} states={firebase.states} image={firebase.image}/>
                        </div>
                    </div>

                </div>
                </Fade>
            );
        }else{
            return (
                <Fade in={this.state.visible}  timeout={2000}>
                <div className="App">
                    <h2 className="main">Skill</h2>
                    <div className="item3">
                        <Card name={rails.name} states={rails.states} image={rails.image2}/>
                    </div>
                    <div className="item3">
                        <Card name={rn.name} states={rn.states} image={rn.image}/>
                    </div>
                    <div className="item3">
                        <Card name={py.name} states={py.states} image={py.image2}/>
                    </div>
                    <div className="item3">
                        <Card name={react.name} states={react.states} image={react.image2}/>
                    </div>
                    <div className="item3">
                        <Card name={node.name} states={node.states} image={node.image2}/>
                    </div>
                    <div className="item3">
                        <Card name={firebase.name} states={firebase.states} image={firebase.image2}/>
                    </div>
                </div>
                </Fade>
            );
        }
    }

}

export default Skills;