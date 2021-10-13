import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { store } from 'app/state/store'
import * as Q from './queries'; 
import { fetch }  from 'lib/graphql'; 

const MODEL_NAME = 'stories_remakes';

const initialState = {
  params: {
    page: null,
    entity: null,
  },
  data: null,
  loading: true,
  error: null,
}

export const fetchData = createAsyncThunk(
  'stories/fetchData',
  async ( params, thunkAPI ) => {
    thunkAPI.dispatch(setParams( params ))
    var resp = await fetch(Q.GET_DATA, { page: params.page })
    resp.data = resp.data.storiesRemakes;
    return resp;
  }
)

const slice = createSlice({
  name: MODEL_NAME,
  initialState,
  reducers: {
    setParams : (state, action) => {
      state.params = action.payload
    }
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      const { loading, error, data } = action.payload;
      state.data = data;
      state.loading = loading;
      state.error = error;
    },
  },
})

store.reducerManager.add(MODEL_NAME, slice.reducer);

export default slice.reducer
export const { setData, setParams } = slice.actions