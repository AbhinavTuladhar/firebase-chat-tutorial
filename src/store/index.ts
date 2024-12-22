import { configureStore } from '@reduxjs/toolkit'

import UserReducer from './user-store'

const store = configureStore({
  reducer: {
    users: UserReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
