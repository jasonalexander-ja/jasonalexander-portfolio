import {
    createMuiTheme
} from '@material-ui/core';

import { 
    blueGrey,
    teal, 
} from '@material-ui/core/colors'; 

export const getTheme = mode => {
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

export const exp = {
    getTheme,
};

export default exp; 
