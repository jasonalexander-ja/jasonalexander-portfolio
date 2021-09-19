import React from 'react'; 
import ReactDOM from 'react-dom';

import './index.css';

import {
    BrowserRouter,
    Route,
    Redirect, 
} from 'react-router-dom'; 

import App from './App';

const Main = () =>  {

    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
}

ReactDOM.render(
    <Main />,
    document.getElementById("root")
);
