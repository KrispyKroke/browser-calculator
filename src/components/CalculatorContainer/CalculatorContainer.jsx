import React from 'react';
import './CalculatorContainer.css';
import CalculatorDisplay from '../CalculatorDisplay/CalculatorDisplay.jsx';
import CalculatorButtons from '../CalculatorButtons/CalculatorButtons';
import CalculatorHistoryButtons from '../CalculatorHistoryButtons/CalculatorHistoryButtons';

function CalculatorContainer() {
    return (
        <div className='Container'>
            <CalculatorDisplay />
            <div className='ButtonsContainer'>
                <CalculatorButtons />
                <CalculatorHistoryButtons />
            </div>
        </div>
    );
}


export default CalculatorContainer;