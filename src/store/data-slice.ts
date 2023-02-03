import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getData } from 'services/data-API';
import { IData } from 'types';

type IDataInitialState = {
  isLoaded: string;
  data: IData[];
  error: string;
};

const dataInitialState: IDataInitialState = {
  isLoaded: 'NOT_LOADED',
  data: [],
  error: '',
};

export const fetchData = createAsyncThunk<IData[], undefined, { rejectValue: string }>(
  'data/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getData();
      return response;
    } catch (error) {
      return rejectWithValue('Failed to get data.');
    }
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState: dataInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoaded = 'LOADING';
        state.data = [];
        state.error = '';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoaded = 'LOADED';
      })
      .addCase(fetchData.rejected, (state) => {
        state.isLoaded = 'REJECTED';
        state.error = 'Something was wrong. Failed to get data.';
      });
  },
});

export default dataSlice.reducer;
