import React from 'react';
import './CalculatorHistoryButtons.css';

import {useDispatch} from 'react-redux';

function CalculatorHistoryButtons({isShowing, setIsShowing}) {

    /* This component contains the two buttons for showing/hiding 
    the calculation history and clearing history. */

    function toggleVisibility() {
        setIsShowing(!isShowing);
    }

    const dispatch = useDispatch();


    return (
        <div id='containerChild' className='CalcHistoryBlock'>
            <div className='ToggleHistoryBlock'>
                <button id='toggleHistoryBtn' onClick={toggleVisibility}>Show/Hide History</button>
            </div>
            <div className='ClearHistoryBlock'>
                <button id='clearHistoryBtn' onClick={() => dispatch({type: 'CLEAR_CALCULATIONS'})}>Clear History</button>
            </div>
        </div>
    );
}

export default CalculatorHistoryButtons;