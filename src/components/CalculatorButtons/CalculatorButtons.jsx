import React from 'react';
import {useState} from 'react';
import './CalculatorButtons.css';
import CalculatorDisplay from '../CalculatorDisplay/CalculatorDisplay';

function CalculatorButtons() {



    function calculate(calculation) {
        if (typeof num1 === 'number' && typeof num2 === 'number' && calculation === '=') {
            if (operation === '+') {
                setResult(num1 + num2);
            } else if (operation === '-') {
                setResult(num1 - num2);
            } else if (operation === '*') {
                setResult(num1 * num2);
            } else if (operation === '/') {
                setResult(num1 / num2);
            }
            setOperation('');
            setIsFirstNumClicked(false);
        } else if (calculation === 'C') {
            setResult('');
            setIsFirstNumClicked(false);
            setNum1('');
            setNum2('');
        } else if (calculation === '%') {
            setResult(num1 * 0.01);
        } else {
            setResult(num1 * -1);
        }

        if (!result) {
            setNum1('');
            setNum2('');
            setIsFirstNumClicked(false);
        }

        if (result !== '') {
            // will complete the POST to back-end here
        }
    }

    const [operation, setOperation] = useState('');
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    const [isFirstNumClicked, setIsFirstNumClicked] = useState(false);

    function pickNum(val) {
        if (!isFirstNumClicked && (typeof val === 'number' || val === '.')) {
            if (operation !== '') {
                setNum2(Number(num2 + '' + val));
                setIsFirstNumClicked(true);
                if (result) {
                    setNum1(result);
                    calculate('=');
                }
            } else {
                setNum1((Number(num1 + '' + val)))
            }
            setResult('');
        } else if (isFirstNumClicked && !result && (typeof val === 'number' || val === '.')) {
                setNum2(Number(num2 + '' + val));
        }
    }


    return (
        <>
            <CalculatorDisplay num1={num1} num2={num2} result={result} isFirstNumClicked={isFirstNumClicked} />
            <div className='CalcButtons' id='containerChild'>
                <div className='Row1'>
                    <div id='inner'><button id='clearBtn' onClick={() => calculate('C')}>C</button></div>
                    <div id='inner'><button id='negationBtn' onClick={() => calculate('--')}>+/-</button></div>
                    <div id='inner'><button id='percentBtn' onClick={() => calculate('%')}>%</button></div>
                    <div id='inner'><button id='divisionBtn' onClick={() => setOperation('/')}>/</button></div>
                </div>
                <div className='Row2'>
                    <button id='seven' onClick={() => pickNum(7)}>7</button>
                    <button id='eight' onClick={() => pickNum(8)}>8</button>
                    <button id='nine' onClick={() => pickNum(9)}>9</button>
                    <button id='multiBtn' onClick={() => setOperation('*')}>*</button>
                </div>
                <div className='Row3'>
                    <button id='four' onClick={() => pickNum(4)}>4</button>
                    <button id='five' onClick={() => pickNum(5)}>5</button>
                    <button id='six' onClick={() => pickNum(6)}>6</button>
                    <button id='subtractBtn' onClick={() => setOperation('-')}>-</button>
                </div>
                <div className='Row4'>
                    <button id='one' onClick={() => pickNum(1)}>1</button>
                    <button id='two' onClick={() => pickNum(2)}>2</button>
                    <button id='three' onClick={() => pickNum(3)}>3</button>
                    <button id='addBtn' onClick={() => setOperation('+')}>+</button>
                </div>
                <div className='Row5'>
                    <button id='zero' onClick={() => pickNum(0)}>0</button>
                    <button id='decimal' onClick={() => pickNum('.')}>.</button>
                    <button id='equalSign' onClick={() => calculate('=')}>=</button>
                </div>
            </div>
        </>
    );
}


export default CalculatorButtons;