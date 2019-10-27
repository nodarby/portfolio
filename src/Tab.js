import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {withRouter} from "react-router";
import {MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import './Tab.css'


const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};


var theme = createMuiTheme({
    typography: {
        fontSize:18,
        fontFamily: [
            'Arvo',
            'sans-serif',
        ].join(','),
    },
})



class TabsEx extends React.Component{



    state={
        width:window.innerWidth
    }


    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({width:window.innerWidth})
        })
    }

    handleToHomePage = () => {
        window.home=true
        window.profile=false
        window.skill=false
        window.works=false
        window.contact=false

        this.props.history.push('/')
    }
    handleToProfilePage = () => {
        window.home=false
        window.profile=true
        window.skill=false
        window.works=false
        window.contact=false

        this.props.history.push('/profile')
    }
    handleToSkillPage = () => {
        window.home=false
        window.profile=false
        window.skill=true
        window.works=false
        window.contact=false

        this.props.history.push('/skill')
    }
    handleToWorksPage = () => {
        window.home=false
        window.profile=false
        window.skill=false
        window.works=true
        window.contact=false

        this.props.history.push('/works')
    }
    handleToContactPage = () => {
        window.home=false
        window.profile=false
        window.skill=false
        window.works=false
        window.contact=true

        this.props.history.push('/contact')
    }

    render(){
        if(this.state.width >= 600){
            theme = createMuiTheme({
                typography: {
                    fontSize:18,
                    fontFamily: [
                        'Arvo',
                        'sans-serif',
                    ].join(','),
                },
            })
        }else if(this.state.width >= 400 && this.state.width < 600){
            theme = createMuiTheme({
                typography: {
                    fontSize:13,
                    fontFamily: [
                        'Arvo',
                        'sans-serif',
                    ].join(','),
                },
            })
        }else{
            theme = createMuiTheme({
                typography: {
                    fontSize: 10,
                    fontFamily: [
                        'Arvo',
                        'sans-serif',
                    ].join(','),
                },
            })
        }
        return(
            <MuiThemeProvider theme={theme}>
                <div className='tab'>
                    <Grid item>
                        <ButtonGroup
                            fullWidth aria-label="full width outlined button group"
                            className="bar"

                        >
                            <Button onClick={this.handleToHomePage} className="button">HOME</Button>
                            <Button onClick={this.handleToProfilePage}>PROFILE</Button>
                            <Button　onClick={this.handleToSkillPage}>SKILL</Button>
                            <Button onClick={this.handleToWorksPage}>WORKS</Button>
                            <Button onClick={this.handleToContactPage}>CONTACT</Button>
                        </ButtonGroup>
                    </Grid>
                </div>
            </MuiThemeProvider>

        )
    }
}


export default withRouter(TabsEx);