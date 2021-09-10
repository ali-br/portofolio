import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        padding:"10px 0"
    },
    main: {
        backgroundColor: "#191d2b",
        border: "1px solid #2e344e",
        borderTop: "5px solid #2e344e",
        padding: theme.spacing(8),
        transition: "all .7s ease-in-out",
        "&:hover": {
            borderTopColor: theme.palette.primary.main,
            paddingLeft:"2.2rem",
            transition: "all .7s ease-in-out",
        },
        [theme.breakpoints.down("xs")]: {
            flexDirection:"column",
            alignItems:"flex-start",
            jutifyContent:"center"
        },
    },
    title: {
        textAlign: "left",
        paddingBottom: 5
    },
    divDetail: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flex: 1,
        [theme.breakpoints.down("xs")]: {
            margin: 10,
            paddingTop:5
        }
    },
    desc: {
        textAlign: "left",
    },
    divIcon: {
        padding: 10,
        margin: 10,
        border: "1px solid #2e344e",
        paddingBottom: 5,
        marginRight: 20,
    }


}))
export default function ContactButton({ title, icon, text1, text2 }) {
    const classes = useStyles()
    return (
        <Grid className={classes.root} >
            <Grid container className={classes.main} direction="row" alignItems="center" jutify="flex-start" >
                <div className={classes.divIcon}>
                    {icon}
                </div>
                <div className={classes.divDetail}>
                    <Typography variant="h6" className={classes.title}>{title}</Typography>
                    <Typography variant="body1" className={classes.desc}>{text1}</Typography>
                    <Typography variant="body1" className={classes.desc}>{text2}</Typography>
                </div>
            </Grid>
        </Grid>
    )
}
