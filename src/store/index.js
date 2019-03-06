import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducer';
import reduxSaga from '../reduxSaga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

let initialState = {num: 0};
const store = createStore(reducer, initialState, applyMiddleware(compose(sagaMiddleware)));
sagaMiddleware.run(reduxSaga);

export default store;
