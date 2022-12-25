import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Timer from '../Timer/Timer';
import styles from "./Scoreboard.module.scss"
import {
   decrementLeft, decrementRight, incrementLeft, incrementRight, resetCount, setEditMode,
   setTitle
} from '../../store/scoreboardSlice';

const Scoreboard = () => {
   const state = useSelector(state => state.scoreboard)
   const dispatch = useDispatch();

   // const handleKeyDown = (event) => {
   //    const key = event.nativeEvent.code;
   //    switch (key){
   //       case 'KeyQ':
   //          !editMode && dispatch(incrementLeft())
   //          break;
   //       case 'KeyA':
   //          !editMode && dispatch(decrementLeft())
   //          break;
   //       case 'KeyE':
   //          !editMode && dispatch(incrementRight())
   //          break;
   //       case 'KeyD':
   //          !editMode && dispatch(decrementRight())
   //          break;
   //       default:
   //          return 0
   //    }
   // }

   const onTitleChange = (id, value) => {
      //setTopTitle(topElement.current.value)
      //setBottomTitle(bottomElement.current.value)
      console.log('id: ', id, 'value: ', value)
      dispatch(setTitle({ id, value }))
      if (topElement.current.value.lenght === 0) topElement.current.value = ""
      if (bottomElement.current.value.lenght === 0) bottomElement.current.value = ""
   }

   let topElement = React.createRef()
   let bottomElement = React.createRef()

   return (
      <div className={styles.scoreBoard} /*onKeyDown={() => handleKeyDown()}*/ tabIndex={0}>
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
               <button onClick={() => dispatch(incrementLeft())}>+</button>
               <button onClick={() => dispatch(decrementLeft())}>-</button>
               <div id="resetBtn" className={styles.resetBtn}>
                  <button onClick={() => dispatch(resetCount())}>Reset</button>
               </div>
            </div>
         </div>

         <div>

            <Timer />

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
               <button onClick={() => dispatch(incrementRight())}>+</button>
               <button onClick={() => dispatch(decrementRight())}>-</button>

               <div id="resetBtn" className={styles.resetBtn}>
                  <button onClick={() => dispatch(resetCount())}>Reset</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Scoreboard