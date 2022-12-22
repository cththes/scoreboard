import React, { useState } from 'react';
import Timer from '../Timer/Timer';
import styles from "./Scoreboard.module.scss"

const Scoreboard = () => {
   const [leftScore, setLeftScore] = useState(0);
   const [rightScore, setRightScore] = useState(0);
   const [editMode, setEditMode] = useState(false)
   const [topTitle, setTopTitle] = useState("")
   const [bottomTitle, setBottomTitle] = useState("BUGACHIEV - SPORTS")
   

   const incrementLeftScore = () => {
      setLeftScore(leftScore + 1)
   }

   const decrementLeftScore = () => {
      leftScore > 0 && setLeftScore(leftScore - 1)
   }

   const incrementRightScore = () => {
      setRightScore(rightScore + 1)
   }

   const decrementRightScore = () => {
      rightScore > 0 && setRightScore(rightScore - 1)
   }

   const onEditTitle = () => {
      setEditMode(!editMode) 
   }

   const handleKeyDown = (event) => {
      const key = event.nativeEvent.code;
      switch (key){
         case 'KeyQ':
            !editMode && incrementLeftScore()
            break;
         case 'KeyA':
            !editMode && decrementLeftScore()
            break;
         case 'KeyE':
            !editMode && incrementRightScore()
            break;
         case 'KeyD':
            !editMode && decrementRightScore()
            break;
         default:
            return 0
      }
   }

   const onTitleChange = (e) => {
      setTopTitle(topElement.current.value)
      setBottomTitle(bottomElement.current.value)
      if (topElement.current.value.lenght === 0 ) topElement.current.value.lenght = ""
      if (bottomElement.current.value.lenght === 0 ) bottomElement.current.value = ""
   }

   const onReset = () => {
      setLeftScore(0)
      setRightScore(0)
   }

   let topElement = React.createRef()
   let bottomElement = React.createRef()

   return (
      <div className={styles.scoreBoard} onKeyDown={handleKeyDown} tabIndex={0}>
         <div className={styles.leftScore}>
         {
               leftScore < 10 ? <div className={styles.scoreNumber}>{leftScore}</div> 
               : <div className={styles.scoreNumberSmall}>{leftScore}</div> 
            } 
            <div className={styles.buttons}>
               <button onClick={incrementLeftScore}>+</button>
               <button onClick={decrementLeftScore}>-</button>
               <div id="resetBtn" className={styles.resetBtn}>
                  <button onClick={onReset}>Reset</button>
               </div>
            </div>
         </div>

         <div>
         <Timer/>
         <div className={styles.title} onDoubleClick={onEditTitle}>
            {editMode && 
               <div className={styles.titleInput}>
                  <div>
                     <input 
                     autoFocus={true}
                     onblur={onEditTitle}
                     onDoubleClick={onEditTitle}
                     onChange={onTitleChange}
                     ref={topElement}
                     value={topTitle}
                     maxLength ="20"
                     onKeyPress={(e) => {
                        e.key === 'Enter' && setEditMode(false)
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
               onDoubleClick={onEditTitle}
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
         
         <div className={styles.rightScore}>
            {
               rightScore < 10 ? <div className={styles.scoreNumber}>{rightScore}</div> 
               : <div className={styles.scoreNumberSmall}>{rightScore}</div> 
            }   
            <div className={styles.buttons}> 
               <button onClick={incrementRightScore}>+</button>
               <button onClick={decrementRightScore}>-</button>

               <div id="resetBtn" className={styles.resetBtn}>
                  <button onClick={onReset}>Reset</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Scoreboard