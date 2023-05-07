import React from 'react';
import './CalculatorDisplay.css';


function CalculatorDisplay({expression}) {
    return (
        <div className='CalculatorDisplay'>
            <h1 id='displayText'>{expression ? expression : 0}</h1>
        </div>
    );
}

export default CalculatorDisplay;