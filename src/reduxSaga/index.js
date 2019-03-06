import { put, takeEvery, delay, takeLatest } from 'redux-saga/effects';

function* asyncUpdateNum(action) {
    yield delay(1000);
    yield put({type: 'TYPE1', num: action.num});
}

export default function* handleDataAsync () {
    yield takeLatest('ASYNC', asyncUpdateNum)
}