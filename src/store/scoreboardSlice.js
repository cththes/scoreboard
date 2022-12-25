import { createSlice } from "@reduxjs/toolkit"

const scoreboardSlice = createSlice({
   name: "scoreboard",
   initialState: {
      leftCount: 0,
      rightCount: 0,
      editMode: false,
      topTitle: "",
      bottomTitle: "BUGACHIEV - SPORTS",
      leftTeamTitle: "",
      leftPlayerTitle: "",
      rightTeamTitle: "",
      rightPlayerTitle: ""
   },
   reducers: {
      setCount(state, action) {
         console.log('setCount.action.payload', action.payload)
         switch (action.payload){
            case 'KeyQ':
               state.leftCount = state.leftCount + 1;
               break;
            case 'KeyA':
               if (state.leftCount > 0) state.leftCount = state.leftCount - 1;
               break;
            case 'KeyE':
               state.rightCount = state.rightCount + 1;
               break;
            case 'KeyD':
               if (state.rightCount > 0) state.rightCount = state.rightCount - 1;
               break;
            case 'KeyR':
                  state.leftCount = 0,
                  state.rightCount = 0
                  break;
            default:
               return 0
         }
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
export const {setCount, setEditMode, setTitle} = scoreboardSlice.actions