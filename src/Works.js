import React from 'react';
import './Common.css';
import './Works.css'
import Card from './component/CardWorks'
import {Fade} from "@material-ui/core";



class Works extends React.Component{

    state={
        width:500,
        visible:window.works
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
                <Fade in={this.state.visible}  timeout={3000}>
                    <div className="App">
                        <h2 className="main">Works</h2>
                        <div className="item">
                           <Card
                               name="一夜人狼"　
                               image='/static/images/oojinro2.png'
                               main="一夜限りの人狼ゲームアプリ。複数人で部屋番号を指定しゲームを始めることができる。"
                               tec="サーバサイドとしてNode.jsを担当。"
                               githubText="未公開"
                               URL="http://oojinro.online/"
                               URLtext="oojinro.online"
                           />
                        </div>
                        <div className="item">
                            <Card
                                name="ポートフォリオサイト"
                                image='/static/images/portfolio.png'
                                main="野田朋宏のステータスをまとめたサイト。"
                                tec="Reactを用い2日ほどで作成。初のフロントエンジニアリングは大変だったが非常に良い経験となった。"
                                github="https://github.com/nodarby/portfolio"
                                githubText="https://github.com/nodarby/portfolio"
                                URL="https://noda-portfolio.herokuapp.com/"
                                URLtext="noda-portfolio.herokuapp.com"
                            />
                        </div>
                    </div>
                </Fade>
            );
        }else{
            return (
                <Fade in={this.state.visible}  timeout={3000}>
                <div className="App">
                    <h2 className="main">Works</h2>
                    <div className="item2">
                        <Card
                            name="一夜人狼"
                            image='/static/images/oojinro.png'
                            main="一夜限りの人狼ゲームアプリ。"
                            tec="サーバサイドとしてNode.jsを担当"
                            github="未公開"
                            URL="http://oojinro.online/"
                            URLtext="oojinro.online"
                        />
                    </div>
                    <div className="item">
                        <Card
                            name="ポートフォリオサイト"
                            image='/static/images/portfolio.png'
                            main="野田朋宏のステータスをまとめたサイト。"
                            tec="Reactを用い2日ほどで作成。初のフロントエンジニアリングは大変だったが非常に良い経験となった。"
                            github="https://github.com/nodarby/portfolio"
                            githubText="https://github.com/nodarby/portfolio"
                            URL="https://noda-portfolio.herokuapp.com/"
                            URLtext="noda-portfolio.herokuapp.com"
                        />
                    </div>
                </div>
                </Fade>
            );
        }
    }
}

export default Works;