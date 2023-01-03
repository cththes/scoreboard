import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Timer from '../Timer/Timer';
import styles from "./Scoreboard.module.scss"
import { setCount, setEditMode, setTitle } from '../../store/scoreboardSlice';
import Score from './Score/Score';

const Scoreboard = () => {
   const state = useSelector(state => state.scoreboard)
   const dispatch = useDispatch();

   const handleKeyDown = (event) => {
      !state.editMode && dispatch(setCount(event.nativeEvent.code))
   }

   const onTitleChange = (id, value) => {
      dispatch(setTitle({ id, value }))
   }

   return (
      <div className={styles.scoreBoard} onKeyDown={(event) => handleKeyDown(event)} tabIndex={0}>
         <Score count={state.leftCount}
               teamTitle={state.leftTeamTitle} 
               playerTitle={state.leftPlayerTitle} 
               onTitleChange={onTitleChange} 
               setCount={setCount} 
               editMode={state.editMode}
               team="left_team"/>
         <div>
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
                     <div>

                     </div>
                  </div>
               }
               <div>
                  <h1
                     className={styles.titleH1}
                     onDoubleClick={() => dispatch(setEditMode())}
                  >{state.topTitle}
                  </h1>
               </div>
               <div>
                  <h1
                     className={styles.titleH1}
                  >{state.bottomTitle}
                  </h1>
               </div>
            </div>
         </div>

         <Score count={state.rightCount}
               teamTitle={state.rightTeamTitle} 
               playerTitle={state.rightPlayerTitle} 
               onTitleChange={onTitleChange} 
               setCount={setCount} 
               editMode={state.editMode} 
               team="right_team"/>
      </div>
   )
}

export default Scoreboard