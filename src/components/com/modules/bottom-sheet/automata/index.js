import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { store } from 'app/state/store'
import Router from 'next/router'
import * as dataPerson from 'com/entities/person/data'; 
import * as dataMovie from 'com/entities/movie/data'; 
import * as dataTVShow from 'com/entities/tv-show/data'; 
import * as dataVideoGame from 'com/entities/video-game/data'; 
import * as dataPodcast from 'com/entities/podcast/data'; 
import * as dataMovieFestival from 'com/entities/movie-festival/data'; 
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

    params.qryName = "dashboard_click"
    //console.log(params)

    switch(params.type){
      case "person":
        return await dataPerson.fetchItems(params)      
      case "movie":
        return await dataMovie.fetchItems(params)      
      case "tvShow":
        return await dataTVShow.fetchItems(params)      
      case "videoGame":
        return await dataVideoGame.fetchItems(params)      
      case "movieFestival":
        return await dataMovieFestival.fetchItems(params)      
      case "podcast":
        return await dataPodcast.fetchItems(params)      
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