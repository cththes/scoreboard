import React from 'react'
import styles from './TimeInputs.module.css'

const TimeInputs = ({
   onTimeChange, 
   onEditTimer, 
   minutesElement, 
   secondsElement,
   minutesTimeoutElement,
   secondsTimeoutElement,
   minutesPenaltyElement,
   secondsPenaltyElement
}) => {

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

         <input className={styles.timerInput} 
            placeholder="min"
            ref={minutesTimeoutElement}
            onKeyPress={(e) => e.key === 'Enter' && setEditMode(false)}
            ></input>
         <input className={styles.timerInput}
            placeholder="sec"
            onChange={onTimeChange}
            onKeyPress={(e) => e.key === 'Enter' && setEditMode(false)}
            ref={secondsTimeoutElement}
            ></input>
            
         <input className={styles.timerInput}
            placeholder="min"
            onChange={onTimeChange}
            ref={minutesPenaltyElement}
            ></input>
         <input className={styles.timerInput}
            placeholder="sec"
            ref={secondsPenaltyElement}
            ></input>
      </div>
   )
}

export default TimeInputs