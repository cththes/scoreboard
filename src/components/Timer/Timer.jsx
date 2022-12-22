import React, { useState, useEffect } from 'react'
import styles from './Timer.module.css'
import { getPadTime } from '../../helpers/getPadTime'
import TimeInputs from '../TimeInput/TimeInputs'

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(3 * 60)
  const [isCounting, setIsCounting] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [timeReset, setTimeReset] = useState(timeLeft)
  const [isTimeout, setIsTimeout] = useState(false)

  const minutes = getPadTime(Math.floor(timeLeft / 60))
  const seconds = getPadTime(Math.floor(timeLeft - minutes * 60))

  const onEditTimer = () => {
    setEditMode(!editMode)
    setIsCounting(false)
  }

  const onTimeChange = () => {
    if (+minutesElement.current.value > 99) minutesElement.current.value = 99
    if (+secondsElement.current.value > 59) secondsElement.current.value = 59

    setTimeLeft(60 * +minutesElement.current.value + +secondsElement.current.value)
    setTimeReset(60 * +minutesElement.current.value + +secondsElement.current.value)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting && setTimeLeft((timeLeft) => (timeLeft >= 0 ? timeLeft -1 : 0))
    }, 1000)
    if (timeLeft === -1){
      isCounting && setTimeLeft(7)
      setIsTimeout(true)
    }
    if (isTimeout === true) {
      if (timeLeft === 0){
        setIsCounting(false)
      }
    }
    return () => {
      clearInterval(interval)
    }
  }, [timeLeft, isCounting])

  const handleStart = () => {
    if (timeLeft === 0) setTimeLeft(timeReset)
    editMode && setEditMode(false)
    setIsCounting(true)
  }

  const handleStop = () => {
    setIsCounting(false)
  }

  const handleReset = () => {
    setIsCounting(false)
    setTimeLeft(timeReset)
  }

  const handleKeyDown = (event) => {
    const key = event.nativeEvent.code;
    switch (key){
        case 'KeyR':
          if (!editMode) {
            handleReset()
          }
        // case 'KeyS':
        //   if (!editMode){
        //     isCounting ? handleStop() : handleStart()
        //   }
          break;
       default:
          return 0
    }
 }

  let minutesElement = React.createRef()
  let secondsElement = React.createRef()
  let minutesTimeoutElement = React.createRef()
  let secondsTimeoutElement = React.createRef()
  let minutesPenaltyElement = React.createRef()
  let secondsPenaltyElement = React.createRef()

  return(
    <div className={styles.main} onKeyDown={handleKeyDown}>
      <div className={styles.timer} onDoubleClick={onEditTimer}>
          <span>{minutes}</span>
          <span>:</span>
          <span>{seconds}</span>
        {editMode && 
            <TimeInputs  onTimeChange={onTimeChange}
                        secondsElement={secondsElement} 
                        minutesElement={minutesElement} 
                        minutesTimeoutElement={minutesTimeoutElement}
                        secondsTimeoutElement={secondsTimeoutElement}
                        minutesPenaltyElement={minutesPenaltyElement}
                        secondsPenaltyElement={secondsPenaltyElement}
                        setEditMode={setEditMode}
                        onEditTimer={onEditTimer}/>}
      </div>

      <div className={styles.buttons}>
        {isCounting ? (
            <button onClick={handleStop}>Stop</button>
          ) : (
            <button onClick={handleStart}>Start</button>
          )}
          <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default Timer