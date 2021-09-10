import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CssBaseline } from '@material-ui/core';
import ProfileImage from '../assets/images/profile.jpg';
import { getTranslates, changeLang } from '../localization/index';
import Home from './home';
import About from "./about";
import Contact from './contact';
import Resume from './resume';
import Portfolio from './portfolio';
import { lang } from '../localization/index';
import './index.css'


const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        position: "relative"
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    // appBar: {
    //     [theme.breakpoints.up('sm')]: {
    //         width: `calc(100% - ${drawerWidth}px)`,
    //         marginLeft: drawerWidth,
    //     },
    // },
    menuButton: {
        position: 'fixed',
        margin: theme.spacing(2),
        marginLeft: 0,
        width: 50,
        height: 50,
        top: 20,
        border: "1px solid #2e344e",
        borderRadius: 0,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    topDrawer: {
        width: "100%",
        padding: "20px",
        borderBottom: "1px solid #2e344e",
        textAlign: "center"
    },
    centerDrawer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flex: 1
    },
    bottomDrawer: {
        padding: 15,
        borderTop: "1px solid #2e344e"

    },
    profileImage: {
        maxWidth: "100%",
        borderRadius: "50%",
        width: 200,
        height: 200,
        border: "7px solid #2e344e",
    },
    drawerPaper: {
        width: drawerWidth,
        background: "#191d2b",
        height: "100vh",
        borderRight: "1px solid #2e344e"
    },
    content: {
        flexGrow: 1,
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        // position: "relative",
    },
}));

function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const translate = getTranslates();
    const [page, setPage] = useState(2)
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const getPage = () => {
        switch (page) {
            case 1:
                return <Home />
            case 2:
                return <About />
            case 3:
                return <Contact />
            case 4:
                return <Resume />
            case 5:
                return <Portfolio />
            default:
                return <Home />
        }
    }



    const drawer = (
        <>
            <div className={classes.topDrawer}>
                <img src={ProfileImage} alt={translate.name} className={classes.profileImage} />
            </div>
            <Divider />
            <div className={classes.centerDrawer}>
                <List style={{ width: "100%" }}>
                    <ListItem className="listItem" style={{ backgroundColor: page === 1 ? "#037fff" : "transparent", paddingLeft: lang === "en" ? 0 : "", paddingRight: lang === "fa" ? 0 : "" }}
                        onClick={() => { setPage(1); setMobileOpen(false) }} button >
                        <ListItemText disableTypography={true}
                            children={<Typography className={page === 1 ? "" : "listItemText"} style={{ color: page === 1 ? "#fff" : "#a4acc4" }} variant="body2">{translate.home}</Typography>} />
                        <div className="overLay" />
                    </ListItem>
                    <ListItem className="listItem" style={{ backgroundColor: page === 2 ? "#037fff" : "transparent", paddingLeft: lang === "en" ? 0 : "", paddingRight: lang === "fa" ? 0 : "" }}
                        onClick={() => { setPage(2); setMobileOpen(false) }} button >
                        <ListItemText disableTypography={true}
                            children={<Typography className={page === 2 ? "" : "listItemText"} style={{ color: page === 2 ? "#fff" : "#a4acc4" }} variant="body2">{translate.about}</Typography>} />
                        <div className="overLay" />
                    </ListItem>
                    <ListItem className="listItem" style={{ backgroundColor: page === 3 ? "#037fff" : "transparent", paddingLeft: lang === "en" ? 0 : "", paddingRight: lang === "fa" ? 0 : "" }}
                        onClick={() => { setPage(3); setMobileOpen(false) }} button >
                        <ListItemText disableTypography={true}
                            children={<Typography className={page === 3 ? "" : "listItemText"} style={{ color: page === 3 ? "#fff" : "#a4acc4" }} variant="body2">{translate.contact}</Typography>} />
                        <div className="overLay" />
                    </ListItem>
                    <ListItem className="listItem" style={{ backgroundColor: page === 4 ? "#037fff" : "transparent", paddingLeft: lang === "en" ? 0 : "", paddingRight: lang === "fa" ? 0 : "" }}
                        onClick={() => { setPage(4); setMobileOpen(false) }} button >
                        <ListItemText disableTypography={true}
                            children={<Typography className={page === 4 ? "" : "listItemText"} style={{ color: page === 4 ? "#fff" : "#a4acc4" }} variant="body2">{translate.resume}</Typography>} />
                        <div className="overLay" />
                    </ListItem>
                    <ListItem className="listItem" style={{ backgroundColor: page === 5 ? "#037fff" : "transparent", paddingLeft: lang === "en" ? 0 : "", paddingRight: lang === "fa" ? 0 : "" }}
                        onClick={() => { setPage(5); setMobileOpen(false) }} button >
                        <ListItemText disableTypography={true}
                            children={<Typography className={page === 5 ? "" : "listItemText"} style={{ color: page === 5 ? "#fff" : "#a4acc4" }} variant="body2">{translate.por}</Typography>} />
                        <div className="overLay" />
                    </ListItem>
                </List>
            </div>
            <div className={classes.bottomDrawer}>
                <Button color={lang === "fa" ? "primary" : "secondary"} onClick={() => changeLang("fa")}>فارسی</Button>
                {"/"}
                <Button color={lang === "en" ? "primary" : "secondary"} onClick={() => changeLang("en")}>English</Button>
            </div>
        </>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />

            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
            >
                <MenuIcon />
            </IconButton>


            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>

                {getPage()}
            </main>
        </div>
    );
}


export default ResponsiveDrawer;
