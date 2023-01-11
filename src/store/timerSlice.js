import { createSlice } from "@reduxjs/toolkit"

const timerSlice = createSlice({
   name: "timer",
   initialState: {
      firstTime: [0, 0],
      secondTime: [0, 0],
      penaltyTime: [0, 0],
      resetTime: [[0],[0]],
      isCounting: false,
      isTimeout: false,
      isPenalty: false,
      isRecordScore: false,
   },
   reducers: {
      setIsCounting(state) {
         if (!state.isTimeout & (state.firstTime[0] + state.firstTime[1] !== 0)) state.isCounting = !state.isCounting
         if (state.isTimeout & (state.secondTime[0] + state.secondTime[1] !== 0)) state.isCounting = !state.isCounting
      },
      setPenalty(state){
         state.isPenalty = !state.isPenalty
      },
      handleReset(state) {
         state.isCounting = false
         state.firstTime = state.resetTime[0]
         state.secondTime = state.resetTime[1]
      },
      timeRuns(state) {
         if (state.isCounting) {
            if (!state.isTimeout)
            {
               if (state.firstTime[0] === 0 & state.firstTime[1] === 0) {
                  state.isTimeout = true
                  state.isRecordScore = true
               }
               if (state.firstTime[1] > 0) state.firstTime[1] -= 1
                  else {
                     if (state.firstTime[0] > 0){
                        state.firstTime[1] = 59
                        state.firstTime[0] -= 1
                     }
                  }; 
            } 
            else if (state.isTimeout)
            {
               if (state.secondTime[0] === 0 & state.secondTime[1] === 0) {
                  state.isCounting = false;
                  state.isTimeout = false
               }
               if (state.secondTime[1] > 0) state.secondTime[1] -= 1
                  else {
                     if (state.secondTime[0] > 0){
                        state.secondTime[1] = 59
                        state.secondTime[0] -= 1
                    }
                  }
            }
            if (state.isPenalty) {
               if (state.penaltyTime[0] === 0 & state.penaltyTime[1] === 0) state.isPenalty = false
               if (state.penaltyTime[1] > 0) state.penaltyTime[1] -= 1
                  else {
                     if (state.penaltyTime[0] > 0){
                        state.penaltyTime[1] = 59
                        state.penaltyTime[0] -= 1
                     }
                  }; 
            }
         }
      },
      setTime(state, action) {
         const count = action.payload.count
         switch (action.payload.id){
            case "main_minutes":{
               count < 99 ? state.firstTime[0] = count : state.firstTime[0] = 99
               state.resetTime[0][0]= state.firstTime[0]
               break;
            }
            case "main_seconds":{
               count < 59 ? state.firstTime[1] = count : state.firstTime[1] = 59
               state.resetTime[0][1] = state.firstTime[1]
               break;
            }
            case "timeout_minutes":{
               count < 99 ? state.secondTime[0] = count : state.secondTime[0] = 99
               state.resetTime[1][0] = state.secondTime[0]
               break;
            }
            case "timeout_seconds":{
               count < 59 ? state.secondTime[1] = count : state.secondTime[1] = 59
               state.resetTime[1][1] = state.secondTime[1]
               break;
            }
            case "penalty_minutes":{
               count < 99 ? state.penaltyTime[0] = count : state.penaltyTime[0] = 99
               break;
            }
            case "penalty_seconds":{
               count < 99 ? state.penaltyTime[1] = count : state.penaltyTime[1] = 59
               break;
            }
            default: return 0
         }
      },
      clearIsRecordScore(state){
         state.isRecordScore = false
      }
   }
})

export default timerSlice.reducer
export const {setIsCounting, handleReset, timeRuns, setTime, setPenalty, clearIsRecordScore} = timerSlice.actions