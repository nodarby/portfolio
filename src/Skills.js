import React from 'react';
import './Common.css';
import './Skills.css'
import Card from './component/Card'


const rails={
    name:"Rails(Ruby)",
    states:"サーバサイド言語として、teamLabサマーインターン2019で使用。",
    image:"/static/images/rails_logo.png"
}

const rn ={
    name:"React Native",
    states:"スペース２４コミニュケーションズのITインターン生としてアプリを作成中",
    image:"/static/images/react-native.png"
}

const py = {
    name:"Python",
    states:"1年次より講義内で数値解析や機械学習等に利用。",
    image:"/static/images/Python.png"
}

const react = {
    name:"React",
    states:"React Nativeでの経験を元に運用を開始。このポートフォリオサイトもReactを用いた。",
    image:"/static/images/logo-og.png"
}



class Skills extends React.Component{

    state = {
        width:500
    }


    componentDidMount() {
        this.setState({width:window.innerWidth})
        window.addEventListener('resize', () => {
            this.setState({width:window.innerWidth})
        })
    }



    render(){
        if(this.state.width >= 850){
            return (
                <div className="App">
                    <h2 className="main">Skill</h2>
                    <div className="set">
                        <div className="item">
                            <Card name={rails.name} states={rails.states} image={rails.image}/>
                        </div>
                        <div className="item">
                            <Card name={rn.name} states={rn.states} image={rn.image}/>
                        </div>
                    </div>
                    <div className="set">
                        <div className="item">
                            <Card name={py.name} states={py.states} image={py.image}/>
                        </div>
                        <div className="item">
                            <Card name={react.name} states={react.states} image={react.image}/>
                        </div>
                    </div>
                </div>
            );
        }else if(this.state.width >= 400){
            return (
                <div className="App">
                    <h2 className="main">Skill</h2>
                    <div className="item2">
                        <Card name={rails.name} states={rails.states} image={rails.image}/>
                    </div>
                    <div className="item2">
                        <Card name={rn.name} states={rn.states} image={rn.image}/>
                    </div>
                    <div className="item2">
                        <Card name={py.name} states={py.states} image={py.image}/>
                    </div>
                    <div className="item2">
                        <Card name={react.name} states={react.states} image={react.image}/>
                    </div>
                </div>
            );
        }else{
            return (
                <div className="App">
                    <h2 className="main">Skill</h2>
                    <div className="item3">
                        <Card name={rails.name} states={rails.states} image={rails.image}/>
                    </div>
                    <div className="item3">
                        <Card name={rn.name} states={rn.states} image={rn.image}/>
                    </div>
                    <div className="item3">
                        <Card name={py.name} states={py.states} image={py.image}/>
                    </div>
                    <div className="item3">
                        <Card name={react.name} states={react.states} image={react.image}/>
                    </div>
                </div>
            );
        }
    }

}

export default Skills;