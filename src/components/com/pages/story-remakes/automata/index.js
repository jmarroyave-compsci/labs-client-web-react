import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { store } from 'app/state/store'
import Router from 'next/router'
import * as data from '../data'; 
import config from "../.config.js";
import { fetchItems, qryFetchTopic } from 'com/entities/topics/data';

const MODEL_NAME = config.automata.name;

const initialState = {
  params: {
    renderer: null,
    entity: null,
    page: null,
  },
  data: null,
  loading: true,
  error: null,
  topic: {
    data: null,
    loading: true,
    error: null,    
  },
}

export const fetchTopic = createAsyncThunk(`${MODEL_NAME}/fetchTopic`,
  async ( params, thunkAPI ) => {
    return await qryFetchTopic( params );
  }
)

export const fetchData = createAsyncThunk(`${MODEL_NAME}/fetchData`,
  async ( params, thunkAPI ) => {
    await thunkAPI.dispatch(setParams( params ))
    params.extended = (params.renderer === "banner" ) ? false: true;
    params.limit = (params.renderer === "banner" ) ? 100 : 10;

    const resp = await data.fetchData( params );

    if(params.renderer === "banner"){
      resp.data = [{ words: resp.data}]
    }
    
    return resp;
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
      if(state.params.renderer == "banner" || state.params.page == 1) return
      Router.push(`${config.page.url(state.params)}?page=${state.params.page}`, null, { shallow: true })
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
    [fetchTopic.pending]: (state, action) => {
      state.topic.data = null;
      state.topic.loading = true;
      state.topic.error = "";
    },
    [fetchTopic.fulfilled]: (state, action) => {
      const { loading, error, data } = action.payload;
      state.topic.data = data;
      state.topic.loading = loading;
      state.topic.error = error;
    },
    [fetchTopic.rejected]: (state, action) => {
      const { error } = action;
      state.topic.data = [];
      state.topic.loading = false;
      state.topic.error = error;
    },  },
})

store.reducerManager.add(MODEL_NAME, slice.reducer);

export default slice.reducer
export const { setParams } = slice.actions