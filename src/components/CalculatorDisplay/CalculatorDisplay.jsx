import React from 'react';
import './CalculatorDisplay.css';


function CalculatorDisplay({num1, num2, result, isFirstNumClicked}) {
    return (
        <div className='CalculatorDisplay'>
            <h1 id='displayText'>{result ? result : 
                (isFirstNumClicked ? (num2 ? num2 : 0) 
                : (num1 ? num1 : 0))}
            </h1>
        </div>
    );
}

export default CalculatorDisplay;