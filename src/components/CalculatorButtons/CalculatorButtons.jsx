import React from 'react';
import {useState} from 'react';
import './CalculatorButtons.css';
import CalculatorDisplay from '../CalculatorDisplay/CalculatorDisplay';

function CalculatorButtons() {


    // This function determines which of the four basic operations
    // is desired.  To start out, it checks to make sure there is only operation 
    // being performed in the expression.  Then, it makes sure there are two numbers
    // and performs either addition, subtraction, multiplication, and division, depending
    // on what is desired.
    function equals(num1, num2) {
        let expressionArr = expression.split('');
        let minusCount = 0;
        for (let char of expressionArr) {
            if (char === '-') {
                minusCount++;
            }
        }
        
        if (minusCount === 1 && expression.indexOf('-') !== 0 
        && (expression.includes('+') || 
        expression.includes('*') || expression.includes('/'))) {
            alert('You can only perform one operation at a time!');
            clear();
            return;
        } else if (minusCount === 2 && (expression.indexOf('-') !== 0 ||
        (expression.includes('+') || 
        expression.includes('*') || expression.includes('/')))) {
            alert('The operation you are trying to perform is invalid!');
            clear();
            return;
        } else if (minusCount > 2) {
            alert('You must input a valid expression!');
            clear();
            return;
        }
        if (expression.includes('+') && expression.includes('*') ||
            expression.includes('+') && expression.includes('/') ||
            expression.includes('*') && expression.includes('/')) {
                alert('You can only perform one operation at a time!');
                clear();
                return;
            } else if (expression.includes('+')) {
                num1 = expression.slice(0, expression.indexOf('+'));
                if (expression.indexOf('+') === expression.length - 1 || 
                expression.indexOf('+') === 0) {
                    alert('You must choose two separate numbers to complete the operation!');
                    return;
                } 
                num2 = expression.slice(expression.indexOf('+') + 1);
                if (num1.indexOf('.') !== num1.lastIndexOf('.') || 
                num2.indexOf('.') !== num2.lastIndexOf('.')) {
                    alert('Each number must have a maximum of one decimal point to be valid!');
                    clear();
                    return;
                }
                setExpression(Number(num1) + Number(num2) + '');
            } else if (expression.includes('*')) {
                num1 = expression.slice(0, expression.indexOf('*'));
                if (expression.indexOf('*') === expression.length - 1 ||
                expression.indexOf('*') === 0) {
                    alert('You must choose two separate numbers to complete the operation!');
                    return;
                } 
                num2 = expression.slice(expression.indexOf('*') + 1);
                if (num1.indexOf('.') !== num1.lastIndexOf('.') || 
                num2.indexOf('.') !== num2.lastIndexOf('.')) {
                    alert('Each number must have a maximum of one decimal point to be valid!');
                    clear();
                    return;
                }
                setExpression(Number(num1) * Number(num2) + '');
            } else if (expression.includes('/')) {
                num1 = expression.slice(0, expression.indexOf('/'));
                if (expression.indexOf('/') === expression.length - 1 ||
                expression.indexOf('/') === 0) {
                    alert('You must choose two separate numbers to complete the operation!');
                    return;
                } 
                num2 = expression.slice(expression.indexOf('/') + 1);
                if (num1.indexOf('.') !== num1.lastIndexOf('.') || 
                num2.indexOf('.') !== num2.lastIndexOf('.')) {
                    alert('Each number must have a maximum of one decimal point to be valid!');
                    clear();
                    return;
                }
                setExpression(Number(num1) / Number(num2) + '');
            } else if (expression.includes('-')) {
                num1 = expression.slice(0, expression.lastIndexOf('-'));
                if (expression.indexOf('-') === expression.length - 1 ||
                    expression.lastIndexOf('-') === 0) {
                        alert('You must choose two separate numbers to complete the operation!');
                        return;
                } 
                    num2 = expression.slice(expression.lastIndexOf('-') + 1);
                    if (num1.indexOf('.') !== num1.lastIndexOf('.') || 
                    num2.indexOf('.') !== num2.lastIndexOf('.')) {
                        alert('Each number must have a maximum of one decimal point to be valid!');
                        clear();
                        return;
                    }
                    setExpression(Number(num1) - Number(num2) + '');
            } else {
                alert('You must choose an operation for calculation to occur!');
            }
    }
    
    // Clears the current expression.
    function clear() {
        setExpression('');
    }

    // Changes the sign of the given number.
    function negate() {
        if (isNaN(expression)) {
            alert('The input is not valid for this operation!');
            return;
        } else {
            setExpression(Number(expression) * -1 + '');
        }
    }

    // Transforms the selected number into 1 / 100 of itself.
    function percent() {
        if (isNaN(expression)) {
            alert('The input is not valid for this operation!');
            return;
        } else {
            setExpression(Number(expression) * 0.01 + '');
        }
    }

    // This function determines what operation to perform on the number(s). It then calls the 
    // corresponding function.
    function calculate(calculation) {
        let num1;
        let num2;
        if (calculation === '=') {
            equals(num1, num2);
        } else if (calculation === 'C') {
            clear();
        } else if (calculation === '--') {
            negate();
        } else {
           percent();
        }
    }

    const [expression, setExpression] = useState('');

    /* This function is responsible for the addition of numbers, decimal points,
    and operation symbols, which are then shown on the calculator display.*/
    function addChar(val) {
        if (typeof val !== 'number' && val !== '.' 
        && val !== '-' && expression.includes(val)) {
            alert('You can only perform one operation at a time!');
            return;
        } else if (expression.length === 1 && expression[0] === '0') {
            setExpression(val + '');
        } else {
            setExpression(expression + '' + val);
        }
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