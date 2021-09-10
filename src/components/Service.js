import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    root: {
        padding: "20px 15px"
    },
    main: {
        backgroundColor: "#191d2b",
        border: "1px solid #2e344e",
        borderTop: "5px solid #2e344e",
        padding: theme.spacing(8),
        transition: "all .4s ease",
        "&:hover": {
            borderTopColor: theme.palette.primary.main,
            transition: "all .4s ease"
        }
    },

    title: {
        marginTop: 15,
        position: "relative",
        paddingBottom: 15,
        transition: "all .5s ease-in-out",
        "&::before": {
            content: "''",
            position: "absolute",
            left: 0,
            // top:"auto",
            bottom: 0,
            height: 2,
            width: 50,
            background: "#2e344e",
        },
        "&:hover": {
            color: theme.palette.primary.main,
            transition: "all .5s ease-in-out"
        }
    },
    desc: {
        marginTop: 15,
        textAlign: 'left'
    }

}))
export default function Service({ title, icon, desc }) {
    const classes = useStyles()
    return (
        <Grid className={classes.root} item lg={4} md={6} xs={12} >
            <Grid container className={classes.main} direction="column" alignItems="flex-start" >
                {icon}
                <Typography variant="h5" className={classes.title}>{title}</Typography>
                <Typography variant="body1" className={classes.desc}>{desc}</Typography>
            </Grid>
        </Grid>
    )
}
