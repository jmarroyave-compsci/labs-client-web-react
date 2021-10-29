import { createSlice } from '@reduxjs/toolkit'
import config from 'app/config/constants'

const initialState = {
  pageTitle: config.APP.PAGE_TITLE,
  title: config.APP.TITLE,
  breadcrumbs: null,
}

export const AppModel = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPage: (state, action) => {
      const { title, breadcrumbs, pageTitle } = action.payload
      state.breadcrumbs = (breadcrumbs) ? breadcrumbs : state.breadcrumbs;
      state.title = (title && title != "") ? title : initialState.title;
      state.pageTitle = (pageTitle && pageTitle != "") ? pageTitle : initialState.pageTitle;
    },
  },
})

export default AppModel.reducer