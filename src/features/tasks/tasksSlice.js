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
        toggleHideDone: (state, action) => {
            state.hideDone= !state.hideDone;
        },
    },
})
export const { addTask, toggleHideDone }= taskSlice.actions;
export const selectTasks= state =>state.Tasks;
export default taskSlice.reducer;