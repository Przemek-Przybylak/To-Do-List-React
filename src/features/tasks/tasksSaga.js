import { takeEvery, call, put, select } from "redux-saga/effects";
import { fetchExampleTasks, selectTaskState, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExamplesTasks";
import { saveTasksInLocalStorage} from "./tasksLocalStorage"

function* FetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
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