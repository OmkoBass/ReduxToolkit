import {createSlice} from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        mode: 'light',
        primary: '#b51b1b'
    },
    reducers: {
        switchMode: state => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        }
    }
});

export const {switchMode} = themeSlice.actions;

export const getTheme = state => state.theme;

export default themeSlice.reducer;
