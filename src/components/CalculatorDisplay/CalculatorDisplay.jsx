import React from 'react';
import './CalculatorDisplay.css';

/* This component handles the number/expression display on the calculator.
It uses conditional rendering to show the expression if it is truthy.  Otherwise,
it displays a zero.*/
function CalculatorDisplay({expression}) {
    return (
        <div className='CalculatorDisplay'>
            <h1 id='displayText'>{expression ? expression : 0}</h1>
        </div>
    );
}

export default CalculatorDisplay;