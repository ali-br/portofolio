import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import { StepConnector, Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    myStepper: {
        background: "transparent",
        paddingLeft:0
    },
    stepConnector: {
        paddingBottom: 0,
        "& span": {
            borderLeft: "3px solid #2e344e"
        }
    },
    stepContent: {
        marginTop: 0,
        borderLeft: "3px solid #2e344e"
    },
    circle: {
        border: "3px solid #2e344e",
        width: 16,
        height: 16,
        borderRadius: 8,
        marginLeft: 5
    },
    label: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        [theme.breakpoints.down("sm")]:{
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems: "flex-start",
        }
    },
    date: {
        width: "200px",
        textAlign: "left"
    },
    line: {
        width: 30,
        height: 1,
        background: "#2e344e",
        marginRight: 15,
    },
    title: {
        color: theme.palette.primary.main,
   
    },
    bodyContent: {
        textAlign: "left"
    },
    subContent: {
        textAlign: "left"
    },
    space: {
        width: 240
    },
    divContent: {
        display: "flex",
        paddingTop: 15,
    },

}));

export default function MyStepper({steps}) {
  
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <Stepper className={classes.myStepper} connector={<StepConnector className={classes.stepConnector} />} orientation="vertical">
                {steps.map((step) => step.id >= 1 ? (
                    <Step active={true} key={step.id}>
                        <StepLabel classes={{ label: classes.label }}
                            icon={<span className={classes.circle} />}>
                            <Typography className={classes.date} variant="h6">{step.date}</Typography>
                            <Hidden smDown>
                                <span className={classes.line}></span>
                            </Hidden>
                            <Typography variant="h5" className={classes.title}>{step.title}</Typography>
                        </StepLabel>
                        <StepContent className={classes.stepContent}>
                            <div className={classes.divContent}>
                                <Hidden smDown>
                                    <div className={classes.space}></div>
                                </Hidden>
                                <div style={{flex:1}}>
                                    <Typography className={classes.subContent} variant="h6">{step.subtitle}</Typography>
                                    <Typography className={classes.bodyContent} variant="body1">{step.content}</Typography>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ) : step.id === 0 ? (
                    <Step active={true} key={step.id}>
                        <StepLabel icon={null}></StepLabel>
                    </Step>
                ) : (null)
                )}
            </Stepper>
        </div>
    );
}
