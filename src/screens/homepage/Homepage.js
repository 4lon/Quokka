import React from 'react';
import './Homepage.css';
import {Button} from '@material-ui/core';

class Homepage extends React.Component {
    render() {
        return (
            <div className="HomePage">
                <nav>
                    <a href='localhost:3000' style={{textDecoration: "none"}}><h1 className="Heading">QUOKKA.IO</h1></a>
                </nav>
                <div className="Details">
                    <h1 style={{color:'white'}}>Where the world connects, share your language with others</h1>
                    <Button variant="contained" href='/login'
                            style={{backgroundColor: '#ff6f1b', color: '#FFFFFF', marginBottom: '1rem', width: '100%'}}>
                        <h3>create an account</h3>
                    </Button>
                    <Button variant="outlined" href="/login" style={{color: '#FFFFFF', width: '100%', borderColor: '#FFFFFF' }}>
                        <h3>login</h3>
                    </Button>
                </div>
            </div>
        );
    }
}



export default Homepage;