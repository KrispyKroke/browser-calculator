import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import calculationsSaga from './sagas/calculations.saga';
import rootReducer from './reducers/_root.reducer';

const sagaMiddleware = createSagaMiddleware();


const middlewareList = process.env.NODE_ENV === 'development' ?
[sagaMiddleware, logger] :
[sagaMiddleware];

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewareList),
);


sagaMiddleware.run(calculationsSaga);

export default store;
