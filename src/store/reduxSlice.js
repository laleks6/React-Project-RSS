import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { forEachChild } from 'typescript';
import assemblyData from '../components/request/assembly-card';

export const fetchData = createAsyncThunk(
  'project/fetchData',
  async function ({ valueSearch, limit, activePage }, { rejectWithValue }) {
    const countSkip = activePage === 1 ? 0 : activePage * limit;
    const link = `https://dummyjson.com/recipes/search?q=${valueSearch}&limit=${limit}&skip=${countSkip}`;
    try {
      const respons = await fetch(link);
      const data = await respons.json();
      if (!respons.ok) {
        throw new Error('Server Error!');
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const reduxSlice = createSlice({
  name: 'project',
  initialState: {
    data: false,
    valueSearch: '',
    limit: 10,
    activePage: -1,
    activeCard: -1,
    loading: false,
    error: null,
  },
  reducers: {
    setSearch: (state, action) => {
      state.valueSearch = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
    setActiveCard: (state, action) => {
      state.activeCard = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        console.log(action.payload, 'api data action');
        // console.log(assembly, 'api data assembly');
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSearch, setData, setActivePage, setActiveCard } =
  reduxSlice.actions;
export default reduxSlice.reducer;
