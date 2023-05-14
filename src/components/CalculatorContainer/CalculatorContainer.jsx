import React from 'react';
import './CalculatorContainer.css';
import CalculatorButtons from '../CalculatorButtons/CalculatorButtons';
import CalculatorHistoryButtons from '../CalculatorHistoryButtons/CalculatorHistoryButtons';

function CalculatorContainer({isShowing, setIsShowing}) {
    return (
        <div className='Container'>
            <div className='ButtonsContainer'>
                <CalculatorButtons />
                <CalculatorHistoryButtons isShowing={isShowing} setIsShowing={setIsShowing} />
            </div>
        </div>
    );
}


export default CalculatorContainer;