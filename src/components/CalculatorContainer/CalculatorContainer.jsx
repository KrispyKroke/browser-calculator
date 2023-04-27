import React from 'react';
import './CalculatorContainer.css';
import CalculatorDisplay from '../CalculatorDisplay/CalculatorDisplay.jsx';
import CalculatorButtons from '../CalculatorButtons/CalculatorButtons';

function CalculatorContainer() {
    return (
        <div className='Container'>
            <CalculatorDisplay />
            <CalculatorButtons />
        </div>
    );
}


export default CalculatorContainer;