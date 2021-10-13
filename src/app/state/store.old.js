import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import AppReducer from './app-slice'
import { api as APILocal } from 'app/services/api-local'

export const store = configureStore({
  reducer: {
    [APILocal.reducerPath]: APILocal.reducer,
    app: AppReducer
  },
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(APILocal.middleware),
})

setupListeners(store.dispatch)
