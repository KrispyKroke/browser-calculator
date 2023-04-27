import React from 'react';
import './CalculatorHistoryButtons.css';

function CalculatorHistoryButtons() {
    return (
        <div id='containerChild'>
            <div className='ToggleHistoryBlock'>
                <button id='toggleHistoryBtn'>Toggle History</button>
            </div>
            <div className='ClearHistoryBlock'>
                <button id='clearHistoryBtn'>Clear History</button>
            </div>
        </div>
    );
}

export default CalculatorHistoryButtons;