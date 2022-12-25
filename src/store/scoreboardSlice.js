import { createSlice } from "@reduxjs/toolkit"

const scoreboardSlice = createSlice({
   name: "scoreboard",
   initialState: {
      leftCount: 0,
      rightCount: 0,
      editMode: false,
      topTitle: "",
      bottomTitle: "BUGACHIEV - SPORTS",
      leftTeamTitle: "123",
      leftPlayerTitle: "456",
      rightTeamTitle: "",
      rightPlayerTitle: ""
   },
   reducers: {
      incrementLeft(state) {
         state.leftCount = state.leftCount + 1
      },
      decrementLeft(state) {
         if (state.leftCount > 0) state.leftCount = state.leftCount - 1
      },
      incrementRight(state) {
         state.rightCount = state.rightCount + 1
      },
      decrementRight(state) {
         if (state.rightCount > 0) state.rightCount = state.rightCount - 1
      },
      resetCount(state) {
         state.leftCount = 0,
         state.rightCount = 0
      },
      setEditMode(state) {
         state.editMode = !state.editMode
      },
      setTitle(state, action) {
         //console.log('setTitle.action, ', action)
         switch(action.payload.id) {
            case "top_footer": {
               state.topTitle = action.payload.value
            }
            case "bottom_footer": {
               state.bottomTitle = action.payload.value
            }
            case "left_team": {
               state.leftTeamTitle = action.payload.value
            }
            case "left_player": {
               state.leftPlayerTitle = action.payload.value
            }
            case "right_team": {
               state.rightTeamTitle = action.payload.value
            }
            case "right_player": {
               state.rightPlayerTitle = action.payload.value
            }
         }
      },
   }
})

export default scoreboardSlice.reducer
export const {
   incrementLeft, 
   decrementLeft, 
   incrementRight, 
   decrementRight,
   resetCount,
   setEditMode,
   setTitle,} = scoreboardSlice.actions