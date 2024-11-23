import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface ThemeState {
  themeColor: 'light' | 'dark',
}

// Define the initial state using that type
const initialState: ThemeState = {
  themeColor: 'light',
}

export const ThemeSlice = createSlice({
  name: 'theme',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleThemeColor: (state) => {
      state.themeColor = state.themeColor === 'light' ? 'dark' : 'light';
    },
  },
})

export const { toggleThemeColor } = ThemeSlice.actions

export default ThemeSlice.reducer