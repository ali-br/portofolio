import React from 'react'
import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import Title from '../components/Title'
import { getTranslates } from "../localization/index";
import TextField from '@material-ui/core/TextField';
import "./contact.css";
import ContactButton from "../components/ContacButton"
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh"
    },
    contactGrid: {
        padding: "60px 30px 10px 30px",
        [theme.breakpoints.down("xs")]:{
            paddingLeft:5,
            paddingRight:5
        }
    },
    getintouch: {
        display: "flex"
    },
    messageButton: {
        marginTop: 20,
        display: "flex",
    },
    formGrid: {
        padding: 10
    },
    contactDetail: {
        padding: 10
    },
    iconStyle:{
        fontSize:36,
 
    }

}))

export default function Contact() {
    const classes = useStyles();
    const translate = getTranslates()
    return (
        <Grid container alignItems="flex-start" className={classes.root}>
            <Grid item container xs={12} className={classes.contactGrid}>
                <Title title={translate.contactme} />
                <Grid container direction="row">
                    <Grid item xs={12} md={6} className={classes.formGrid} >
                        <Typography variant="h4" className={classes.getintouch}>{translate.getintouch}</Typography>
                        <TextField
                            style={{ marginTop: 25 }}
                            size="medium"
                            fullWidth
                            required
                            label={translate.namecontact}
                            variant="outlined"
                        />
                        <TextField
                            style={{ marginTop: 25 }}
                            size="medium"
                            fullWidth
                            required
                            label={translate.emailcontact}
                            variant="outlined"
                        />
                        <TextField
                            style={{ marginTop: 25 }}
                            size="medium"
                            fullWidth
                            required
                            label={translate.subjectcontact}
                            variant="outlined"
                        />
                        <TextField
                            style={{ marginTop: 25 }}
                            size="medium"
                            fullWidth
                            required
                            label={translate.messagecontact}
                            variant="outlined"
                            multiline
                            rows={5}
                        />
                        <Button className={classes.messageButton} variant="contained" color="primary">
                            {translate.sendmessage}
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.contactDetail} >
                        <ContactButton icon={<CallOutlinedIcon className={classes.iconStyle} />}
                        title={translate.phone}
                        text1="+021-4999-9999"
                        text2="+021-4999-9999"
                        />
                        <ContactButton icon={<EmailOutlinedIcon className={classes.iconStyle} />}
                           title={translate.email}
                           text1="alibolouri1380@gmail.com"
                           text2="alibolouri1380@yahoo.com"
                        />
                        <ContactButton icon={<RoomOutlinedIcon className={classes.iconStyle} />} 
                              title={translate.address}
                              text1={translate.address1}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

