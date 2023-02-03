import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './data-slice';

const store = configureStore({
  reducer: {
    tableData: dataReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
