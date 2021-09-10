import React, { useState, useEffect } from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 15,
        width: "100%"
    },
    progressdiv: {
        display: "flex",
        justifyContent: "flex-start",
        width: "100%"
    },
    progress: {
        width: "80%",
        background: "#2e344e",
        height: 6,
        marginLeft: 15,
        marginTop: 13
    }
}))

export default function Skill({ value, title }) {
    const classes = useStyles();
    const [val, setVal] = useState(40)
    useEffect(() => {
        setTimeout(() => {
            if (val === value) {
                return
            }
            setVal(val => val + 5)
        }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [val])
    return (
        <div className={classes.root}>
            <Typography variant="h6" >{title}</Typography>
            <div className={classes.progressdiv}>
                <Typography variant="body1">{value}%</Typography>
                <LinearProgress variant="determinate" value={val} className={classes.progress} color="primary" />
            </div>
        </div>
    )
}
