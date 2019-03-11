import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducer';
import reduxSaga from '../reduxSaga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware);
const store = createStore(reducer, enhancer);
sagaMiddleware.run(reduxSaga);

export default store;
