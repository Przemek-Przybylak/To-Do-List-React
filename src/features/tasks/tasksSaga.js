import { takeEvery, call, put, select, delay } from "redux-saga/effects";
import { fetchExampleTasks, selectTaskState, fetchExampleTasksSuccess, fetchExampleTasksError } from "./tasksSlice";
import { getExampleTasks } from "./getExamplesTasks";
import { saveTasksInLocalStorage} from "./tasksLocalStorage"

function* FetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksError());
        yield call(alert, "Hej, coś poszło nie tak!");
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTaskState);
    yield call(saveTasksInLocalStorage, tasks)
}

export function* tasksSaga() {
    console.log("saga")
    yield takeEvery(fetchExampleTasks.type, FetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}