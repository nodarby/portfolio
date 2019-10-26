import React from 'react';
import './Common.css';
import './Skills.css'
import Card from './component/Card'



class Skills extends React.Component{

    state={
        width:window.innerWidth
    }


    componentDidMount() {
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
                            <Card name="Rails(Ruby)" states="Rails使えま〜す" image="https://y-hilite.com/wp-content/uploads/2018/02/rails_logo.png"/>
                        </div>
                        <div className="item">
                            <Card name="React Native" states="インターンで使ってまーす" image="https://kokensha.xyz/wp-content/uploads/2018/02/react-native.png"/>
                        </div>
                    </div>
                    <div className="set">
                        <div className="item">
                            <Card name="Python" states="授業でいっぱい使ったわボケ" image="https://www.bizlearn.jp/wp/wp-content/uploads/2017/10/Python.png"/>
                        </div>
                        <div className="item">
                            <Card name="React" states="このサイトもReactで作ってます" image="https://y-hilite.com/wp-content/uploads/2018/02/rails_logo.png"/>
                        </div>
                    </div>
                </div>
            );
        }else{
            return (
                <div className="App">
                    <h2 className="main">Skill</h2>
                    <div className="item2">
                        <Card name="Rails(Ruby)" states="Rails使えま〜す" image="https://y-hilite.com/wp-content/uploads/2018/02/rails_logo.png"/>
                    </div>
                    <div className="item2">
                        <Card name="React Native" states="インターンで使ってまーす" image="https://kokensha.xyz/wp-content/uploads/2018/02/react-native.png"/>
                    </div>
                    <div className="item2">
                        <Card name="Python" states="授業でいっぱい使ったわボケ" image="https://www.bizlearn.jp/wp/wp-content/uploads/2017/10/Python.png"/>
                    </div>
                    <div className="item2">
                        <Card name="React" states="このサイトもReactで作ってます" image="https://y-hilite.com/wp-content/uploads/2018/02/rails_logo.png"/>
                    </div>
                </div>
            );
        }
    }

}

export default Skills;