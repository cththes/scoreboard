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
         console.log('setTitle.action, ', action)
         switch(action.payload.id) {
            case "top_footer": {
               state.topTitle = action.payload.value;
               break;
            }
            case "bottom_footer": {
               state.bottomTitle = action.payload.value;
               break;
            }
            case "left_team": {
               state.leftTeamTitle = action.payload.value;
               break;
            }
            case "left_player": {
               state.leftPlayerTitle = action.payload.value;
               break;
            }
            case "right_team": {
               state.rightTeamTitle = action.payload.value;
               break;
            }
            case "right_player": {
               state.rightPlayerTitle = action.payload.value;
               break;
            }
            default: return 0
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