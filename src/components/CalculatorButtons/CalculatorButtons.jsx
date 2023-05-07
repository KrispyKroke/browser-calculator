import React from 'react';
import {useState} from 'react';
import './CalculatorButtons.css';
import CalculatorDisplay from '../CalculatorDisplay/CalculatorDisplay';

function CalculatorButtons() {


    function calculate(calculation) {
        let num1;
        let num2;
        if (calculation === '=') {
            if (expression.indexOf('+') !== expression.lastIndexOf('+')
            || expression.indexOf('-') !== expression.lastIndexOf('-')
            || expression.indexOf('/') !== expression.lastIndexOf('/')
            || expression.indexOf('*') !== expression.lastIndexOf('*') ||
            expression.includes('+') && expression.includes('-') ||
            expression.includes('+') && expression.includes('*') ||
            expression.includes('+') && expression.includes('/') ||
            expression.includes('-') && expression.includes('*') ||
            expression.includes('-') && expression.includes('/') ||
            expression.includes('*') && expression.includes('/')) {
                alert('You can only perform one operation at a time!');
                return;
            } else if (expression.includes('+')) {
                num1 = expression.slice(0, expression.indexOf('+'));
                if (expression.indexOf('+') === expression.length - 1 || 
                expression.indexOf('+') === 0) {
                    alert('You must choose two separate numbers to complete the operation!');
                    return;
                } 
                num2 = expression.slice(expression.indexOf('+') + 1);
                setExpression(Number(num1) + Number(num2) + '');
            } else if (expression.includes('-')) {
                num1 = expression.slice(0, expression.indexOf('-'));
                if (expression.indexOf('-') === expression.length - 1 ||
                expression.indexOf('-') === 0) {
                    alert('You must choose two separate numbers to complete the operation!');
                    return;
                } 
                num2 = expression.slice(expression.indexOf('-') + 1);
                setExpression(Number(num1) - Number(num2) + '');
            } else if (expression.includes('*')) {
                num1 = expression.slice(0, expression.indexOf('*'));
                if (expression.indexOf('*') === expression.length - 1 ||
                expression.indexOf('*') === 0) {
                    alert('You must choose two separate numbers to complete the operation!');
                    return;
                } 
                num2 = expression.slice(expression.indexOf('*') + 1);
                setExpression(Number(num1) * Number(num2) + '');
            } else if (expression.includes('/')) {
                num1 = expression.slice(0, expression.indexOf('/'));
                if (expression.indexOf('/') === expression.length - 1 ||
                expression.indexOf('/') === 0) {
                    alert('You must choose two separate numbers to complete the operation!');
                    return;
                } 
                num2 = expression.slice(expression.indexOf('/') + 1);
                setExpression(Number(num1) / Number(num2) + '');
            } else {
                alert('You must choose an operation for calculation to occur!');
            }
        } else if (calculation === 'C') {
            setExpression('');
        } else if (calculation === '--') {
            if (Number(expression) === NaN) {
                alert('You can only use this operation on a number, not an expression!');
                return;
            } else {
                setExpression(Number(expression) * -1 + '');
            }
        } else {
            if (Number(expression) === NaN) {
                alert('You can only use this operation on a number, not an expression!');
                return;
            } else {
                setExpression(Number(expression) * 0.01 + '');
            }
        }
    }

    const [expression, setExpression] = useState('');

    function addChar(val) {
        setExpression(expression + '' + val);
    }


    return (
        <>
            <CalculatorDisplay expression={expression} />
            <div className='CalcButtons' id='containerChild'>
                <div className='Row1'>
                    <div id='inner'><button id='clearBtn' onClick={() => calculate('C')}>C</button></div>
                    <div id='inner'><button id='negationBtn' onClick={() => calculate('--')}>+/-</button></div>
                    <div id='inner'><button id='percentBtn' onClick={() => calculate('%')}>%</button></div>
                    <div id='inner'><button id='divisionBtn' onClick={() => addChar('/')}>/</button></div>
                </div>
                <div className='Row2'>
                    <button id='seven' onClick={() => addChar(7)}>7</button>
                    <button id='eight' onClick={() => addChar(8)}>8</button>
                    <button id='nine' onClick={() => addChar(9)}>9</button>
                    <button id='multiBtn' onClick={() => addChar('*')}>*</button>
                </div>
                <div className='Row3'>
                    <button id='four' onClick={() => addChar(4)}>4</button>
                    <button id='five' onClick={() => addChar(5)}>5</button>
                    <button id='six' onClick={() => addChar(6)}>6</button>
                    <button id='subtractBtn' onClick={() => addChar('-')}>-</button>
                </div>
                <div className='Row4'>
                    <button id='one' onClick={() => addChar(1)}>1</button>
                    <button id='two' onClick={() => addChar(2)}>2</button>
                    <button id='three' onClick={() => addChar(3)}>3</button>
                    <button id='addBtn' onClick={() => addChar('+')}>+</button>
                </div>
                <div className='Row5'>
                    <button id='zero' onClick={() => addChar(0)}>0</button>
                    <button id='decimal' onClick={() => addChar('.')}>.</button>
                    <button id='equalSign' onClick={() => calculate('=')}>=</button>
                </div>
            </div>
        </>
    );
}


export default CalculatorButtons;