import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pageTitle: "JMARROYAVE",
  title: "JMARROYAVE",
  breadcrumbs: null,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPage: (state, action) => {
      const { title, breadcrumbs } = action.payload
      state.breadcrumbs = (breadcrumbs) ? breadcrumbs : state.breadcrumbs;
      state.title = (title && title != "") ? title : state.title;
      //console.log("SETTING PAGE", action.payload)
    },
  },
})

export default appSlice.reducer