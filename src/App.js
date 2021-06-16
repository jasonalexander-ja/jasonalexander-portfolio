import React, { useState } from 'react';

import { 
    CssBaseline, 
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles'; 
import {
    ThemeProvider
} from '@material-ui/core';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Content';

import { dev } from './helper.js';
import { getTheme } from './Theme';

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

    const [themeData, setThemeData] = useState({
        darkMode: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches),
        theme: getTheme((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light')
    });
    const setDarkmode = onOff => 
        setThemeData({
            darkMode: onOff,
            theme: getTheme(onOff ? 'dark' : 'light')
        });

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

    const redirectTo = uri => history.push(`/${uri}`);

    return (
        <ThemeProvider theme={themeData.theme}>
            <CssBaseline />
            <Header 
                toggleDraw={toggleDraw}
                redirectTo={redirectTo}
                setDarkmode={setDarkmode}
                darkMode={themeData.darkMode}
            />
            <Content 
                drawOpen={drawOpen}
                toggleDraw={toggleDraw}
                redirectTo={redirectTo}
                page={page}
                optionsList={options.optionsList}
                postId={postId}
                setDarkmode={setDarkmode}
                darkMode={themeData.darkMode}
            />
            <Footer 
                toggleDraw={toggleDraw} 
            />
        </ThemeProvider>
    );
}

export default App;
