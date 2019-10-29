import React from 'react';
import './Common.css';
import {Fade} from "@material-ui/core";
import { useSpring, animated } from 'react-spring'
import range from 'lodash-es/range'
import './styles.css'

const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

function App() {
    const { radians } = useSpring({
        to: async next => {
            while (1) await next({ radians: 2 * Math.PI })
        },
        from: { radians: 0 },
        config: { duration: 3500 },
        reset: true,
    })
    return (
        <>
            <animated.div key={0} className="script-bf-box" style={{ transform: radians.interpolate(interp(0)) }} />
            <animated.div key={1} className="script-bf-box1" style={{ transform: radians.interpolate(interp(1)) }} />
            <animated.div key={2} className="script-bf-box2" style={{ transform: radians.interpolate(interp(2)) }} />
            <animated.div key={3} className="script-bf-box3" style={{ transform: radians.interpolate(interp(3)) }} />
            <animated.div key={4} className="script-bf-box4" style={{ transform: radians.interpolate(interp(4)) }} />
            <animated.div key={5} className="script-bf-box5" style={{ transform: radians.interpolate(interp(5)) }} />
            <animated.div key={6} className="script-bf-box6" style={{ transform: radians.interpolate(interp(6)) }} />
        </>
        )
}

class Home extends React.Component{
    state={
        visible:window.home,
    }


    render(){
        return (
            <Fade in={this.state.visible} timeout={2000}>
                <div className="App">
                    <div className="wrap">
                        <h1 className="big">Welcome</h1>
                        <h1 className="big">to</h1>
                        <h1 className="big">Nodarby's Portfolio!</h1>
                     </div>
                    <div className="piano">
                         <App/>
                    </div>
                </div>
            </Fade>
        );
    }


}

export default Home;