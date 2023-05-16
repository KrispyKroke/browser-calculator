import React from 'react';
import './CalculatorHistoryTable.css';
import {useSelector} from 'react-redux';

function CalculatorHistoryTable({isShowing}) {

    const equations = useSelector(store => store.calculations);

    /* This component handles the display of all calculations completed
    in the current session.  If the calculations are cleared via the clear history
    button, the list will reset.  Otherwise, all calculations will be displayed beside
    the calculator on the DOM.  They can be hidden or shown by clicking the appropriate
    button. */
    return (
        <div className='TableContainer'>
            { isShowing ? 
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
                                <td> ~ {equation.expression} = {equation.result}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table> : <p></p>
            }
        </div>
    );
}


export default CalculatorHistoryTable;