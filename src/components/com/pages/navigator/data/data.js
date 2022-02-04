import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { store } from 'app/state/store'
import Router from 'next/router'
import { fetchItems, qryFetchTopic } from 'com/entities/topics/data';
import config from "../.config.js";
import { fetchResults as qryFetchResults } from "com/pages/search/data"

const MODEL_NAME = config.automata.name;

const initialState = {
  params: {
    entity: null,
    genre: null,
    decade: null,
    topic: null,
    page: 1,
  },
  data: {
    timeline: {
      loading: true,
      error: null,
      records: [],
    },
    topic: {
      loading: true,
      error: null,
      records: null,
    },
    results: {
      loading: true,
      error: null,
      records: null,
      complete: false,
    },
  }
}


const __fetchResults = async ( params ) => {
    params.qry = decodeURIComponent(params.topic)
    params.page = (params.page) ? parseInt(params.page) : 1;
    params.entities = ["movie", "tv_show", "video_game"]

    if(!isNaN(params.year)){
      params.year = parseInt(params.year) + 5
      params.timeFrame = 5;      
    }

    return await qryFetchResults( params );      
}

export const fetchResults = createAsyncThunk(`${MODEL_NAME}/fetchResults`,
  async ( params, thunkAPI ) => {
    //console.log('searching', params)

    var resp = await __fetchResults( { ...params, year: params.decade } );      

    if(resp.data.length > 0){
      return resp;
    }

    resp = await __fetchResults( { ...params } );      
    resp.complete = true;

    return resp
  }
)

export const fetchTopic = createAsyncThunk(`${MODEL_NAME}/fetchTopic`,
  async ( params, thunkAPI ) => {
    thunkAPI.dispatch(setParams( params ));        
    return await qryFetchTopic( params );
  }
)

export const fetchData = createAsyncThunk(`${MODEL_NAME}/fetchData`,
  async ( params, thunkAPI ) => {
    console.log(params)
    thunkAPI.dispatch(setParams( params ));    
    params.nratio = 2
    return await fetchItems( params );
  }
)


const slice = createSlice({
  name: MODEL_NAME,
  initialState,
  reducers: {
    setParams : (state, action) => {
      if(state.params.genre && state.params.genre != action.payload.genre){
        state.data.timeline.records = []
      }

      state.params = {
        ...state.params,
        ...action.payload,
      }

    },
  },
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      //state.data.timeline.records = null;
      state.data.timeline.loading = true;
      state.data.timeline.error = "";
    },
    [fetchData.fulfilled]: (state, action) => {
      const { loading, error, data } = action.payload;
      data.forEach( r => {
        if(state.data.timeline.records.filter( t => (t.year == r.year)).length > 0) return
        state.data.timeline.records.push(r);
      })
      state.data.timeline.loading = loading;
      state.data.timeline.error = error;
    },
    [fetchData.rejected]: (state, action) => {
      const { error } = action;
      //state.data.timeline.records = [];
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
    [fetchResults.pending]: (state, action) => {
      state.data.results.records = null;
      state.data.results.loading = true;
      state.data.results.error = "";
    },
    [fetchResults.fulfilled]: (state, action) => {
      const { loading, error, data, complete=false } = action.payload;
      state.data.results.records = data;
      state.data.results.loading = loading;
      state.data.results.error = error;
      state.data.results.complete = complete;
    },
    [fetchResults.rejected]: (state, action) => {
      const { error } = action;
      state.data.results.records = [];
      state.data.results.loading = false;
      state.data.results.error = error;
    },
  },
})

store.reducerManager.add(MODEL_NAME, slice.reducer);

export default slice.reducer
export const { setParams } = slice.actions