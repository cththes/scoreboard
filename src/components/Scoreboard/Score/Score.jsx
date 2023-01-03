import React from 'react'
import styles from './Score.module.scss'
import { useDispatch} from 'react-redux';
import { setEditMode, setCount } from '../../../store/scoreboardSlice';

const Score = ({count, teamTitle, playerTitle, onTitleChange, editMode, team, player}) => {

   const dispatch = useDispatch();

   const handleKeyDown = (event) => {
      !editMode && dispatch(setCount(event.nativeEvent.code))
   }

   const onPlusClick = () => {
      team === "left_team" ? dispatch(setCount("KeyQ")) : dispatch(setCount("KeyE"))}

   const onMinusClick = () => {
      team === "left_team" ? dispatch(setCount("KeyA")) : dispatch(setCount("KeyD"))
   }

   // let player
   // team === "left_team" ? player = "left_player" : player = "right_player"
   return(
      <div onKeyDown={(event) => handleKeyDown(event)} tabIndex={0}>
         <div className={team === "left_team" ? styles.leftCount : styles.rightCount} onDoubleClick={() => dispatch(setEditMode())}>
            {
               count < 10 ?
                  <div>
                     <div className={styles.countNumber}>
                        {count}
                     </div>
                     <div className={styles.teamTitles}>
                        <h2>{"Team: " + teamTitle}</h2>
                        <h2>{"Player: " + playerTitle}</h2>
                     </div>
                  </div>
                  :
                  <div>
                     <div className={styles.countNumberSmall}>
                        {count}
                     </div>
                     <div className={styles.teamTitles}>
                        <h2>{"Team: " + teamTitle}</h2>
                        <h2>{"Player: " + playerTitle}</h2>
                     </div>
                  </div>
            }



            {editMode && <div className={styles.titleInputs} onDoubleClick={() => dispatch(setEditMode())}>
               <input
                  placeholder="название команды"
                  onChange={(event) => onTitleChange(team, event.target.value)}
                  value={teamTitle}
                  ></input>

               <input 
                  placeholder="имя игрока"
                  onChange={(event) => onTitleChange(player, event.target.value)}
                  value={playerTitle}
               ></input>

            </div>}
            <div className={styles.buttons}>
               <button onClick={onPlusClick}>+</button>
               <button onClick={onMinusClick}>-</button>
               <div id="resetBtn" className={styles.resetBtn}>
                  <button onClick={() => dispatch(setCount("KeyR"))}>Reset</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Score