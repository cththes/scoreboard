import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Timer from '../Timer/Timer';
import styles from "./Scoreboard.module.scss"
import { decrementLeft, decrementRight, incrementLeft, incrementRight, resetCount, setEditMode,
         setTitle} from '../../store/scoreboardSlice';

const Scoreboard = () => {
   const leftCount = useSelector(state => state.scoreboard.leftCount)
   const rightCount = useSelector(state => state.scoreboard.rightCount)
   const editMode = useSelector(state => state.scoreboard.editMode)
   const topTitle = useSelector(state => state.scoreboard.topTitle)
   const bottomTitle = useSelector(state => state.scoreboard.bottomTitle)
   const leftTeamTitle = useSelector(state => state.scoreboard.leftTeamTitle)
   const leftPlayerTitle = useSelector(state => state.scoreboard.leftPlayerTitle)
   const rightTeamTitle = useSelector(state => state.scoreboard.rightTeamTitle)
   const rightPlayerTitle = useSelector(state => state.scoreboard.rightPlayerTitle)

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
      dispatch(setTitle(id, value))
      //setBottomTitle(bottomElement.current.value)
      if (topElement.current.value.lenght === 0 ) topElement.current.value = ""
      if (bottomElement.current.value.lenght === 0 ) bottomElement.current.value = ""
   }

   let topElement = React.createRef()
   let bottomElement = React.createRef()

   return (
      <div className={styles.scoreBoard} /*onKeyDown={() => handleKeyDown()}*/ tabIndex={0}>
         <div className={styles.leftCount} onDoubleClick={() => dispatch(setEditMode())}>
         {
               leftCount < 10 ?
               <div>
                  <div className={styles.countNumber}>
                     {leftCount}
                  </div> 
                  <div className={styles.countTitles}>
                     <h3>{leftTeamTitle}</h3>
                     <h3>{leftPlayerTitle}</h3>
                  </div>
               </div>
               :
               <div>
                  <div className={styles.countNumberSmall}>
                     {leftCount}
                  </div> 
                  <div className={styles.countTitles}>
                     <h3>{leftTeamTitle}</h3>
                     <h3>{leftPlayerTitle}</h3>
                  </div>
               </div>
            } 



            {editMode && <div className={styles.countInputs} onDoubleClick={() => dispatch(setEditMode())}>
               <input placeholder="название команды"></input>
               <input placeholder="имя игрока"></input>
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

         <Timer/>

         <div className={styles.title} onDoubleClick={() => dispatch(setEditMode())}>
            {editMode && 
               <div className={styles.titleInput}>
                  <div>
                     <input 
                     autoFocus={true}
                     onBlur={() => dispatch(setEditMode())}
                     onDoubleClick={() => dispatch(setEditMode())}
                     onChange={() => onTitleChange("top_footer", "123")}
                     ref={topElement}
                     value={topTitle}
                     maxLength ="20"
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
               >{topTitle}
               </h1>
            </div>
            <div>
               <h1 
               className={styles.titleH1}
               >{bottomTitle}
               </h1>
            </div>
         </div>
      </div>
         
         <div className={styles.rightCount}>
            {
               rightCount < 10 ? <div className={styles.countNumber}>{rightCount}</div> 
               : <div className={styles.countNumberSmall}>{rightCount}</div> 
            }   

            {editMode && <div className={styles.countInputs} onDoubleClick={() => dispatch(setEditMode())}>
               <input placeholder="название команды"></input>
               <input placeholder="имя игрока"></input>
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