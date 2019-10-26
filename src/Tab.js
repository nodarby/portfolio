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
        fontSize:[
            18,
        ].join(','),
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
        this.props.history.push('/')
    }
    handleToProfilePage = () => {
        this.props.history.push('/profile')
    }
    handleToSkillPage = () => {
        this.props.history.push('/skill')
    }
    handleToWorksPage = () => {
        this.props.history.push('/works')
    }
    handleToContactPage = () => {
        this.props.history.push('/contact')
    }

    render(){
        if(this.state.width >= 600){
            theme = createMuiTheme({
                typography: {
                    fontSize:[
                        18,
                    ].join(','),
                    fontFamily: [
                        'Arvo',
                        'sans-serif',
                    ].join(','),
                },
            })
        }else if(this.state.width >= 350){
            theme = createMuiTheme({
                typography: {
                    fontSize:[
                        13,
                    ].join(','),
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