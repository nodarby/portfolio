import React from 'react';
import './Common.css';
import {Fade} from "@material-ui/core";
import {animated, useSpring} from "react-spring";

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Card() {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
        <animated.div
            class="card"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans)}}
        />
    )
}

class Profile extends React.Component{
    state={
        visible:window.profile,
    }

    render(){
        return (
            <Fade in={this.state.visible}  timeout={2000}>
                <div className="App">
                    <div className="wrap">
                        <h2 className="main">Personal Information</h2>
                        <div className="main">
                            <div className="eng">Name</div>：<div className="jap-in">野田 朋宏</div>
                        </div>
                        <div className="main">
                            <div className="eng">Birthday</div>：<div className="jap-in">1998/10/5</div>
                        </div>
                        <div className="main">
                            <div className="eng">University</div>：<div className="jap-in">名古屋大学 情報学部</div>
                        </div>
                        <div className="main">
                            <div className="eng">Certificate</div>：<div className="jap-in">応用情報技術者, データベーススペシャリスト</div>
                        </div>
                    </div>
                    <div className="wrap">
                        <h2 className="main">Commonly used Icon</h2>
                        <Card/>
                    </div>
                    <div className="wrap">
                        <h2 className="main">Career</h2>
                        <div className="main">
                            <div className="jap">2017年3月 　　　　　愛知県立明和高等学校卒業</div>
                        </div>
                        <div className="main">
                            <div className="jap">2017年4月 　　　　　名古屋大学　情報学部コンピュータ科学科入学</div>
                        </div>
                        <div className="main">
                            <div className="jap">2018年10月　　　　　応用情報技術者（国家資格）　　　　　　　取得</div>
                        </div>
                        <div className="main">
                            <div className="jap">2018年11月　　　　　OthloHack2018 最優秀賞・サイバーエージェント賞・Misoca賞</div>
                        </div>
                        <div className="main">
                            <div className="jap">2019年4月 　　　　　データベーススペシャリスト（国家資格）　取得</div>
                        </div>
                        <div className="main">
                            <div className="jap">2019年6月〜現在　 　スペース24コミュニケーションズ ITインターン</div>
                        </div>
                        <div className="main">
                            <div className="jap">2019年9月 　　　　　teamLab 就業型サマーインターン(サーバーサイド)</div>
                        </div>
                    </div>
                    <div className="wrap">
                        <h2 className="main">Hobby</h2>
                        <div className="main">
                            <div className="jap">・ディズニーリゾートに行く（名古屋から行くと交通費がかさむ）</div>
                        </div>
                        <div className="main">
                            <div className="jap">・ボードゲーム（戦略性とか心理的駆け引きがあるとなお良し）</div>
                        </div>
                    </div>
                </div>
            </Fade>
        );
    }
}

export default Profile;