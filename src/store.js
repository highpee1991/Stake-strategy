import { configureStore } from '@reduxjs/toolkit';
import bankrollReducer from './features/bankroll/bankrollslice';
import sessionsWinsReducer from './features/sessions/betLogic/sessionsWinsSlice';

const store = configureStore({
  reducer: {
    bankroll: bankrollReducer,
    sessionsWin: sessionsWinsReducer,
  },
});

export default store;
