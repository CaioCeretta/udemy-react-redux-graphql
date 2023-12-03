// import { USER_ACTION_TYPES } from './user.types';

import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  currentUser: null,
  test: [3, 1, 2]
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload
    }
  }
})

export const { setCurrentUser } = userSlice.actions

export const  userReducer  = userSlice.reducer