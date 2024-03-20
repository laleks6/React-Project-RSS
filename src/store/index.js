import { configureStore } from '@reduxjs/toolkit';
import projectReducer from './reduxSlice';

export default configureStore({
  reducer: {
    project: projectReducer,
  },
});
