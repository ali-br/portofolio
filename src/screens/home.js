import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { getTranslates } from "../localization/index";
import "./home.css"

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh",
        overflow: "hidden",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        //  position:"relative"
    },
    nameText: {
        color: theme.palette.primary.main,
        [theme.breakpoints.down("xs")]: {
            display: "block"
        }
    },
    icons: {
        marginTop: 25
    },
    icon: {
        border: "2px solid #2e344e",
        margin: "0 8px",
        transition: "all .5s ease",
        "&:hover": {
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
            transition: "all 1s ease"
        }
    },

}))

export default function Home() {
    const classes = useStyles();
    const translate = getTranslates();

    return (
        <div className={classes.root} >
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            {/* <>
                <span className="line1" />
                <span className="line2" />
                <span className="line3" />
                <span className="line4" />
            </> */}
            <Grid >
                <Typography variant="h1">{translate.hi}<span className={classes.nameText}>{translate.name}</span>{translate.hi2}</Typography>
                <Typography variant="subtitle1">
                    {translate.des}
                </Typography>
                <div className={classes.icons}>
                    <IconButton color="secondary" className={classes.icon}>
                        <TelegramIcon />
                    </IconButton>
                    <IconButton color="secondary" className={classes.icon}>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton color="secondary" className={classes.icon}>
                        <LinkedInIcon />
                    </IconButton>
                </div>
            </Grid>
        </div>
    )

}
