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
      localStorage.setItem('sessionWins', state.sessionsWin);
    },
    resetSessionsWin(state) {
      state.sessionsWin = 0;
      localStorage.setItem('sessionWins', 0);
    },
  },
});

export const getSessionWins = state => state.sessionsWin.sessionsWin;

export const { sessionsWinCount, resetSessionsWin } = sessionsWins.actions;
export default sessionsWins.reducer;
