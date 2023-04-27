import React from 'react';
import './CalculatorButtons.css';

function CalculatorButtons() {
    return (
        <div className='CalcButtons' id='containerChild'>
            <div className='Row1'>
                <div id='inner'><button id='clearBtn'>C</button></div>
                <div id='inner'><button id='negationBtn'>+/-</button></div>
                <div id='inner'><button id='percentBtn'>%</button></div>
                <div id='inner'><button id='divisionBtn'>/</button></div>
            </div>
            <div className='Row2'>
                <button id='seven'>7</button>
                <button id='eight'>8</button>
                <button id='nine'>9</button>
                <button id='multiBtn'>*</button>
            </div>
            <div className='Row3'>
                <button id='four'>4</button>
                <button id='five'>5</button>
                <button id='six'>6</button>
                <button id='subtractBtn'>-</button>
            </div>
            <div className='Row4'>
                <button id='one'>1</button>
                <button id='two'>2</button>
                <button id='three'>3</button>
                <button id='addBtn'>+</button>
            </div>
            <div className='Row5'>
                <button id='zero'>0</button>
                <button id='decimal'>.</button>
                <button id='equalSign'>=</button>
            </div>
        </div>
    );
}


export default CalculatorButtons;