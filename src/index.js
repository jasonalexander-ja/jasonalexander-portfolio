import React from 'react'; 
import ReactDOM from 'react-dom';

import {
    ThemeProvider
} from '@material-ui/core';

import App from './App';
import theme from './Theme';

const Main = () =>  {

    return (
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    );
}

ReactDOM.render(
    <Main />,
    document.getElementById("root")
);
