import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        height: 75,
        marginBottom: 60,
        width: "100%",
        position: 'relative',
    },
    title: {
        textAlign: "left",
        "&::after": {
            content: "''",
            position: "absolute",
            left: 0,
            top: 'auto',
            bottom: 0,
            height: 5,
            borderRadius: 100,
            width: 35,
            background: "#037fff",
        },
        "&::before": {
            content: "''",
            position: "absolute",
            left: 0,
            top: 'auto',
            bottom: 0,
            height: 5,
            borderRadius: 100,
            width: 100,
            background: "rgba(3,127,255,0.3)"
        },
    },
    subtitle: {
        fontSize: '3.5rem',
        position: "absolute",
        left: 15,
        top: "100%",
        lineHeight: "1rem",
        fontWeight: 900,
        color: "rgba(25,29,43,0.44)",
        display: "inline-block",
        zIndex: -1,
        transform:"translateY(-40%)"
    }
}))
export default function Title({ title }) {
    const classes = useStyles();
    return (
        <Grid className={classes.root} >
            <Typography className={classes.title} variant="h2" >{title}</Typography>
            <span className={classes.subtitle}>{title}</span>
        </Grid>
    )
}
