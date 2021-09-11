// import React, { Component } from 'react';
// import "./Learn.css"
//
// import Drawer from '@material-ui/core/Drawer';
//
// class Learn extends Component {
//     render() {
//         return (
//
//             <div className="flex-container">
//                 {/*<div className="menu">*/}
//                 {/*    <h1>menu1</h1>*/}
//                 {/*</div>*/}
//                 {/*<div className="feed">*/}
//                 {/*    <h1>feed</h1>*/}
//                 {/*</div>*/}
//                 {/*<div className="menu">*/}
//                 {/*    <h1>creations</h1>*/}
//                 {/*</div>*/}
//                 {/*<li className="flex-item">1</li>*/}
//                 {/*<li className="flex-item">2</li>*/}
//                 {/*<li className="flex-item">3</li>*/}
//                 {/*<li className="flex-item">4</li>*/}
//                 {/*<li className="flex-item">5</li>*/}
//                 {/*<li className="flex-item">6</li>*/}
//             </div>
//         );
//     }
// }
//
// export default Learn;


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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
                                {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                {/*<Typography paragraph>*/}
                {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt*/}
                {/*    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum*/}
                {/*    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit*/}
                {/*    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id*/}
                {/*    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit*/}
                {/*    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.*/}
                {/*    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis*/}
                {/*    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget*/}
                {/*    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem*/}
                {/*    donec massa sapien faucibus et molestie ac.*/}
                {/*</Typography>*/}
                {/*<Typography paragraph>*/}
                {/*    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla*/}
                {/*    facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac*/}
                {/*    tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat*/}
                {/*    consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed*/}
                {/*    vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In*/}
                {/*    hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et*/}
                {/*    tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin*/}
                {/*    nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas*/}
                {/*    accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.*/}
                {/*</Typography>*/}
            </main>
        </div>
    );
}
