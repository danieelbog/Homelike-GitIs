import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './api/api-slice';

export default configureStore({
    reducer: {
        api: apiReducer
    }
});
