import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

// This saga retrieves calculations from the database and stores them in the 
// calculations reducer.
function* fetchCalculations() {
    try {
        const calculations = yield axios.get('/api/calculations');
        yield put({type: 'SET_CALCULATIONS', payload: calculations.data});
    } catch (error) {
        console.log(error);
    }
}


// This saga makes an API call to add a calculation to the database.
function* addCalculation(action) {
    try {
        yield axios.post('/api/calculations/add', {expression: action.payload.expression,
        result: action.payload.result});
        yield put({type: 'FETCH_CALCULATIONS'});
    } catch (error) {
        console.log(error);
    }
}

// This saga deletes all calculations stored in the database.
function* clearCalculations() {
    try {
        yield axios.delete('/api/calculations/clear');
        yield put({type: 'FETCH_CALCULATIONS'});
    } catch (error) {
        console.log(error);
    }
}


function* calculationsSaga() {
    yield takeLatest('FETCH_CALCULATIONS', fetchCalculations);
    yield takeLatest('ADD_CALCULATION', addCalculation);
    yield takeLatest('CLEAR_CALCULATIONS', clearCalculations);
}


export default calculationsSaga;