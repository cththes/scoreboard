import React, { useEffect } from 'react'
import styles from './Timer.module.css'
import { getPadTime } from '../../helpers/getPadTime'
import TimeInputs from '../TimeInput/TimeInputs'
import { useDispatch, useSelector } from 'react-redux';
import { setIsCounting, handleReset, timeChange } from '../../store/timerSlice'

const Timer = ({ setEditMode, editMode }) => {
  const state = useSelector(state => state.timer)
  const dispatch = useDispatch();

  const onEditTimer = () => {
    setEditMode()
    setIsCounting()
  }

  useEffect(() => {
    const interval = setInterval(() => dispatch(timeChange()), 1000)
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
        {editMode && <TimeInputs />}
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