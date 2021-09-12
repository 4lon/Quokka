import React, { useState } from 'react';
import './Questions.css';
import mascot from './mascot.png';
import Meat from './fod.png';
import Bread from './bread.jpg'
import Fruits from './fruits.png'
import Seafood from './seafood.png'
import Water from './water.png'
import Burger from './burger.jpg'
import Cake from './cake.jpg'
import Rice from './rice.jpg'
import Chicken from './chicken.jpg'
import Vegetable from './vegetables.jpg'
import {Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Paper from '@material-ui/core/Paper';

const slides = [
    {
        id: 1,
        title: 'what word means bread?',
        a: 'Taro',
        b: 'Hapu',
        c: 'Aroha',
        d: 'Karakia',
        correct: 'a',
        image: Bread
    },
    {
        id: 1,
        title: 'what word means Fruits?',
        a: 'Kuari',
        b: 'Mana',
        c: 'Hua',
        d: 'Mahi',
        correct: 'c',
        image: Fruits
    },
    {
        id: 1,
        title: 'what word means Seafood?',
        a: 'Maunga',
        b: 'Kaimoana',
        c: 'Moa',
        d: 'Kai',
        correct: 'b',
        image: Seafood
    },
     {
        id: 1,
        title: 'what word means Food?',
        a: 'Kai',
        b: 'Kiwi',
        c: 'Motu',
        d: 'Tapu',
        correct: 'a',
        image: Meat
    },
    {
        id: 1,
        title: 'what word means Water?',
        a: 'ost',
        b: 'quejo',
        c: 'cat',
        d: 'Wai',
        correct: 'd',
        image: Water
    },
    {
        id: 1,
        title: 'what word means Burger?',
        a: 'Nui',
        b: 'Putea',
        c: 'Marae',
        d: 'Wahine',
        correct: 'b',
        image: Burger
    },
    {
        id: 1,
        title: 'what word means Cake?',
        a: 'Hui',
        b: 'Keke',
        c: 'Hikoi',
        d: 'Hangi',
        correct: 'b',
        image: Cake
    },
    {
        id: 1,
        title: 'what word means Rice?',
        a: 'Awa',
        b: 'Iwi',
        c: 'Raihi',
        d: 'Koha',
        correct: 'c',
        image: Rice
    },
    {
        id: 1,
        title: 'what word means Chicken?',
        a: 'Moana',
        b: 'Pa',
        c: 'Pounamu',
        d: 'HeiHei',
        correct: 'd',
        image: Chicken
    },
    {
        id: 1,
        title: 'what word means Vegetable?',
        a: 'Puku',
        b: 'Taihoa',
        c: 'Tama',
        d: 'Whenua',
        correct: 'Huawhenua',
        image: Vegetable
    },
];

function Questions() {
    const [qNum, setQNum] = useState(0);
    const [shake, setShake] = useState(false);
    const [answered, setAnswered] = useState(false);
    const [finished, setFinsihed] = useState(false);

    const animate = () => {
        
        // Button begins to shake
        setShake(true);
        
        // Buttons stops to shake after 2 seconds
        setTimeout(() => setShake(false), 2000);
        
    }

    var numQuestions = 10;

    const buttonStyleA = {
        backgroundColor: '#FAA0A0', color: 'black', fontSize: "2rem",
        width: "49.5%", height: "70%"
    }
    const buttonStyleB = {
        backgroundColor: '#C1E1C1', color: 'black', fontSize: "2rem",
        width: "49.5%", height: "70%"
    }
    const buttonStyleC = {
        backgroundColor: '#A7C7E7', color: 'black',  fontSize: "2rem",
        width: "49.5%", height: "70%"
    }
    const buttonStyleD = {
        backgroundColor: '#ffb347', color: 'black', fontSize: "2rem",
        width: "49.5%", height: "70%"
    }

    const transition = {
        transition: 'all 1s ease-out'
    }


    const [activeStep, setActiveStep] = React.useState(0);

    const nextStep = (correct, chosen) => {
        
        if (activeStep < numQuestions) {
            setActiveStep((currentStep) => currentStep + 1);
            setAnswered(true);
        }
        if (qNum < 9){
            setQNum(qNum + 1)
        }
    }

    const previousStep = () => {
        if (activeStep > -1) {
            setActiveStep((currentStep) => currentStep - 1);
        }
    }

    const slide = (title, nameA, nameB, nameC, nameD, correct, image) => {
        return(
            <React.Fragment>
                <h1>{title}</h1>
                <div className="Image">
                    <img src={image} className="DisplayImage"></img>
                </div>
            
                <div className="Choices">
                    <div className="TopChoices">
                        <Button onClick = {() => nextStep()} variant="outlined" style={buttonStyleA}>{nameA}</Button>
                        <Button className="Choice B" variant="outlined" style={buttonStyleB} onClick={() => nextStep()}>{nameB}</Button>
                    </div>
                    <div className="BotChoices">
                        <Button className="Choice C" variant="outlined" style={buttonStyleC} onClick={() => nextStep()}>{nameC}</Button>
                        <Button className="Choice D" variant="outlined" style={buttonStyleD} onClick={() => nextStep()}>{nameD}</Button>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    const done = () => {
        return(
            <React.Fragment>
               <Paper elevation={3}/> 
            </React.Fragment>
        )
    }

    return (
        <div className="Page">
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
                { slide(slides[qNum].title,slides[qNum].a,slides[qNum].b,slides[qNum].c,slides[qNum].d,slides[qNum].correct,slides[qNum].image )}
                </div>
        </div>
    );
}

export default Questions;