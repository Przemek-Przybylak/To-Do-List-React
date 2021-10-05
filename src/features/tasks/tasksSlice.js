import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: true,
    },
    reducers: {
        addTask: ({tasks}, {payload}) => {
            tasks.push(payload)
        },
        toggleHideDone: state => {
            state.hideDone= !state.hideDone;
        },
        toggleTaskDone: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks[index].done = !state.tasks[index].done;
        },
    },
})
export const { addTask, toggleHideDone, toggleTaskDone }= taskSlice.actions;
export const selectTasks = state => state.tasks;
export default taskSlice.reducer;