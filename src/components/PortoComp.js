import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles(theme => ({
    root: {
        padding: 15,
        marginBottom: 25
    },
    image: {
        width: "100%"
    },
    title: {
        marginTop: 10,
        "& a": {
            textDecoration: "none",
            color: "#fff",
            transition: "all 0.4s ease",
            "&:hover": {
                color: theme.palette.primary.main,
                transition: "all 0.4s ease"
            }
        }
    },
    desc:{
        textAlign:"left"
    }

}))
export default function PortoComp({ title,image, desc ,href}) {
    const classes = useStyles()
    return (
        <Grid container item className={classes.root} lg={4} direction="column" alignItems="flex-start" justify="center">
            <img className={classes.image} src={image} alt={title} />
            <Typography variant="h5" className={classes.title}><a href={href}>{title}</a></Typography>
            <Typography variant="body1" className={classes.desc}>{desc}</Typography>
        </Grid>
    )
}
