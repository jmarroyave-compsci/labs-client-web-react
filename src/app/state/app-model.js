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
  features: {
    snow : false,
  },
  theme: {
    snowMode: true,
    mode: "light",
    newVersion: true,
  },
  nav: nav,
  loading : {
      show: false,
      queue: [],
  },
  drawer: { 
    open: false,
  },
  messages : {
    show: false,
    message : "",
    duration: 5000,
  },
  bottomSheet : {
    title: null,
    children: null,
    show: false,
  },
  credentials : {
    loggedIn: false,
    user: {
      avatar : null,
      name: null,
    },
  },
}

function restoreState( initialState ){
  const restoreLocalStorage = ( key ) => (localStorage.getItem(key)) ? JSON.parse(localStorage.getItem(key)) : initialState[key]
  const restoreSessionStorage = ( key ) => (sessionStorage.getItem(key)) ? JSON.parse(sessionStorage.getItem(key)) : initialState[key]
  const state = {} 
  state.theme = { ...initialState.theme, ...restoreLocalStorage("theme") } 
  state.credentials = { ...initialState.credentials, ...restoreSessionStorage("credentials")}
  return {
    ...initialState,
    ...state,
  }
}

function saveState( st ){
  const saveLocalStorage = ( key ) => localStorage.setItem(key, JSON.stringify(st[key]))
  const saveSessionStorage = ( key ) => sessionStorage.setItem(key, JSON.stringify(st[key]))
  saveLocalStorage("theme")
  saveSessionStorage("credentials")
}


export const AppModel = createSlice({
  name: 'app',
  initialState,
  reducers: {
    initializeApp: (state, action) => {
      const [ webSocket ] = initializeWebSockets( action.payload.dispatch );
      state = restoreState(state);
      return state;
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
      saveState(state);
    },
    toggleSnowMode: (state, action) => {
      state.theme.snowMode = !state.theme.snowMode;
      saveState(state);
    },
    toggleNewVersion: (state, action) => {
      state.theme.newVersion = !state.theme.newVersion;
      saveState(state);
    },
    updateUsers: (state, action) => {
      state.users = action.payload.users;
    },
    setLoading: (state, action) => {
      const { status, sender }  = action.payload;
      if( status === true ) state.loading.queue.push(sender);
      else state.loading.queue = state.loading.queue.filter( f => f !== sender )
      state.loading.show = (state.loading.queue.length !== 0)

    },
    showMessage: (state, action) => {
      const { message }  = action.payload;
      state.messages.message = message;
      state.messages.show = (message && message !== "") ? true : false;
    },
    showBottomSheet: (state, action) => {
      const { children, title }  = action.payload;
      state.bottomSheet.show = (children != null);
      state.bottomSheet.children = children;
      state.bottomSheet.title = title;
    },
    logIn: (state, action) => {
      const { name, avatar }  = action.payload;
      state.credentials.loggedIn = true;
      state.credentials.user.name = name;
      state.credentials.user.avatar = avatar;
      saveState(state);
    },
    logOut: (state, action) => {
      state.credentials.loggedIn = false;
      state.credentials.user.name = null;
      state.credentials.user.avatar = null;
      saveState(state);
    },
  },
})

export const { setPage, toggleThemeMode, toggleSnowMode, toggleNewVersion, toggleDrawer, initializeApp, updateUsers, setLoading, showMessage, logIn, logOut, showBottomSheet } = AppModel.actions
export default AppModel.reducer