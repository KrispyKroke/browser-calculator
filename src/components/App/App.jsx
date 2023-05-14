import React from 'react';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import Header from '../Header/Header.jsx'
import './App.css';
import CalculatorContainer from '../CalculatorContainer/CalculatorContainer.jsx';
import CalculatorHistoryTable from '../CalculatorHistoryTable/CalculatorHistoryTable.jsx';



function App() {

    const dispatch = useDispatch();

    const [isShowing, setIsShowing] = useState(true);

    useEffect(() => {
        dispatch({type: 'CLEAR_CALCULATIONS'});
    }, []);

    return (
        <div className="App">
            <Header />
            <main>
                <CalculatorContainer isShowing={isShowing} setIsShowing={setIsShowing} />
                <CalculatorHistoryTable isShowing={isShowing} />
            </main>
        </div>
    );
}

export default App;
