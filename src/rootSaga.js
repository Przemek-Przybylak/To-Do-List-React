import { all } from "@redux-saga/core/effects";
import { watchFetchExampleTasks } from "./features/tasks/tasksSaga";

export default function* rootSaga() {
    yield all([
        watchFetchExampleTasks(),
    ])
}