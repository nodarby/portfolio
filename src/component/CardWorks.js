import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Collapse from "@material-ui/core/Collapse";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './card.css'


const useStyles = makeStyles(theme =>({
    card: {
        maxWidth: 800,
        minWidth: 100,
    },
    media: {
        height: 300,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));




export default function MediaCard(props){
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
        <Card className={classes.card}>
            <CardContent>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title="Contemplative Reptile"
                />
            </CardContent>
            <CardContent>
                <Typography paragraph>
                    <div className="jap-big">
                        {props.name}
                    </div>
                </Typography>
                <div className="button">
                <IconButton
                    size="medium"
                    color="primary"
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
                </div>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <div className="jap_line">
                        <Typography variant="h5"  style={{paddingBottom:10}}>プロダクト概要</Typography>
                    </div>
                    <Typography paragraph  style={{paddingBottom:20}}>
                        <div className="jap-center">
                        {props.main}
                        </div>
                    </Typography>
                    <div className="jap_line">
                        <Typography variant="h5" style={{paddingBottom:10}}>使用技術</Typography>
                    </div>
                    <Typography paragraph style={{paddingBottom:20}}>
                        <div className="jap-center">
                            {props.tec}
                        </div>
                    </Typography>
                    <div className="jap_line">
                        <Typography variant="h5"  style={{paddingBottom:10}}>github</Typography>
                    </div>
                    <Typography paragraph style={{paddingBottom:20}}>
                        <div className="jap-center">
                            {props.github}
                        </div>
                    </Typography>
                    <div className="jap_line">
                        <Typography variant="h5"  style={{paddingBottom:10}}>リンク</Typography>
                    </div>
                    <a className="jap-center" href={props.URL} style={{paddingBottom:20}}>{props.URLtext}</a>
                </CardContent>
            </Collapse>
        </Card>
    );
}