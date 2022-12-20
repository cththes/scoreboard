import React, { useState, useEffect } from 'react'
import styles from './TimeInputs.module.css'

const TimeInputs = ({onTimeChange, onEditTimer, minutesElement, secondsElement}) => {

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

         <input className={styles.timerInput} placeholder="min"></input>
         <input className={styles.timerInput} placeholder="sec"></input>
         <input className={styles.timerInput} placeholder="min"></input>
         <input className={styles.timerInput} placeholder="sec"></input>
      </div>
   )
}

export default TimeInputs