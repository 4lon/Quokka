import React, { useState } from 'react';
import './Questions.css';
import mascot from './mascot.png';
import food from './fod.png';
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';


function Questions() {

    const [shake, setShake] = useState(false);

    const animate = () => {
        
        // Button begins to shake
        setShake(true);
        
        // Buttons stops to shake after 2 seconds
        setTimeout(() => setShake(false), 2000);
        
    }

    var numQuestions = 10;

    const buttonStyleA = {
        backgroundColor: '#FAA0A0', color: 'black', fontSize: "2rem",
        width: "49.5%", height: "90%"
    }
    const buttonStyleB = {
        backgroundColor: '#C1E1C1', color: 'black', fontSize: "2rem",
        width: "49.5%", height: "90%"
    }
    const buttonStyleC = {
        backgroundColor: '#A7C7E7', color: 'black',  fontSize: "2rem",
        width: "49.5%", height: "90%"
    }
    const buttonStyleD = {
        backgroundColor: '#ffb347', color: 'black', fontSize: "2rem",
        width: "49.5%", height: "90%"
    }

    const transition = {
        transition: 'all 1s ease-out'
    }


    const [activeStep, setActiveStep] = React.useState(0);

    const nextStep = () => {
        if (activeStep < numQuestions) {
            setActiveStep((currentStep) => currentStep + 1);
        }
    }

    const previousStep = () => {
        if (activeStep > -1) {
            setActiveStep((currentStep) => currentStep - 1);
        }
    }

    return (
        <div className="Page">
            <nav className="NavBar">
                <a href='localhost:3000'>
                    <img src={mascot} className="Mascot"></img>
                </a>
                <div className="MenuItems">
                    <a href='#'>CREATE</a>
                    <a href='#'>LEARN</a>
                    <a href='#'>SIGN OUT</a>
                </div>
            </nav>

            <div className="MainBody">
                <div className="QuestionProgress">
                    <Stepper activeStep={activeStep}>
                        <Step>
                            <StepLabel></StepLabel>
                        </Step>
                        <Step>
                            <StepLabel></StepLabel>
                        </Step>
                        <Step>
                            <StepLabel></StepLabel>
                        </Step>
                        <Step>
                            <StepLabel></StepLabel>
                        </Step>
                        <Step>
                            <StepLabel></StepLabel>
                        </Step>
                        <Step>
                            <StepLabel></StepLabel>
                        </Step>
                        <Step>
                            <StepLabel></StepLabel>
                        </Step>
                        <Step>
                            <StepLabel></StepLabel>
                        </Step>
                        <Step>
                            <StepLabel></StepLabel>
                        </Step>
                        <Step>
                            <StepLabel></StepLabel>
                        </Step>
                    </Stepper>
                </div>
                <div className="Image">
                    <img src={food} className="DisplayImage"></img>
                </div>
                
                <div className="Choices">
                    <div className="TopChoices">
                        <Button onClick = {() => nextStep()} className = {shake ? `shake` : null} variant="outlined" style={buttonStyleA}>A</Button>
                        <Button className="Choice B" variant="outlined" style={buttonStyleB} onClick={() => nextStep()}>B</Button>
                    </div>
                    <div className="BotChoices">
                        <Button className="Choice C" variant="outlined" style={buttonStyleC} onClick={() => nextStep()}>C</Button>
                        <Button className="Choice D" variant="outlined" style={buttonStyleD} onClick={() => nextStep()}>D</Button>
                    </div>
                </div>
                <div className="ButtonMenu">
                    <Button className="Button" variant="outlined" color="primary"
                    onClick={() => previousStep()}>Previous Question</Button>

                    <Button className="Button" variant="outlined" style=
                    {{backgroundColor: '#ffc3af', color: 'black'}}
                    onClick={() => nextStep()}>Skip Question</Button>                
            </div>
            </div>
        </div>
    );
}

export default Questions;