import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    status: 'All',
    colors: []
  },
  reducers: {
    setStatusFilter: (state, action) => {
      state.status = action.payload;
    },
    addColorFilter: (state, action) => {
      state.colors.push(action.payload);
    },
    removeColorFilter: (state, action) => {
      state.colors = state.colors.filter(color => color !== action.payload);
    }
  }
});

export const { setStatusFilter, addColorFilter, removeColorFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
