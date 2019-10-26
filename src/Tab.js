import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {withRouter} from "react-router";

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};




class TabsEx extends React.Component{

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
        return(
            <div className='tab'>
                <Grid item>
                    <ButtonGroup
                        fullWidth aria-label="full width outlined button group"
                    >
                        <Button onClick={this.handleToHomePage}>HOME</Button>
                        <Button onClick={this.handleToProfilePage}>PROFILE</Button>
                        <Button　onClick={this.handleToSkillPage}>SKILL</Button>
                        <Button onClick={this.handleToWorksPage}>WORKS</Button>
                        <Button onClick={this.handleToContactPage}>CONTACT</Button>
                    </ButtonGroup>
                </Grid>
            </div>
        )
    }
}


export default withRouter(TabsEx);