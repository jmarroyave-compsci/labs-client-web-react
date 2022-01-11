import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { store } from 'app/state/store'
import Router from 'next/router'
import { fetchItems, qryFetchTopic } from 'com/entities/topics/data';
import config from "../.config.js";

const MODEL_NAME = config.automata.name;

const initialState = {
  params: {
    entity: null,
    page: null,
    genre: null,
    decade: null,
    topic: null,
  },
  data: {
    timeline: {
      loading: true,
      error: null,
      records: null,
    },
    topic: {
      loading: true,
      error: null,
      records: null,
    },
  }
}

export const fetchTopic = createAsyncThunk(`${MODEL_NAME}/fetchTopic`,
  async ( params, thunkAPI ) => {
    return await qryFetchTopic( params );
  }
)

export const fetchData = createAsyncThunk(`${MODEL_NAME}/fetchData`,
  async ( params, thunkAPI ) => {
    thunkAPI.dispatch(setParams( params ));

    const resp = await fetchItems( params );

    resp.data = resp.data.map( r => {
      r.words = r.words.map( w => ( {...w, p: w.p.replace(/,/g, " ")}))
      return r;
    })

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
        ...action.payload,
      }
    },
  },
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.data.timeline.records = null;
      state.data.timeline.loading = true;
      state.data.timeline.error = "";
    },
    [fetchData.fulfilled]: (state, action) => {
      const { loading, error, data } = action.payload;
      state.data.timeline.records = data;
      state.data.timeline.loading = loading;
      state.data.timeline.error = error;
    },
    [fetchData.rejected]: (state, action) => {
      const { error } = action;
      state.data.timeline.records = [];
      state.data.timeline.loading = false;
      state.data.timeline.error = error;
    },
    [fetchTopic.pending]: (state, action) => {
      state.data.topic.records = null;
      state.data.topic.loading = true;
      state.data.topic.error = "";
    },
    [fetchTopic.fulfilled]: (state, action) => {
      const { loading, error, data } = action.payload;
      state.data.topic.records = data;
      state.data.topic.loading = loading;
      state.data.topic.error = error;
    },
    [fetchTopic.rejected]: (state, action) => {
      const { error } = action;
      state.data.topic.records = [];
      state.data.topic.loading = false;
      state.data.topic.error = error;
    },
  },
})

store.reducerManager.add(MODEL_NAME, slice.reducer);

export default slice.reducer
export const { setParams } = slice.actions