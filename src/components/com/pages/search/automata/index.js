import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { store } from 'app/state/store'
import Router from 'next/router'
import * as data from '../data'; 
import config from "../.config.js";
import { getEntitiesArrayState } from 'com/entities'

const MODEL_NAME = config.automata.name;

const initialState = {
  params: {
    qry: null,
    page: null,
    entities: null,
    year: null,
    timeFrame: null, 
  },
  results : {
    data: null,
    loading: true,
    error: null,    
  },
  suggestions : {
    data: null,
    loading: true,
    error: null,    
  }
}

export const search = createAsyncThunk(`${MODEL_NAME}/search`,
  async ( params, thunkAPI ) => {
    params.qry = decodeURIComponent(params.qry)
    params.page = 1;
    params.entities = getEntitiesArrayState(true);
    thunkAPI.dispatch(fetchData( params ))
  }
)

export const fetchData = createAsyncThunk(`${MODEL_NAME}/fetchData`,
  async ( params, thunkAPI ) => {
    params.qry = decodeURIComponent(params.qry)
    params.page = (params.page) ? parseInt(params.page) : 1;
    params.entities = (params.entities) ? params.entities : getEntitiesArrayState(true);
    thunkAPI.dispatch(setParams( params ))
    if( params.entities.length > 0){
      return await data.fetchResults( params );      
    }
    else{
      return {data: [], loading: false, error: ""}
    }
  }
)

export const fetchSuggestions = async( params ) => {
  return await data.fetchSuggestions( params.qry );
}

const slice = createSlice({
  name: MODEL_NAME,
  initialState,
  reducers: {
    setParams : (state, action) => {
            state.params = {
        ...state.params,
        ...action.payload
      }
      state.results = { loading: true, data: []};      
      Router.push(`${config.page.url()}?q=${state.params.qry}&page=${state.params.page}`, null, { shallow: true })
    },      
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      const { loading, error, data } = action.payload;
      state.results =  action.payload;
    },
    [fetchSuggestions.fulfilled]: (state, action) => {
      const { loading, error, data } = action.payload;
      state.suggestions =  action.payload;
    },
  },
})

store.reducerManager.add(MODEL_NAME, slice.reducer);

export default slice.reducer
export const { setParams } = slice.actions