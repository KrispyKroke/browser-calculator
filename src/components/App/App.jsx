import React from 'react';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import Header from '../Header/Header.jsx'
import './App.css';
import CalculatorContainer from '../CalculatorContainer/CalculatorContainer.jsx';
import CalculatorHistoryTable from '../CalculatorHistoryTable/CalculatorHistoryTable.jsx';



function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: 'CLEAR_CALCULATIONS'});
    }, []);

    return (
        <div className="App">
            <Header />
            <main>
                <CalculatorContainer />
                <CalculatorHistoryTable />
            </main>
        </div>
    );
}

export default App;
