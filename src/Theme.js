import {
    createMuiTheme
} from '@material-ui/core';

const darkTheme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ?
    "dark" : "light";

const theme = createMuiTheme({
    palette: {
        type: darkTheme
    }
});

export default theme; 
