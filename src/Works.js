import React from 'react';
import './Common.css';
import './Works.css'
import Card from './component/CardWorks'
import {Fade} from "@material-ui/core";


const jinro={
    name:"一夜人狼",
    image:'/static/images/oojinro2.png',
    image2:'/static/images/oojinro.png',
    main:"一夜限りの人狼ゲームアプリ。複数人で部屋番号を指定しゲームを始めることができる。",
    tec:"Node.jsを用いてバックエンドを担当。WebSocketを用いた実装で、通信が安定している",
    github:"https://github.com/nodarby/oojinro",
    githubText:"https://github.com/nodarby/oojinro",
    URL:"http://oojinro.online/",
    URLtext:"oojinro.online",
}

const humiemi={
    name:"文咲み",
    image:'/static/images/humiemi2.png',
    image2:'/static/images/humiemi.png',
    main:"手紙の写真を撮ると文章を画像解析し、文脈に適した花をオススメしてくれるプロダクト。文脈の解析、花の選択には機械学習を用いている。OthloHack2018で最優秀賞をいただいた。",
    tec:"flaskを用いてバックエンドを担当。",
    github:"https://github.com/nodarby/othlohack2018-2",
    githubText:"https://github.com/nodarby/othlohack2018-2",
    URL:"https://nagoyastartupnews.jp/hackathon-othlohack2018/",
    URLtext:"OthloHack2018紹介ページ",
}

const portfolio={
    name:"ポートフォリオサイト",
    image:'/static/images/portfolio.png',
    image2:'/static/images/portfolio.png',
    main:"野田朋宏のステータスをまとめたサイト。初のフロントエンジニアリングは大変だったが非常に良い経験となった。",
    tec:"Reactを用い3日ほどで作成。",
    github:"https://github.com/nodarby/portfolio",
    githubText:"https://github.com/nodarby/portfolio",
    URL:"https://noda-portfolio.herokuapp.com/",
    URLtext:"noda-portfolio.herokuapp.com",
}


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
                <Fade in={this.state.visible}  timeout={2000}>
                    <div className="App">
                        <h2 className="main">Works</h2>
                        <div className="item">
                           <Card
                               name={jinro.name}
                               image={jinro.image}
                               main={jinro.main}
                               tec={jinro.tec}
                               github={jinro.github}
                               githubText={jinro.githubText}
                               URL={jinro.URL}
                               URLtext={jinro.URLtext}
                           />
                        </div>
                        <div className="item">
                            <Card
                                name={humiemi.name}
                                image={humiemi.image}
                                main={humiemi.main}
                                tec={humiemi.tec}
                                github={humiemi.github}
                                githubText={humiemi.githubText}
                                URL={humiemi.URL}
                                URLtext={humiemi.URLtext}
                            />
                        </div>
                        <div className="item">
                            <Card
                                name={portfolio.name}
                                image={portfolio.image}
                                main={portfolio.main}
                                tec={portfolio.tec}
                                github={portfolio.github}
                                githubText={portfolio.githubText}
                                URL={portfolio.URL}
                                URLtext={portfolio.URLtext}
                            />
                        </div>
                    </div>
                </Fade>
            );
        }else{
            return (
                <Fade in={this.state.visible}  timeout={2000}>
                <div className="App">
                    <h2 className="main">Works</h2>
                    <div className="item2">
                        <Card
                            name={jinro.name}
                            image={jinro.image2}
                            main={jinro.main}
                            tec={jinro.tec}
                            github={jinro.github}
                            githubText={jinro.githubText}
                            URL={jinro.URL}
                            URLtext={jinro.URLtext}
                        />
                    </div>
                    <div className="item2">
                        <Card
                            name={humiemi.name}
                            image={humiemi.image2}
                            main={humiemi.main}
                            tec={humiemi.tec}
                            github={humiemi.github}
                            githubText={humiemi.githubText}
                            URL={humiemi.URL}
                            URLtext={humiemi.URLtext}
                        />
                    </div>
                    <div className="item2">
                        <Card
                            name={portfolio.name}
                            image={portfolio.image2}
                            main={portfolio.main}
                            tec={portfolio.tec}
                            github={portfolio.github}
                            githubText={portfolio.githubText}
                            URL={portfolio.URL}
                            URLtext={portfolio.URLtext}
                        />
                    </div>
                </div>
                </Fade>
            );
        }
    }
}

export default Works;