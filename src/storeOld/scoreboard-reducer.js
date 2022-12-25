// const SET_LEFT_SCORE = "scoreboard/SET_LEFT_SCORE";
// const SET_RIGHT_SCORE = "scoreboard/SET_RIGHT_SCORE";
// const SWITCH_EDIT_MODE = "scoreboard/SWITCH_EDIT_MODE"
// const SET_TITLE = "scoreboard/SET_TITLE"

// let initialState = {
//    leftScore: 0,
//    rightScore: 0,
//    editMode: false,
//    topTitle: "",
//    bottomTitle: "BUGACHIEV - SPORTS",
//    leftTeamTitle: "123",
//    leftPlayerTitle: "456",
//    rightTeamTitle: "",
//    rightPlayerTitle: ""
//  };

// //  const [leftScore, setLeftScore] = useState(0);
// //  const [rightScore, setRightScore] = useState(0);
// //  const [editMode, setEditMode] = useState(false)
// //  const [topTitle, setTopTitle] = useState("")
// //  const [bottomTitle, setBottomTitle] = useState("BUGACHIEV - SPORTS")
// //  const [leftTeamTitle, setLeftTeamTitle] = useState("123")
// //  const [leftPlayerTitle, setLeftPlayerTitle] = useState("456")
// //  const [rightTeamTitle, setRightTeamTitle] = useState("")
// //  const [rightPlayerTitle, setRightPlayerTitle] = useState("")

// const scoreboardReducer = (state = initialState, action) => {
//    switch (action.type) {
//      case SET_LEFT_SCORE: {
//          return {
//             ...state,
//             isDark: !state.isDark,
//        };
//      }
//      case SWITCH_EDIT_MODE: {
//          return {
//             ...state,
//             editMode: !state.editMode,
//          }
//      }
//      case SET_TITLE: {
//          return {
//             ...state,
//             title: action.title
//          }
//      }
 
//      default:
//        return state;
//    }
//  };

//  export const setLeftScore = (action) => ({
//    type: SET_LEFT_SCORE,
//    action: action
//  });

//  export const setRightScore = (action) => ({
//    type: SET_RIGHT_SCORE,
//    action: action
//  });

//  export const switchEditMode = () => ({
//    type: SWITCH_EDIT_MODE
//  })

//  export const setTitle = (title) => ({
//    type: SET_TITLE,
//    title: title,
//  })

//  export default scoreboardReducer;