import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { store } from 'app/state/store'
import Router from 'next/router'
import * as data from '../data'; 
import config from "../.config.js";

const MODEL_NAME = config.automata.name;

const initialState = {
  params: {
    id: null,
  },
  data: null,
  loading: true,
  error: null,
}

export const fetchData = createAsyncThunk('stories/fetchData',
  async ( params, thunkAPI ) => {
    thunkAPI.dispatch(setParams( params ))
    return await data.fetchData( params.id );
  }
)

const slice = createSlice({
  name: MODEL_NAME,
  initialState,
  reducers: {
    setParams : (state, action) => {
            state.params = {
        ...state.params,
        ...action.payload
      }
      if(state.params.renderer == "banner" || state.params.page == 1) return;
      Router.push(`${config.page.url(state.params)}`, null, { shallow: true })        
    }
  },
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.data = null;
      state.loading = true;
      state.error = "";
    },
    [fetchData.fulfilled]: (state, action) => {
      const { loading, error, data } = action.payload;
      state.data = data;
      state.loading = loading;
      state.error = error;
    },
    [fetchData.rejected]: (state, action) => {
      const { error } = action;
      state.data = [];
      state.loading = false;
      state.error = error;
    },
  },
})

store.reducerManager.add(MODEL_NAME, slice.reducer);

export default slice.reducer
export const { setParams } = slice.actions