import React, {useEffect, useState} from "react";
import {auth, signInWithEmailAndPassword, signInWithGoogle} from "../../firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {Link, useHistory} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './Creator.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Button from '@material-ui/core/Button';

export default function Creator() {
    const classes = useStyles();
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();

    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (!user) history.replace("/login");
    }, [user, loading]);

    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <h2 className={classes.menuHeading}>Slides</h2>
                    <List>
                        {['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5', 'Slide 6', 'Slide 7', 'Slide 8','Slide 9','Slide 10',].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                {/* <Toolbar /> */}
                <h1 className='creation-page-title'>Resource Creation</h1>
                <div className='resource-underline'></div>
                <div>
                    <Card className='card-container'>
                        <div className="question-title">
                            <TextField className="question-title-input" label="Add Title..." variant="outlined" />
                        </div>
                        <div className="question">
                            <TextField className="question-input" label="Enter question" variant="outlined" />
                        </div>
                
                    {/* <div className='card-container'> */}
                    
                        <div className='card-row'>
                            <Card>
                                <CardContent className='card-content'>
                                    <HelpOutlineIcon style={{ fontSize: 100 }} className='help-outline-icon'/>
                                    <TextField id="outlined-basic" label="Enter your word" variant="outlined" />
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className='card-content'>
                                    <HelpOutlineIcon style={{ fontSize: 100 }} className='help-outline-icon'/>
                                    <TextField id="outlined-basic" label="Enter your word" variant="outlined" />
                                </CardContent>
                            </Card>
                        </div>
                        
                        <div className='card-row'>
                            <Card>
                                <CardContent className='card-content'>
                                    <HelpOutlineIcon style={{ fontSize: 100 }} className='help-outline-icon'/>
                                    <TextField id="outlined-basic" label="Enter your word" variant="outlined" />
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className='card-content'>
                                    <HelpOutlineIcon style={{ fontSize: 100 }} className='help-outline-icon'/>
                                    <TextField id="outlined-basic" label="Enter your word" variant="outlined" />
                                </CardContent>
                            </Card>
                        </div>
                    {/* </div> */}
                    </Card>

                </div>
                <div className='submit-button-wrapper'>
                    <Button className='submit-button' variant="contained" color="primary">
                        Submit Resource
                    </Button>
                </div>
            </main>
        </div>
    );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        zIndex: 1,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    menuHeading: {
        paddingTop: 20,
        marginBottom: 0,
    },
    drawerContainer: {
        overflow: 'auto',
        paddingLeft: 30,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),

    },
    media: {
        height: 140,
    },
}));