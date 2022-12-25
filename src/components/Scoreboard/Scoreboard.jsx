import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Timer from '../Timer/Timer';
import styles from "./Scoreboard.module.scss"
import { setCount, setEditMode, setTitle } from '../../store/scoreboardSlice';

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
         <div className={styles.leftCount} onDoubleClick={() => dispatch(setEditMode())}>
            {
               state.leftCount < 10 ?
                  <div>
                     <div className={styles.countNumber}>
                        {state.leftCount}
                     </div>
                     <div className={styles.countTitles}>
                        <h3>{state.leftTeamTitle}</h3>
                        <h3>{state.leftPlayerTitle}</h3>
                     </div>
                  </div>
                  :
                  <div>
                     <div className={styles.countNumberSmall}>
                        {state.leftCount}
                     </div>
                     <div className={styles.countTitles}>
                        <h3>{state.leftTeamTitle}</h3>
                        <h3>{state.leftPlayerTitle}</h3>
                     </div>
                  </div>
            }



            {state.editMode && <div className={styles.countInputs} onDoubleClick={() => dispatch(setEditMode())}>
               <input
                  placeholder="название команды"
                  onChange={(event) => onTitleChange("left_team", event.target.value)}
                  value={state.leftTeamTitle}
                  ></input>

               <input 
                  placeholder="имя игрока"
                  onChange={(event) => onTitleChange("left_player", event.target.value)}
                  value={state.leftPlayerTitle}
               ></input>

            </div>}
            <div className={styles.buttons}>
               <button onClick={() => dispatch(setCount("KeyQ"))}>+</button>
               <button onClick={() => dispatch(setCount("KeyA"))}>-</button>
               <div id="resetBtn" className={styles.resetBtn}>
                  <button onClick={() => dispatch(setCount("KeyR"))}>Reset</button>
               </div>
            </div>
         </div>

         <div>

            <Timer setEditMode={setEditMode} editMode={state.editMode} />

            <div className={styles.title} onDoubleClick={() => dispatch(setEditMode())}>
               {state.editMode &&
                  <div className={styles.titleInput}>
                     <div>
                        <input
                           autoFocus={true}
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

         <div className={styles.rightCount}>
            {
               state.rightCount < 10 ?
                  <div className={styles.countNumber}>{state.rightCount}</div>
                  : <div className={styles.countNumberSmall}>{state.rightCount}</div>
            }

            {state.editMode &&
               <div className={styles.countInputs} onDoubleClick={() => dispatch(setEditMode())}>
                  <input
                     placeholder="название команды"
                     value={state.rightTeamTitle}
                     onChange={(event) => onTitleChange("right_team", event.target.value)}>
                  </input>

                  <input
                     placeholder="имя игрока"
                     value={state.rightPlayerTitle}
                     onChange={(event) => onTitleChange("right_player", event.target.value)}>
                  </input>
               </div>}

            <div className={styles.buttons}>
               <button onClick={() => dispatch(setCount("KeyE"))}>+</button>
               <button onClick={() => dispatch(setCount("KeyD"))}>-</button>

               <div id="resetBtn" className={styles.resetBtn}>
                  <button onClick={() => dispatch(setCount("KeyR"))}>Reset</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Scoreboard