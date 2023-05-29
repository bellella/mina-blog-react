import { all, fork, takeLatest, delay, put, call } from "redux-saga/effects";
import { START_INITIALIZE } from '../post';
import { postActions } from '../post'
import settingService from '../../services/setting.service'
import postService from '../../services/post.service'
import { commonActions } from '../common'

function* initialize() {
    try {
        const categories = yield call(postService.getCategories);
        yield put(postActions.setCategories(categories));
        const { settings, authorized } = yield call(settingService.getSettings);
        yield put(commonActions.setAuthorized(authorized));
        yield put(commonActions.setSettings(settings));
        yield delay(1000)
        yield put(postActions.setInitialize(true));
    } catch (error) {
        yield put({
            type: 'POST_FAILURE',
            error: error.response.data
        });
    }
}

function* watchPost() {
    yield takeLatest(START_INITIALIZE, initialize);
}

export default function* postSaga(){
    yield all([
        fork(watchPost),
    ])
}