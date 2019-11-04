import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
    card: {
        maxWidth: 350,
        minWidth: 100,
    },
    media: {
        height: 150,
    },
    cont:{
        height:60,
        textAlign:"left",
    }
});



export default function MediaCard(props){
    const classes = useStyles();



    return (
        <Card className={classes.card}>
            <Card>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title="Contemplative Reptile"
                />
            </Card>
        </Card>
    );
}