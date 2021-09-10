import './App.css';
import theme from './theme/theme'
import { StylesProvider, ThemeProvider, jssPreset } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import IndexScreen from './screens/index';
import {getDirection} from './localization/index';
import { create } from 'jss';
import rtl from 'jss-rtl';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
function App() {
  return getDirection()==="ltr"?(
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <CssBaseline />
        <IndexScreen/>
      </StylesProvider>
    </ThemeProvider>
  ):(
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <CssBaseline />
        <IndexScreen/>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
