import React from 'react'
import styles from './Score.module.scss'
import { useAppDispatch } from '../../../hooks';
import { setEditMode, setCount } from '../../../store/scoreboardSlice';

interface ScoreProps {
   count: any,
   teamTitle: string,
   playerTitle:string,
   onTitleChange: any,
   editMode: boolean,
   team: string,
   player: string,
}

const Score: React.FC<ScoreProps> = ({count, teamTitle, playerTitle, onTitleChange, editMode, team, player}) => {

   const dispatch = useAppDispatch();

   const handleKeyDown = (event: any) => {
      !editMode && dispatch(setCount(event.nativeEvent.code))
   }

   const onPlusClick = () => {
      team === "left_team" ? dispatch(setCount("KeyQ")) : dispatch(setCount("KeyE"))}

   const onMinusClick = () => {
      team === "left_team" ? dispatch(setCount("KeyA")) : dispatch(setCount("KeyD"))
   }

   return(
      <div onKeyDown={(event) => handleKeyDown(event)} tabIndex={0}>
         <div className={team === "left_team" ? styles.leftCount : styles.rightCount}>
            {
               count < 10 ?
                  <div>
                     <div className={styles.countNumber}>
                        {count}
                     </div>
                     <div className={styles.teamTitles} onDoubleClick={() => dispatch(setEditMode())}>
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