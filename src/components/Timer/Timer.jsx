import React, { useEffect } from 'react'
import styles from './Timer.module.css'
import TimeInput from '../TimeInput/TimeInput'
import { useDispatch, useSelector } from 'react-redux';
import { setIsCounting, handleReset, timeRuns, setPenalty} from '../../store/timerSlice'
import TimeViewer from '../TimeViewer/TimeViewer';

const Timer = ({ setEditMode, editMode }) => {

  const state = useSelector(state => state.timer)
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => dispatch(timeRuns()), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className={styles.main}>
      <div className={styles.penaltyTimer}>
        {state.isPenalty && <TimeViewer minutes={state.penaltyTime[0]} seconds={state.penaltyTime[1]}/>}
      </div>

      <div className={styles.timer} onDoubleClick={() => dispatch(setEditMode())}>
        {!state.isTimeout ?
        <TimeViewer minutes={state.firstTime[0]} seconds={state.firstTime[1]} /> :
        <TimeViewer minutes={state.secondTime[0]} seconds={state.secondTime[1]} />
      }</div>
      
      <div className={styles.inputs}>
      {editMode && 
        <form>
          <TimeInput value={state.firstTime[0]} id="main_minutes" placeholder="min"/>
          <TimeInput value={state.firstTime[1]} id="main_seconds" placeholder="sec"/>
          <TimeInput value={state.secondTime[0]} id="timeout_minutes" placeholder="min"/>
          <TimeInput value={state.secondTime[1]} id="timeout_seconds" placeholder="sec"/>
          <TimeInput value={state.penaltyTime[0]} id="penalty_minutes" placeholder="min"/>
          <TimeInput value={state.penaltyTime[1]} id="penalty_seconds" placeholder="sec"/>
        </form>}
      </div>

      <div className={styles.buttons}>
        {state.isCounting ? (
          <button onClick={() => dispatch(setIsCounting())}>Stop</button>
        ) : (
          <button onClick={() => dispatch(setIsCounting())}>Start</button>
        )}
        <button onClick={() => dispatch(handleReset())}>Reset</button>
        <button onClick={() => dispatch(setPenalty())}>Penalty</button>
      </div>
    </div>
  )
}

export default Timer