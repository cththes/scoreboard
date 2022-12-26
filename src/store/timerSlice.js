import { createSlice } from "@reduxjs/toolkit"

const timerSlice = createSlice({
   name: "timer",
   initialState: {
      firstTime: [0, 0],
      secondTime: [0, 0],
      penaltyTime: [0, 0],
      isCounting: false,
      isTimeout: false,
      isPenalty: false,
   },
   reducers: {
      setIsCounting(state) {
         state.isCounting = !state.isCounting
      },
      handleReset(state) {
         state.isCounting = false
         state.firstTime = [0, 0]
         state.secondTime = [0, 0]
      },
      timeRuns(state) {
         if (state.isCounting) {
            if (!state.isTimeout)
            {
               if (state.firstTime[0] === 0 & state.firstTime[1] === 0) state.isTimeout = true
               if (state.firstTime[1] > 0) state.firstTime[1] -= 1
                  else {
                     state.firstTime[1] = 59
                     state.firstTime[0] -= 1
                  }; 
            } 
            else 
            {
               if (state.secondTime[0] === 0 & state.secondTime[1] === 1) state.isCounting = false
               if (state.secondTime[1] > 0) state.secondTime[1] -= 1
                  else {
                     state.secondTime[1] = 59
                     state.secondTime[0] -= 1
                  }
            }
         }
      },
      setTime(state, action) {
         const count = action.payload.count
         switch (action.payload.id){
            case "main_minutes":{
               count < 99 ? state.firstTime[0] = count : state.firstTime[0] = 99
               break;
            }
            case "main_seconds":{
               count < 59 ? state.firstTime[1] = count : state.firstTime[1] = 59
               break;
            }
            case "timeout_minutes":{
               count < 99 ? state.secondTime[0] = count : state.secondTime[0] = 99
               break;
            }
            case "timeout_seconds":{
               count < 59 ? state.secondTime[1] = count : state.secondTime[1] = 59
               break;
            }
            case "penalty_minutes":{
               count < 99 ? state.penaltyTime[0] = count : state.penaltyTime[0] = 99
               break;
            }
            case "penalty_seconds":{
               count < 99 ? state.penaltyTime[1] = count : state.penaltyTime[1] = 99
               break;
            }
            default: return 0
         }
      }
   }
})

export default timerSlice.reducer
export const {setIsCounting, handleReset, timeRuns, setTime} = timerSlice.actions