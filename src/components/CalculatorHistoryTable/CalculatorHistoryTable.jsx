import React from 'react';
import './CalculatorHistoryTable.css';
import {useSelector} from 'react-redux';

function CalculatorHistoryTable() {

    const equations = useSelector(store => store.calculations);

    return (
        <div className='TableContainer'>
            <table className='HistoryTable'>
                <thead>
                    <tr>
                        <th>Previous Calculations:</th>
                    </tr>
                </thead>
                <tbody>
                    {equations?.map((equation) => {
                        return (
                            <tr key={equation.id}>
                                <td>{equation.expression} = {equation.result}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}


export default CalculatorHistoryTable;