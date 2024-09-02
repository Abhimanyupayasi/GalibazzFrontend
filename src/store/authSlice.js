import { createSlice } from '@reduxjs/toolkit';

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('auth');
    if (serializedState === null) {
      return { user: null, token: null };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state", err);
    return { user: null, token: null };
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('auth', serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

const initialState = loadState();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      saveState(state);
    },
    setToken: (state, action) => {
      state.token = action.payload;
      saveState(state);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      saveState(state);
    },
  },
});

export const { setUser, setToken, logout } = authSlice.actions;

export default authSlice.reducer;
