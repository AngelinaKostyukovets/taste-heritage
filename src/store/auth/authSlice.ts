import { createSlice } from '@reduxjs/toolkit'

interface AuthStateType {
  userFI: string | null
  email: string | null
  token: string | null
  id: string | null
}

const initialState: AuthStateType = {
  userFI: null,
  email: null,
  token: null,
  id: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.userFI = payload.userFI
      state.email = payload.email
      state.token = payload.token
      state.id = payload.id
    },
    removeUser(state) {
      state.userFI = null
      state.email = null
      state.token = null
      state.id = null
    },
  },
})

export const authActions = {
  ...authSlice.actions,
}

const authReducer = authSlice.reducer
export default authReducer
