import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
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
        setAllDone: state => {
            state.tasks.forEach(task => {
                task.done = true;
            });
        },
        removeTask: (state, action) => {
            const removeIndex = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks.splice(removeIndex, +1);
        },
    },
})
export const { addTask, toggleHideDone, toggleTaskDone, setAllDone, removeTask }= taskSlice.actions;
export const selectTasks = state => state.tasks;
export default taskSlice.reducer;