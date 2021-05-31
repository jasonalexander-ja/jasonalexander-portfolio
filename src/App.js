import React, { useState } from 'react';

import { 
    CssBaseline, 
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import Header from './Components/Header';
import Footer from './Components/Footer';
import OptionsBottom from './Components/OptionsBottom';
import Content from './Content';


const App = (props) => {
    const theme = useTheme();
    const isSM = window.innerWidth < theme.breakpoints.values.md;
    const [drawOpen, changeDraw] = useState({
        open:  !isSM, 
        anchor: isSM ? 'bottom' : 'top', 
    });

    const toggleDraw = (anchor) => 
        changeDraw({anchor: anchor, open: !drawOpen.open}); 

    return (
        <>
            <CssBaseline />
            <Header 
                toggleDraw={toggleDraw}
            />
            <Content 
                drawOpen={drawOpen}
                changeDraw={changeDraw}
            />
            <Footer 
                toggleDraw={toggleDraw}
            />
            <OptionsBottom
                open={drawOpen}
                toggleDraw={toggleDraw}
            />
        </>
    );
}

export default App;
