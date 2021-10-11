import { takeEvery, call, put } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExamplesTasks";

function* FetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Hej, coś poszło nie tak!");
    }
}

export function* watchFetchExampleTasks() {
    console.log("saga")
    yield takeEvery(fetchExampleTasks.type, FetchExampleTasksHandler);
}