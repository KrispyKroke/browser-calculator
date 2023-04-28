import React from 'react';
import './CalculatorHistoryButtons.css';

function CalculatorHistoryButtons() {
    return (
        <div id='containerChild' className='CalcHistoryBlock'>
            <div className='ToggleHistoryBlock'>
                <button id='toggleHistoryBtn'>Show/Hide History</button>
            </div>
            <div className='ClearHistoryBlock'>
                <button id='clearHistoryBtn'>Clear History</button>
            </div>
        </div>
    );
}

export default CalculatorHistoryButtons;