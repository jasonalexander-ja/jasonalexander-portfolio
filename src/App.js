import React, { useState } from 'react';

import { 
    CssBaseline, 
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles'; 

import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Content';

import { dev } from './helper.js';

const getOptionsList = async setOptions => {
    let list = await fetch(`/${dev ? 'TestData/' : ''}OptionLists.json`)
        .then(res => res.json())
        .then(data => data.list)
        .catch(() => []);
    setOptions({
        optionsList: list,
        hasLoaded: true
    });
}

const App = props => {
    const theme = useTheme();
    const isSM = window.innerWidth < theme.breakpoints.values.md;

    const { 
        history, 
        match, 
    } = props;
    const { params } = match;
    const { page, postId } = params;
    const redirectTo = uri => history.push(`/${uri}`);

    const [drawOpen, changeDraw] = useState({
        open:  !isSM, 
        anchor: isSM ? 'bottom' : 'top', 
    });

    const [options, setOptions] = useState({
        optionsList: [],
        hasLoaded: false,
    }); 
    if(!(options.hasLoaded))
        getOptionsList(setOptions);

    const toggleDraw = (anchor) => 
        changeDraw({anchor: anchor, open: !drawOpen.open}); 

    return (
        <>
            <CssBaseline />
            <Header 
                toggleDraw={toggleDraw}
                redirectTo={redirectTo}
            />
            <Content 
                drawOpen={drawOpen}
                toggleDraw={toggleDraw}
                redirectTo={redirectTo}
                page={page}
                optionsList={options.optionsList}
                postId={postId}
            />
            <Footer 
                toggleDraw={toggleDraw} 
            />
        </>
    );
}

export default App;
