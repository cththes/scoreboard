import React, { useEffect } from 'react'
import styles from './Timer.module.css'
import TimeInput from './TimeInput/TimeInput'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setIsCounting, handleReset, timeRuns, setPenalty, clearIsRecordScore} from '../../store/timerSlice'
import TimeViewer from './TimeViewer/TimeViewer';
import { recordScore } from '../../store/scoreboardSlice';
import useSound from 'use-sound';
import gong from "../../assets/gong.mp3"

interface TimerProps {
  setEditMode: any,
  editMode: boolean
}

const Timer:React.FC<TimerProps> = ({ setEditMode, editMode }) => {

  const state = useAppSelector(state => state.timer)
  const dispatch = useAppDispatch();
  const [play] = useSound(gong)

  useEffect(() => {
    const interval = setInterval(() => dispatch(timeRuns()), 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  if (state.isRecordScore) {
    dispatch(recordScore())
    dispatch(clearIsRecordScore())
  }

  const onStartClick = () => {
    dispatch(setIsCounting())
    play()
  }

  const onPenaltyClick = () => {
    if ((state.firstTime[0] === 0) && (state.firstTime[1] === 0)) return 
    else dispatch(setPenalty())
  }

  return (
    <div className={styles.main}>
      <div className={styles.penaltyTimer}>
        {state.isPenalty && <TimeViewer isTimeout={state.isTimeout} minutes={state.penaltyTime[0]} seconds={state.penaltyTime[1]}/>}
      </div>

      <div className={styles.timer} onDoubleClick={() => dispatch(setEditMode())}>
        {!state.isTimeout ?
        <TimeViewer minutes={state.firstTime[0]} seconds={state.firstTime[1]} isTimeout={state.isTimeout}/> :
        <TimeViewer minutes={state.secondTime[0]} seconds={state.secondTime[1]} isTimeout={state.isTimeout}/>
      }</div>
      
      <div className={styles.inputs}>
      {editMode && 
        <form>
          <TimeInput value={state.firstTime[0]} id="main_minutes" placeholder="min"/>
          <TimeInput value={state.firstTime[1]} id="main_seconds" placeholder="sec"/>
          :
          <TimeInput value={state.secondTime[0]} id="timeout_minutes" placeholder="min"/>
          <TimeInput value={state.secondTime[1]} id="timeout_seconds" placeholder="sec"/>
          :
          <TimeInput value={state.penaltyTime[0]} id="penalty_minutes" placeholder="min"/>
          <TimeInput value={state.penaltyTime[1]} id="penalty_seconds" placeholder="sec"/>
        </form>}
      </div>

      <div className={styles.buttons}>
        {state.isCounting ? (
          <button onClick={() => dispatch(setIsCounting())}>Stop</button>
        ) : (
          <button onClick={onStartClick}>Start</button>
        )}
        <button onClick={() => dispatch(handleReset())}>Reset</button>
        <button onClick={onPenaltyClick}>Penalty</button>
      </div>
    </div>
  )
}

export default Timer