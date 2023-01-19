import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Timer from '../Timer/Timer';
import styles from "./Scoreboard.module.scss"
import { setEditMode, setTitle } from '../../store/scoreboardSlice';
import Score from './Score/Score';

function Scoreboard() {
   const state = useSelector(state => state.scoreboard)
   const dispatch = useDispatch();

   const onTitleChange = (id, value) => {
      dispatch(setTitle({ id, value }))
   }

   return (
      <div>
         <div className={styles.scoreBoard}>
            <Score count={state.leftCount}
               teamTitle={state.leftTeamTitle}
               playerTitle={state.leftPlayerTitle}
               onTitleChange={onTitleChange}
               editMode={state.editMode}
               team="left_team"
               player="left_player" />

            <Timer setEditMode={setEditMode} editMode={state.editMode} />

            <div className={styles.title} onDoubleClick={() => dispatch(setEditMode())}>
               {state.editMode &&
                  <div className={styles.titleInput}>
                     <div>
                        <input
                           onDoubleClick={() => dispatch(setEditMode())}
                           onChange={(event) => onTitleChange("top_footer", event.target.value)}
                           value={state.topTitle}
                           maxLength="20"
                           onKeyPress={(e) => {
                              e.key === 'Enter' && dispatch(setEditMode())
                           }}
                        ></input>
                     </div>
                  </div>
               }
               <div>
                  <h1 className={styles.titleH1}
                     onDoubleClick={() => dispatch(setEditMode())}
                  >{state.topTitle}
                  </h1>
               </div>
               <div>
                  <h1 className={styles.titleH1}
                  >{state.bottomTitle}
                  </h1>
               </div>
            </div>


            <Score count={state.rightCount}
               teamTitle={state.rightTeamTitle}
               playerTitle={state.rightPlayerTitle}
               onTitleChange={onTitleChange}
               editMode={state.editMode}
               team="right_team"
               player="right_player" />
         </div>

         <div className={styles.scoreData}>
            <div className={styles.scoreDataLeft}>
               <h2>{state.leftPlayerTitle !== "" && state.leftPlayerTitle}</h2>
               <h2 className={styles.scoreDataH2}>{state.scoreData[0].map(sd => <div>{sd + '.'}</div>)}</h2>
            </div>
            <div className={styles.scoreDataRight}>
               <h2>{state.rightPlayerTitle}</h2>
               <h2 className={styles.scoreDataH2}>{state.scoreData[1].map(sd => <div>{sd + '.'}</div>)}</h2></div>
         </div>
      </div>
   )
}

export default Scoreboard