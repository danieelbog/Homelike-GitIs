import { createSlice } from '@reduxjs/toolkit';

export const apiSlice = createSlice({
    name: 'api',
    initialState: {
        value: ''
    },
    reducers: {
        set: (state, action) => {
            state.value = action.payload;
        },
        unset: (state) => {
            state.value = '';
        }
    }
});

export const { set, unset } = apiSlice.actions;
export default apiSlice.reducer;
