import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface AuthState {
  isLoggedIn: boolean,
  jwt: string,
}

// Define the initial state using that type
const initialState: AuthState = {
  isLoggedIn: false,
  jwt: '',
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    signIn: (state) => {
      state.isLoggedIn = true
    },
    signOut: (state) => {
      state.isLoggedIn = false
    },
  },
})

export const { signIn, signOut } = authSlice.actions

export default authSlice.reducer