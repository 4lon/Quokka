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
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {AddBox} from "@material-ui/icons";
import QuizCard from "./QuizCard";
// import Slider from "./NetflixSlider";
import FlagCard from "./FlagCard";

function InboxIcon() {
    return null;
}

// function

export default function Learn() {
    const classes = useStyles();
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();
    const [activeSlideIndex, setActiveSlideIndex] = useState(0)

    // setActiveSlideIndex( (newActiveSlideIndex) => {
    //     this.setState({
    //         activeSlideIndex: newActiveSlideIndex,
    //     });
    // })

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
                        {['Yumplatok', 'Andaijin', 'Maori', 'Guarani', 'Romani', 'Jeju', 'Laz', 'Ainu', 'Mulao', 'Khamba'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider/>
                    <h2 className={classes.menuHeading}>My Resources</h2>
                    <List>
                        {[].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                        <ListItem button component={Link} to="/create">

                            <ListItemIcon><AddBox /></ListItemIcon>
                            <ListItemText primary="Create new" />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <h1>Recommended</h1>
                <QuizCard
                    title="Foods"
                    language="Maori"
                    difficulty="Easy"
                />
                <QuizCard
                    title="Nature"
                    language="Yumplatok"
                    difficulty="Easy"
                />
                <QuizCard
                    title="Wildlife"
                    language="Ainu"
                    difficulty="Medium"
                />

                <h1>Langauges</h1>

                {['Yumplatok', 'Andaijin', 'Maori', 'Guarani', 'Romani', 'Jeju', 'Laz', 'Ainu', 'Mulao', 'Khamba'].map((text, index) => (
                    <FlagCard
                        language={text}
                    />
                ))}
                <br></br>

                <h1>Trending</h1>
                <QuizCard
                    title="Numbers"
                    language="Jeju"
                    difficulty="Easy"
                />
                <QuizCard
                    title="Australian Locations"
                    language="Andaijin"
                    difficulty="Hard"
                />
                <QuizCard
                    title="Emotions"
                    language="Khamba"
                    difficulty="Medium"
                />

                <h1>Difficulty: Medium</h1>
                <QuizCard
                    title="Occupations"
                    language="Laz"
                    difficulty="Medium"
                />
                <QuizCard
                    title="Verbs"
                    language="Guarani"
                    difficulty="Medium"
                />
                <QuizCard
                    title="Instruments"
                    language="Romani"
                    difficulty="Medium"
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