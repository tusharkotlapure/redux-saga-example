import { all } from 'redux-saga/effects';
import { watchProductList } from './container/home/actions';
import { watchTableData } from './container/dashboard/actions';

export default function* root() {
    yield all([
        watchProductList(),
        watchTableData(),
    ]);
}
