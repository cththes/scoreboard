import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type ScoreDataType = Array<number>

type ScoreboardState = {
   leftCount: number;
   rightCount: number;
   editMode: boolean;
   topTitle: string;
   bottomTitle: string;
   leftTeamTitle: string;
   leftPlayerTitle: string;
   rightTeamTitle: string;
   rightPlayerTitle: string;
   scoreData: Array<ScoreDataType>;
}

const initialState: ScoreboardState = {
   leftCount: 0,
   rightCount: 0,
   editMode: false,
   topTitle: "",
   bottomTitle: "BUGACHIEV - SPORTS",
   leftTeamTitle: "",
   leftPlayerTitle: "",
   rightTeamTitle: "",
   rightPlayerTitle: "",
   scoreData: [[], []]
}

type SetTitlePayloadType = {
   id: string;
   value: any;
}

const scoreboardSlice = createSlice({
   name: "scoreboard",
   initialState,
   reducers: {
      setCount(state, action: PayloadAction<string>) {
         switch (action.payload) {
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
               return 
         }
      },
      setEditMode(state) {
         state.editMode = !state.editMode
      },
      setTitle(state, action: PayloadAction<SetTitlePayloadType>) {
         switch (action.payload.id) {
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
            default: return 
         }
      },
      recordScore(state) {
         state.scoreData[0].push(state.leftCount)
         state.scoreData[1].push(state.rightCount)
      }
   }
})

export default scoreboardSlice.reducer
export const { setCount, setEditMode, setTitle, recordScore } = scoreboardSlice.actions