import React from 'react'
import { useAppDispatch } from '../../../hooks';
import { setTime } from '../../../store/timerSlice';
import { setEditMode } from '../../../store/scoreboardSlice';
import styles from './TimeInput.module.css'

interface TimeInputProps {
   id: string,
   value: any,
   placeholder: string
}

const TimeInput: React.FC<TimeInputProps> = ({id, value, placeholder}) => {

   const dispatch = useAppDispatch();

   const onEditTime = (id: string, count: any) => {
      console.log('id:', id)
      console.log('count:', count)
      dispatch(setTime({ id, count }))
   }

   const isNumber = (number: any) => {
      for (let i = 0; i < number.length; i++){
         if (number.charCodeAt(i) < 48 || number.charCodeAt(i) > 57) number[i] = 0
      }
      return +number
   }

   return(
          <input 
            onDoubleClick={() => dispatch(setEditMode())}
            className={styles.timerInput} 
            autoFocus={true}
            value={value}
            onChange={(event) => onEditTime(id, isNumber(event.target.value))}
            maxLength={2}
            placeholder={placeholder}
            onKeyPress={(e) => e.key === 'Enter' && setEditMode()}
         ></input>
   )
}

export default TimeInput