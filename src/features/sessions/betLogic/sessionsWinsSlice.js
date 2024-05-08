import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sessionsWin: 0,
};

const sessionsWins = createSlice({
  name: 'sessionsWin',
  initialState,
  reducers: {
    sessionsWinCount(state, action) {
      state.sessionsWin += 1;
    },
  },
});

export const getSessionWins = state => state.sessionsWin.sessionsWin;

export const { sessionsWinCount } = sessionsWins.actions;
export default sessionsWins.reducer;
