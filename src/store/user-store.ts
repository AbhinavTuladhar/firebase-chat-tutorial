import { doc, DocumentData, getDoc } from 'firebase/firestore'

import { db } from '@/firebase'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { RootState } from './index'

export interface UserType {
  currentUser: DocumentData | null
  isLoading: boolean
}

const initialState: UserType = {
  currentUser: null,
  isLoading: true,
}

export const fetchUserInfo = createAsyncThunk(
  'user/fetchUserInfo',
  async (uid: string | undefined) => {
    if (!uid) return null

    const docRef = doc(db, 'users', uid)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return docSnap.data()
    } else {
      return null
    }
  },
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUserInfo.pending, state => {
      state.isLoading = true
    })
    builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
      state.currentUser = action.payload
      state.isLoading = false
    })
  },
})

export default userSlice.reducer

export const UserSelector = (state: RootState) => state.users
