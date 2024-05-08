import { createSlice } from '@reduxjs/toolkit';

// Function to load initial state from localStorage or set default
const loadInitialState = () => {
  const storedBankroll = localStorage.getItem('bankroll');
  const storedTarget = localStorage.getItem('target');
  const storedDividedBankroll = localStorage.getItem('dividedBankroll');

  return {
    bankroll: storedBankroll ? parseFloat(storedBankroll) : 0,
    target: storedTarget ? parseFloat(storedTarget) : 0,
    dividedBankroll: storedDividedBankroll
      ? parseFloat(storedDividedBankroll)
      : 0,
  };
};

const initialState = loadInitialState();

const bankrollSlice = createSlice({
  name: 'bankroll',
  initialState,
  reducers: {
    updateBankroll(state, action) {
      state.bankroll = action.payload;
      localStorage.setItem('bankroll', action.payload);
    },

    updateTarget(state, action) {
      state.target = action.payload;
      localStorage.setItem('target', action.payload);
    },

    updateDividedBankroll(state, action) {
      state.dividedBankroll = action.payload;
      localStorage.setItem('dividedBankroll', action.payload);
    },
  },
});

export const getBankroll = state => state.bankroll.bankroll;
export const getTarget = state => state.bankroll.target;
export const getdividedBankroll = state => state.bankroll.dividedBankroll;

export const { updateBankroll, updateTarget, updateDividedBankroll } =
  bankrollSlice.actions;
export default bankrollSlice.reducer;
