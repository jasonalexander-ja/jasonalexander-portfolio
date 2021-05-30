import {
    createMuiTheme
} from '@material-ui/core';

import { 
    blueGrey,
    teal
} from '@material-ui/core/colors'; 

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
