import React, {Component} from 'react';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Maori from "./flags/Maori.svg"
import Para from "./flags/Paraguay.jpg"
import Aboriginal from "./flags/Aboriginal.png"
import Torres from "./flags/Torres.png"
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        maxWidth: '800px',
        margin: 'auto',
        transition: "transform 0.15s ease-in-out",
        "&:hover": {
            transform: "scale3d(1.05, 1.05, 1)"
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    menuHeading: {
        marginBottom: 0,
        marginLeft: 8,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),

    },
    media: {
        height: 140,
    },
}));

function GetPic(props) {
    if (props.name === "Aboriginal") {
        return Aboriginal
    }
}

export default function QuizCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={Aboriginal}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Language: {props.language} | Difficulty: {props.difficulty}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
