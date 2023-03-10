import { combineReducers, configureStore } from "@reduxjs/toolkit";
import scoreboardSlice from "./scoreboardSlice"
import timerSlice from "./timerSlice";

const rootReducer = combineReducers({
   scoreboard: scoreboardSlice,
   timer: timerSlice,
})

export const store = configureStore({
   reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch