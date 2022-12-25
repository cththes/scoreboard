import { combineReducers, configureStore } from "@reduxjs/toolkit";
import scoreboardSlice from "./scoreboardSlice"

const rootReducer = combineReducers({
   scoreboard: scoreboardSlice,
})

export const store = configureStore({
   reducer: rootReducer,
})