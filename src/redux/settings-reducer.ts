import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
    name: 'setting',
    initialState: {
        isDarkMode: false
    },
    reducers: {
        setIsDarkMode: (state, action) => {
            state.isDarkMode = action.payload || false
        },
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode
        }
    }
});

export const {
    setIsDarkMode,
    toggleDarkMode
} = settingsSlice.actions;

export default settingsSlice.reducer;