import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";
import QuizCard from "./QuizCard";

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
}));

export default function Learn() {
    const classes = useStyles();

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
                        {['Yumplatok','Irish Gaelic', 'Krymchak', 'Okanagan-Colville', 'Ts’ixa', 'Ainu', 'Rapa Nui', 'Andajin'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <h2 className={classes.menuHeading}>My Resources</h2>
                    <List>
                        {/*Add list of created resources to*/}
                        {[].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                        <ListItem button component={Link} to="/create">
                            <ListItemText primary="+ Create new" />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                <QuizCard
                    title="Aboriginal"
                    language="Aboriginal"
                    difficulty="Pretty much impossible"
                />
            </main>
        </div>
    );
}
