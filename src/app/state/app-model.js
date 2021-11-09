import { createSlice } from '@reduxjs/toolkit'
import { initializeWebSockets } from 'app/config/providers/web-sockets';
import config from 'app/config'
import { getTheme } from 'app/config/theme'
import nav from 'data/app/navigation-drawer';

const initialState = {
  pageTitle: config.APP.PAGE_TITLE,
  title: config.APP.TITLE,
  breadcrumbs: null,
  users: 0,
  theme: {
    mode: "light",
  },
  nav: nav,
  loading: false,
  drawer: { 
    open: false,
  },
}

export const AppModel = createSlice({
  name: 'app',
  initialState,
  reducers: {
    initializeApp: (state, action) => {
      const [ webSocket ] = initializeWebSockets( action.payload.dispatch );
    },
    setPage: (state, action) => {
      const { title, breadcrumbs, pageTitle } = action.payload
      state.breadcrumbs = (breadcrumbs) ? breadcrumbs : state.breadcrumbs;
      state.title = (title && title != "") ? title : initialState.title;
      state.pageTitle = (pageTitle && pageTitle != "") ? pageTitle : initialState.pageTitle;
    },
    toggleDrawer: (state, action) => {
      state.drawer.open = !state.drawer.open
    },
    toggleThemeMode: (state, action) => {
      state.theme.mode = ( state.theme.mode === "light" ) ? "dark" : "light";
    },
    updateUsers: (state, action) => {
      state.users = action.payload.users;
    },
  },
})

export const { setPage, toggleThemeMode, toggleDrawer, initializeApp, updateUsers } = AppModel.actions
export default AppModel.reducer