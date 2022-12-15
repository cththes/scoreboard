import React, { useState, useEffect } from 'react'
import styles from './TimeInput.module.css'

const onEditTimer = () => {
   setEditMode(!editMode)
   setIsCounting(false)
 }

const TimeInput = ({onTimeChange, minutesElement, secondsElement, onEditTimer}) => {
   return(
      <div className={styles.inputs}>
         <input 
         className={styles.timerInput} 
         autoFocus={true}
         placeholder="min"
         onblur={onEditTimer}
         onChange={onTimeChange}
         onKeyPress={(e) => e.key === 'Enter' && setEditMode(false)}
         ref={minutesElement}
         ></input>
         <input 
         className={styles.timerInput}
         placeholder="sec"
         onblur={onEditTimer}
         onChange={onTimeChange}
         onKeyPress={(e) => e.key === 'Enter' && setEditMode(false)}
         ref={secondsElement}   
         ></input>
      </div>
   )
}

export default TimeInput