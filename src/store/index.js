import { createStore, combineReducers, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga";
import { postReducer } from "./post"
import { styleReducer } from "./style"
import { commonReducer } from './common'
import rootSaga from './sagas'

const rootReducer = combineReducers({
  post: postReducer,
  style: styleReducer,
  common: commonReducer
});

const saga = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(saga));

saga.run(rootSaga);

export default store;