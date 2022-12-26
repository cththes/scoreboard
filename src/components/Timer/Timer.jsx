import React, { useEffect } from 'react'
import styles from './Timer.module.css'
import TimeInput from '../TimeInput/TimeInput'
import { useDispatch, useSelector } from 'react-redux';
import { setIsCounting, handleReset, timeRuns} from '../../store/timerSlice'

const Timer = ({ setEditMode, editMode }) => {
  const state = useSelector(state => state.timer)
  const dispatch = useDispatch();

  const onEditMode = () => {
    setEditMode()
    setIsCounting()
  }

  useEffect(() => {
    const interval = setInterval(() => dispatch(timeRuns()), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className={styles.main} >
      <div className={styles.timer} onDoubleClick={() => dispatch(setEditMode())}>
        {!state.isTimeout ?
          <div>
            <span>{state.firstTime[0]}</span>
            <span>:</span>
            <span>{state.firstTime[1]}</span>
          </div>
          : 
          <div>
            <span>{state.secondTime[0]}</span>
            <span>:</span>
            <span>{state.secondTime[1]}</span>
          </div>
        }
          {editMode && 
          <form className={styles.inputs}>
            <TimeInput id="main_minutes" placeholder="min"/>
            <TimeInput id="main_seconds" placeholder="sec"/>
            <TimeInput id="timeout_minutes" placeholder="min"/>
            <TimeInput id="timeout_seconds" placeholder="sec"/>
            <TimeInput id="penalty_minutes" placeholder="min"/>
            <TimeInput id="penalty_seconds" placeholder="sec"/>
          </form>}
      </div>

      <div className={styles.buttons}>
        {state.isCounting ? (
          <button onClick={() => dispatch(setIsCounting())}>Stop</button>
        ) : (
          <button onClick={() => dispatch(setIsCounting())}>Start</button>
        )}
        <button onClick={() => dispatch(handleReset())}>Reset</button>
      </div>
    </div>
  )
}

export default Timer