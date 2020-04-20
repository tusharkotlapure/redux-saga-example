import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from "redux-logger";
import reducers from './reducers';
import "regenerator-runtime/runtime";
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, createLogger({ collapsed: true, duration: true })];
export default createStore(reducers, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);
