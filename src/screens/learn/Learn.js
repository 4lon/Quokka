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
import QuizCard from "./QuizCard";

export default function Learn() {
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
                    <h2 className={classes.menuHeading}>Languages</h2>
                    <List>
                        {['Irish Gaelic', 'Krymchak', 'Okanagan-Colville', 'Ts’ixa', 'Ainu', 'Rapa Nui', 'Andajin'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <h2 className={classes.menuHeading}>My Resources</h2>
                    <List>
                        {['+ Create new'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                <QuizCard
                    title="Garbage"
                    language="JavaScript"
                    difficulty="Pretty much impossible"
                />
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
        // paddingLeft: 20,
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