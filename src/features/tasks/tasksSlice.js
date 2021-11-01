import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload)
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks[index].done = !state.tasks[index].done;
        },
        setAllDone: state => {
            state.tasks.forEach(task => {
                task.done = true;
            });
        },
        removeTask: (state, action) => {
            const removeIndex = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks.splice(removeIndex, +1);
        },
        fetchExampleTasks: state => { state.loading = true },
        fetchExampleTasksSuccess: (state, { payload: tasks }) => {
            state.tasks = tasks;
            state.loading = false;
        },
        fetchExampleTasksError: (state) => {
            state.loading = false;
        },
    },
})
export const {
    addTask,
    fetchExampleTasksSuccess,
    toggleHideDone,
    toggleTaskDone,
    setAllDone,
    removeTask,
    fetchExampleTasks,
    fetchExampleTasksError,
} = taskSlice.actions;
export const selectTaskState = state => state.tasks;
export const selectTask = state => selectTaskState(state).tasks;
export const getTaskById = (state, taskId) =>
    selectTask(state).find(({ id }) => id === taskId);
export const selectTasksByQuery = (state, query) => {
    const tasks = selectTask(state);
    if (!query || query.trim() === "") {
        return tasks;
    }
    return tasks.filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
};

export const selectLoading = state => selectTaskState(state).loading;
export default taskSlice.reducer;