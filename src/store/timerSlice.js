import { createSlice } from "@reduxjs/toolkit"

const timerSlice = createSlice({
   name: "timer",
   initialState: {
      firstTime: [0, 5],
      secondTime: [0, 3],
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
      timeChange(state) {
         console.log('state.isTimeout', state.isTimeout)
         if (state.isCounting) {
            if (!state.isTimeout)
            {
               if (state.firstTime[0] === 0 & state.firstTime[1] === 0) state.isTimeout = true
               if (state.firstTime[1] > 0) state.firstTime[1] = state.firstTime[1] - 1
                  else state.firstTime[0] = state.firstTime[0] - 1;
               if (state.firstTime[1] === -1) state.firstTime[1] = 59;  
            } 
            else 
            {
               if (state.secondTime[0] === 0 & state.secondTime[1] === 1) state.isCounting = false
               if (state.secondTime[1] > 0) state.secondTime[1] = state.secondTime[1] - 1
                  else state.secondTime[0] = state.secondTime[0] - 1;
               if (state.secondTime[1] === -1) state.secondTime[1] = 59;  
            }
         }
      }
   }
})

export default timerSlice.reducer
export const {setIsCounting, handleReset, timeChange} = timerSlice.actions