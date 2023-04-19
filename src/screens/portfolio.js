import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import Title from "../components/Title"
import { getTranslates } from "../localization/index"
import PortoComp from "../components/PortoComp"
import image from "../assets/images/image.webp"
const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh",
        padding: "65px 30px 0 30px",
        [theme.breakpoints.down("xs")]: {
            paddingLeft: 5,
            paddingRight: 5
        }
    }
}))
export default function Portfolio() {
    const classes = useStyles();
    const translate = getTranslates()
  
    return (
        <Grid container className={classes.root}>
            <Title title={translate.por} />
            <Grid item container xs={12} direction="row" justify="flex-start" alignItems="center">
                {translate.portofolioList.map(portofolio =>
                    <PortoComp key={portofolio.id} title={portofolio.title}
                        desc={portofolio.desc} image={image} href="#" />
                )}
            </Grid>
        </Grid>
    )
}
