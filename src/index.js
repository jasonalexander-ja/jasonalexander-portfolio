import React from 'react'; 
import ReactDOM from 'react-dom';

import {
    ThemeProvider
} from '@material-ui/core';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect, 
} from 'react-router-dom'; 

import App from './App';
import theme from './Theme';

const Main = () =>  {

    return (
        <Router>
            <Switch>
                <Redirect 
                    exact 
                    from="/" 
                    to="/home" 
                />
                <ThemeProvider theme={theme}>
                    <Route 
                        exact 
                        path="/:page?/:postId?" 
                        render={props => 
                            <App 
                                {...props}
                            />
                        }
                    />
                </ThemeProvider>
            </Switch>
        </Router>
    );
}

ReactDOM.render(
    <Main />,
    document.getElementById("root")
);
