import React from 'react';
import './CalculatorContainer.css';
import CalculatorDisplay from '../CalculatorDisplay/CalculatorDisplay.jsx';

function CalculatorContainer() {
    return (
        <div className='Container'>
            <CalculatorDisplay />
        </div>
    );
}


export default CalculatorContainer;