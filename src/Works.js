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
    tec:"サーバサイドとしてNode.jsを担当。",
    githubText:"未公開",
    URL:"http://oojinro.online/",
    URLtext:"oojinro.online",
}

const humiemi={
    name:"文咲み",
    image:'/static/images/portfolio.png',
    image2:'/static/images/portfolio.png',
    main:"野田朋宏のステータスをまとめたサイト。初のフロントエンジニアリングは大変だったが非常に良い経験となった。",
    tec:"Reactを用い3日ほどで作成。",
    github:"https://github.com/nodarby/portfolio",
    githubText:"https://github.com/nodarby/portfolio",
    URL:"https://noda-portfolio.herokuapp.com/",
    URLtext:"noda-portfolio.herokuapp.com",
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
                <Fade in={this.state.visible}  timeout={3000}>
                    <div className="App">
                        <h2 className="main">Works</h2>
                        <div className="item">
                           <Card
                               name={jinro.name}
                               image={jinro.image}
                               main={jinro.main}
                               tec={jinro.tec}
                               githubText={jinro.githubText}
                               URL={jinro.URL}
                               URLtext={jinro.URLtext}
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
                <Fade in={this.state.visible}  timeout={3000}>
                <div className="App">
                    <h2 className="main">Works</h2>
                    <div className="item2">
                        <Card
                            name={jinro.name}
                            image={jinro.image2}
                            main={jinro.main}
                            tec={jinro.tec}
                            githubText={jinro.githubText}
                            URL={jinro.URL}
                            URLtext={jinro.URLtext}
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