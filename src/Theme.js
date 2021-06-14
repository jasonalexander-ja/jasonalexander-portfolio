import {
    createMuiTheme
} from '@material-ui/core';

import { 
    blueGrey,
    teal, 
} from '@material-ui/core/colors'; 

const getTheme = mode => {
    let darkMode = mode;
    if(!darkMode)
        darkMode = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ?
            "dark" : "light";
    return createMuiTheme({
        palette: {
            type: darkMode,
            primary: blueGrey,
            secondary: teal
        }
    });
}

const darkTheme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ?
    "dark" : "light";

const theme = createMuiTheme({
    palette: {
        type: darkTheme,
        primary: blueGrey,
        secondary: teal
    }
});

export default theme; 
