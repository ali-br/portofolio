import { createMuiTheme } from '@material-ui/core/styles';
import palette from './palette'
import { getDirection, getFonts } from "../localization/index";
import { lang } from "../localization/index";
let theme = createMuiTheme()
theme = createMuiTheme({
    palette: palette,
    direction: getDirection(),
    spacing: 2.5,
    typography: {
        h1: {
            fontWeight: 700,
            fontSize: getDirection() === "rtl" ? 50 : 52,
            lineHeight: "4rem",
            fontFamily: getFonts(),
            color: "#fff",
            [theme.breakpoints.down("xs")]: {
                fontSize: getDirection() === "rtl" ? 40 : 52,
            }
        },
        h2: {
            fontWeight: 700,
            fontSize: getDirection() === "rtl" ? 38 : 40,
            lineHeight: "3.2857rem",
            fontFamily: getFonts(),
            color: "#fff",
            [theme.breakpoints.down("xs")]: {
                fontSize: getDirection() === "rtl" ? 32 : 34,
            }
        },
        h3: {
            fontWeight: 600,
            fontSize: getDirection() === "rtl" ? 38 : 30,
            lineHeight: "2.7rem",
            fontFamily: getFonts(),
            color: "#fff",
            [theme.breakpoints.down("xs")]: {
                fontSize: getDirection() === "rtl" ? 26 : 28,
            }
        },
        h4: {
            fontWeight: 700,
            fontSize: getDirection() === "rtl" ? 26 : 28,
            lineHeight: "2.43rem",
            fontFamily: getFonts(),
            color:"#fff",
            [theme.breakpoints.down("xs")]: {
                fontSize: getDirection() === "rtl" ? 22 : 24,
            }
        },
        h5: {
            fontWeight: 700,
            fontSize: getDirection() === "rtl" ? 21 : 23,
            lineHeight: "2.14rem",
            fontFamily: getFonts(),
            color: "#fff",
            [theme.breakpoints.down("xs")]: {
                fontSize: getDirection() === "rtl" ? 18 : 20,
            }
        },
        h6: {
            fontWeight: 600,
            fontSize: getDirection() === "rtl" ? 16 : 18,
            lineHeight: "1.857rem",
            fontFamily: getFonts(),
            color: "#fff",
            [theme.breakpoints.down("xs")]: {
                fontSize: getDirection() === "rtl" ? 14 : 16,
            }
        },
        subtitle1: {
            fontWeight: 400,
            fontSize: getDirection() === "rtl" ? 18 : 20,
            lineHeight: "2rem",
            fontFamily: getFonts(),
            marginTop: lang === "en" ? 15 : 30,
            [theme.breakpoints.down("xs")]: {
                fontSize: getDirection() === "rtl" ? 15 : 17,
            }
        },
        body1: {
            fontWeight: 400,
            fontSize: getDirection() === "rtl" ? 16 : 18,
            lineHeight: "1.8rem",
            color: "#a4acc4",
            fontFamily: getFonts(),
            [theme.breakpoints.down("xs")]: {
                fontSize: getDirection() === "rtl" ? 13 : 15,
            }
        },
        body2: {
            fontWeight: 600,
            fontSize: getDirection() === "rtl" ? 13 : 15,
            letterSpacing: 1,
            color: "#a4acc4",
            fontFamily: getFonts(),
            textAlign: "center",
            [theme.breakpoints.down("xs")]: {
                fontSize: getDirection() === "rtl" ? 11 : 13,
            }
        },
        Button: {
            fontWeight: 400,
            fontSize: getDirection() === "rtl" ? 12 : 14,
            fontFamily: getFonts(),
            color: "#fff",
            letterSpacing: 2
        }
    }
})
export default theme
