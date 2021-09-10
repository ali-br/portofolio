import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core';
import Title from '../components/Title'
import { getTranslates } from "../localization/index";
import Skill from "../components/Skill"
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import MyStepper from "../components/MyStepper"
const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh"
    },
    aboutGrid: {
        padding: "65px 30px 0 30px",
        [theme.breakpoints.down("xs")]:{
            paddingLeft:5,
            paddingRight:5
        }
    },
    businessIcon:{
        fontSize:36
    },
    resumeTitle:{
        marginLeft:10
    },
    stepper:{
        margin:"15px 0"
    },
    schoolIcon:{
        fontSize:36
    }
}))

export default function About() {
    const classes = useStyles();
    const translate = getTranslates()
    return (
        <Grid container alignItems="flex-start" className={classes.root}>
            <Grid item container xs={12} className={classes.aboutGrid}>
                <Title title={translate.skill} />
                <Grid container direction="row">
                    <Grid item xs={12} md={6}>
                        <Skill value={80} title="React js" />
                        <Skill value={75} title="JavaScript" />
                        <Skill value={90} title="Python" />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Skill value={70} title="HTML5" />
                        <Skill value={90} title="CSS3" />
                        <Skill value={85} title="BootStrap" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container xs={12} className={classes.aboutGrid}>
                <Title title={translate.aboutresume} />
                <Grid direction="row" container justify="flex-start">
                    <BusinessCenterIcon className={classes.businessIcon}/>
                    <Typography className={classes.resumeTitle} variant="h4">{translate.workExp}</Typography>
                </Grid>
                <Grid container className={classes.stepper}>
                    <MyStepper steps={translate.work}/>
                </Grid>
                <Grid direction="row" container justify="flex-start">
                    <SchoolIcon className={classes.schoolIcon}/>
                    <Typography className={classes.resumeTitle} variant="h4">{translate.education}</Typography>
                </Grid>
                <Grid container className={classes.stepper}>
                    <MyStepper steps={translate.school}/>
                </Grid>
            </Grid>
        </Grid>
    )
}
