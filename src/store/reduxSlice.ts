import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Data } from '../types/types';

type Link = {
  valueSearch: string;
  limit: number;
  activePage: number;
};

type InitialState = {
  data: Data | null;
  valueSearch: string;
  activePage: number;
  activeCard: number;
  loading: boolean;
  error: null | boolean;
  limit: number;
};

const initialState: InitialState = {
  data: null,
  valueSearch: '',
  activePage: 1,
  activeCard: -1,
  loading: false,
  error: null,
  limit: 10,
};

export const fetchData = createAsyncThunk(
  'project/fetchData',
  async function (
    { valueSearch, limit, activePage }: Link,
    { rejectWithValue }
  ) {
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
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return '';
    }
  }
);

const reduxSlice = createSlice({
  name: 'project',
  initialState,
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
    setLimit: (state, action) => {
      state.limit = action.payload;
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
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { setSearch, setData, setActivePage, setActiveCard, setLimit } =
  reduxSlice.actions;
export default reduxSlice.reducer;
