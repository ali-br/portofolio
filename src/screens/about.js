import React from 'react'
import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import Title from '../components/Title'
import { getTranslates } from "../localization/index";
import aboutImage from "../assets/images/about.jpg";
import Service from "../components/Service"
import CodeIcon from '@material-ui/icons/Code';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import PaletteIcon from '@material-ui/icons/Palette';

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh"
    },
    aboutGrid: {
        padding: "60px 30px 0 30px",
        [theme.breakpoints.down("xs")]: {
            paddingLeft: 5,
            paddingRight: 5
        }
    },
    image: {
        width: "100%",
        height: "100%",
        transition: "all 1s ease-in-out",
    },
    imageGrid: {
        position: "relative",
        height: 400,
    },
    nameText: {
        color: theme.palette.primary.main,
        [theme.breakpoints.down("xs")]: {
            display: "block"
        },
    },
    aboutText: {
        padding: "0 20px",
        textAlign: "left",
        [theme.breakpoints.down("sm")]: {
            padding: 0,
            margin: "15px 0"
        }
    },
    subAbout: {
        textAlign: "justify",
        paddingTop: 15
    },
    icondev: {
        fontSize: 46,
        color: theme.palette.primary.main,
        transition:"all 1s ease",
        "&:hover": {
            transform: "translateY(-20%)"
        }
    },
}))

export default function About() {
    const classes = useStyles();
    const translate = getTranslates()
    return (
        <Grid container alignItems="flex-start" className={classes.root}>
            <Grid item container xs={12} className={classes.aboutGrid}>
                <Title title={translate.aboutme} />
                <Grid container direction="row">
                    <Grid item xs={12} md={6} className={classes.imageGrid} >
                        <img src={aboutImage} className={classes.image} alt={translate.name} />
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.aboutText} >
                        <Typography variant="h3">{translate.hi}<span className={classes.nameText}>{translate.name}</span>{translate.hi2}</Typography>
                        <Typography variant="body1" className={classes.subAbout}>
                            {translate.des}
                        </Typography>
                        <Typography variant="body1" style={{ paddingTop: 15 }}>
                            <b style={{ minWidth: 100, display: "inline-block" }}>{translate.fullname}</b>{" : "}{translate.name}
                        </Typography>
                        <Typography variant="body1" style={{ paddingTop: 5 }}>
                            <b style={{ minWidth: 100, display: "inline-block" }}>{translate.age}</b>{" : "}19 {translate.years}
                        </Typography>
                        <Typography variant="body1" style={{ paddingTop: 5 }}>
                            <b style={{ minWidth: 100, display: "inline-block" }}>{translate.nationality}</b>{" : "}{translate.iran}
                        </Typography>
                        <Typography variant="body1" style={{ paddingTop: 5 }}>
                            <b style={{ minWidth: 100, display: "inline-block" }}>{translate.languages}</b>{" : "}{translate.persian} , {translate.english}
                        </Typography>
                        <Typography variant="body1" style={{ paddingTop: 5 }}>
                            <b style={{ minWidth: 100, display: "inline-block" }}>{translate.phone}</b>{" : "}(+98)9128877564
                        </Typography>
                        <div style={{ marginTop: 15 }}>
                            <Button variant="contained" color="primary">
                                {translate.download}
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container xs={12} className={classes.aboutGrid}>
                <Title title={translate.services} />
                <Service icon={<PaletteIcon className={classes.icondev} />} title={translate.webdesign}
                    desc={translate.servicedesc} />
                <Service icon={<CodeIcon className={classes.icondev} />} title={translate.webdevelopment}
                    desc={translate.servicedesc} />
                <Service icon={<SmartphoneIcon className={classes.icondev} />} title={translate.machinelearning}
                    desc={translate.servicedesc} />
            </Grid>
        </Grid>
    )
}
