import React from 'react';
import './Common.css';
import './Skills.css'
import Card from './component/Card'


function Skills() {
    return (
        <div className="App">
            <h2 className="main">Skill</h2>
            <div className="set">
                <div className="item">
                    <Card name="Rails(Ruby)" states="Rails使えま〜す"/>
                </div>
                <div className="item">
                    <Card name="React Native" states="インターンで使ってまーす"/>
                </div>
            </div>
            <div className="set">
                <div className="item">
                    <Card name="Python" states="授業でいっぱい使ったわボケ"/>
                </div>
                <div className="item">
                    <Card name="React" states="このサイトもReactで作ってます"/>
                </div>
            </div>
        </div>
    );
}

export default Skills;