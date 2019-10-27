import React from 'react';
import './Common.css';
import './Works.css'
import Card from './component/CardWorks'



class Works extends React.Component{

    state={
        width:500
    }


    componentDidMount() {
        this.setState({width:window.innerWidth})
        window.addEventListener('resize', () => {
            this.setState({width:window.innerWidth})
        })
    }

    render(){
        if(this.state.width >= 850) {
            return (
                <div className="App">
                    <h2 className="main">Works</h2>
                    <div className="item">
                        <Card name="一夜人狼"　states="著作権には引っかからない" image='/static/images/oojinro2.png'/>
                    </div>
                </div>
            );
        }else{
            return (
                <div className="App">
                    <h2 className="main">Works</h2>
                    <div className="item2">
                        <Card name="一夜人狼"　states="著作権には引っかからない" image='/static/images/oojinro.png'/>
                    </div>
                </div>
            );
        }
    }
}

export default Works;