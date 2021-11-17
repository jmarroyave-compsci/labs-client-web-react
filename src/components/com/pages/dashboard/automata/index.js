import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { store } from 'app/state/store'
import Router from 'next/router'
import * as data from '../data'; 
import config from "../.config.js";

const MODEL_NAME = config.automata.name;

const initialState = {
  params: {
    page: null,
  },
  data: null,
  loading: false,
  error: null,
}

export const fetchData = createAsyncThunk(`${MODEL_NAME}/fetchData`,
  async ( params, thunkAPI ) => {
    thunkAPI.dispatch(setParams( params ))

    switch(params.type){
      case "person":
        return await data.fetchPeople(params)      
      case "movie":
        return await data.fetchMovies(params)      
    }    
  }
)

const slice = createSlice({
  name: MODEL_NAME,
  initialState,
  reducers: {
    setParams : (state, action) => {
      state.params.page = action.payload.page;
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