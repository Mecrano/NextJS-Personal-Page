/* eslint-disable react/jsx-indent */
import React from 'react';
import './styles.scss';

// Material Desing
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseLine from '@material-ui/core/CssBaseline';

// Components
import HomePage from '../Pages/Home Page';

const themeJSON = {
    palette: {
        common: {
            black: '#000',
            white: '#fff',
        },
        background: {
            paper: '#fff',
            default: '#fafafa',
        },
        primary: {
            light: '#2B2B2B',
            main: '#313131',
            dark: '#000',
            contrastText: '#fff',
        },
        secondary: {
            light: '#f37f33',
            main: '#f06000',
            dark: '#a84300',
            contrastText: '#fff',
        },
        error: {
            light: 'rgba(255, 91, 106, 1)',
            main: 'rgba(255, 0, 63, 1)',
            dark: 'rgba(195, 0, 25, 1)',
            contrastText: '#fff',
        },
        text: {
            primary: 'rgb(255, 255, 255)',
            secondary: 'rgba(85, 85, 85, 0.8)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)',
        },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '*': {
                    'scrollbar-width': 'thin',
                },
                '*::webkit-scrollbar': {
                    width: '0.2em',
                    height: '0.2em',
                },
            },
        },
    },
};

const EOTheme = createMuiTheme(themeJSON);

EOTheme.typography.h1 = {
    fontSize: '2.4rem',
    fontWeight: 'bold',
};

EOTheme.typography.h2 = {
    fontSize: '2rem',
    fontWeight: 'bold',
};

EOTheme.typography.h3 = {
    fontSize: '1.6rem',
    fontWeight: 'bold',
};

EOTheme.typography.h4 = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
};

EOTheme.typography.h5 = {
    fontSize: '1rem',
    fontWeight: 'bold',
};

EOTheme.typography.h6 = {
    fontSize: '0.85rem',
    fontWeight: 'bold',
};

const App = () => (
    <MuiThemeProvider theme={EOTheme}>
        <CssBaseLine />
        <HomePage />
    </MuiThemeProvider>
);

export default App;
