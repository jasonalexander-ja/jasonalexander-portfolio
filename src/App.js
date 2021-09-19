import React, { useState } from 'react';

import { CssBaseline } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles'; 
import { ThemeProvider } from '@material-ui/core';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Content';

import { getTheme } from './Theme';

const App = props => {
    // Check to see if this is on a small scrren or below
    // used when deciding where to mount the menu 
    const theme = useTheme();
    const isSM = window.innerWidth < theme.breakpoints.values.md;

    const defaultDarkMode = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    // Get a theme object, store it locally with the browser default dark mode
    const [themeData, setThemeData] = useState({
        darkMode: defaultDarkMode,
        theme: getTheme(defaultDarkMode ? 'dark' : 'light')
    });
    // Allows us to toggle between dark and light mode at will  
    const setDarkmode = onOff => 
        setThemeData({
            darkMode: onOff,
            theme: getTheme(onOff ? 'dark' : 'light')
        });

    // The menu is open by default on large screens
    const [drawOpen, changeDraw] = useState({
        open:  !isSM, 
        anchor: isSM ? 'bottom' : 'top', 
    });

    // Toggles the drawer, accepts where it should be mounted to
    // (in case a user switches between portrait 'bottom' and landscape 'top')
    const toggleDraw = (anchor) => 
        changeDraw({anchor: anchor, open: !drawOpen.open});

    return (
        <ThemeProvider theme={themeData.theme}>
            <CssBaseline />
            <Header 
                toggleDraw={toggleDraw}
                setDarkmode={setDarkmode}
                darkMode={themeData.darkMode}
            />
            <Content 
                drawOpen={drawOpen}
                toggleDraw={toggleDraw}
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
