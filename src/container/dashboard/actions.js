import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const requestTableData = () => ({ type: "FETCH_REQUEST_TABLEDATA", payload: null });
const tableDataSuccess = (payload) => ({ type: "FETCH_TABLEDATA_SUCCESS", payload });
const tableDataFailure = (payload) => ({ type: "FETCH_TABLEDATA_FAILURE", payload });
export const gettableData = () => ({ type: "GET_TABLEDATA" });

function* fetchTableData() {
    try {
        yield put(requestTableData());
        const payload = yield axios.get('https://jsonplaceholder.typicode.com/todos').then(response => response.data);
        yield put(tableDataSuccess(payload));
    } catch (e) {
        yield put(tableDataFailure(e));
    }
}

export function* watchTableData() {
    yield takeEvery('GET_TABLEDATA', fetchTableData);
}
