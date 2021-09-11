import React from 'react';
import './Homepage.css';
import {Button} from '@material-ui/core';

class Homepage extends React.Component {
    render() {
        return (
            <div className="Page">
                <div className="Details">
                    <Button className="Button" p={1} variant="contained"
                            style={{backgroundColor: '#ff6f1b', color: '#FFFFFF', marginBottom: '1rem', width: '100%'}}>
                        <h3>create an
                            account</h3></Button>
                    <Button className="Button" variant="outlined" style={{color: '#FFFFFF', width: '100%'}}>
                        <h3>login</h3></Button>

                </div>
            </div>
        );
    }
}

export default Homepage;