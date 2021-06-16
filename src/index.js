import React from 'react'; 
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect, 
} from 'react-router-dom'; 

import App from './App';

const Main = () =>  {

    return (
        <Router>
            <Switch>
                <Redirect 
                    exact 
                    from="/" 
                    to="/home" 
                />
                <Route 
                    exact 
                    path="/:page?/:postId?" 
                    render={props => 
                        <App 
                            {...props}
                        />
                    }
                />
            </Switch>
        </Router>
    );
}

ReactDOM.render(
    <Main />,
    document.getElementById("root")
);
