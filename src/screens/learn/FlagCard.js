import React, {Component} from 'react';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import GetPic from "./flags/GetPic";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '9%',
        float: 'left',
        margin: '0.47%',
        transition: "transform 0.15s ease-in-out",
        "&:hover": {
            transform: "scale3d(1.05, 1.05, 1)"
        },
    },
    media: {
        height: 100,
    },
}));

export default function FlagCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea href="\quiz">
                <CardMedia
                    className={classes.media}
                    image={GetPic(props.language)}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.language}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
