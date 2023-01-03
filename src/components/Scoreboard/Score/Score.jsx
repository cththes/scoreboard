import React from 'react'
import styles from './Score.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setEditMode } from '../../../store/scoreboardSlice';

const Score = ({count, teamTitle, playerTitle, onTitleChange, editMode, team}) => {
   let player
   team === "left_team" ? player = "left_player" : player = "right_player"
   return(
      <div>
         <div className={team === "left_team" ? styles.leftCount : styles.rightCount} onDoubleClick={() => dispatch(setEditMode())}>
            {
               count < 10 ?
                  <div>
                     <div className={styles.countNumber}>
                        {count}
                     </div>
                     <div className={styles.countTitles}>
                        <h3>{teamTitle}</h3>
                        <h3>{playerTitle}</h3>
                     </div>
                  </div>
                  :
                  <div>
                     <div className={styles.countNumberSmall}>
                        {count}
                     </div>
                     <div className={styles.countTitles}>
                        <h3>{teamTitle}</h3>
                        <h3>{playerTitle}</h3>
                     </div>
                  </div>
            }



            {editMode && <div className={styles.countInputs} onDoubleClick={() => dispatch(setEditMode())}>
               <input
                  placeholder="название команды"
                  onChange={(event) => onTitleChange({team}, event.target.value)}
                  value={teamTitle}
                  ></input>

               <input 
                  placeholder="имя игрока"
                  onChange={(event) => onTitleChange({player}, event.target.value)}
                  value={playerTitle}
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
      </div>
   )
}

export default Score