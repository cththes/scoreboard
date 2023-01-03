import React from 'react'
import styles from './TimeInput.module.css'
import {useDispatch} from 'react-redux';
import { setTime } from '../../store/timerSlice';


const TimeInput = ({onEditMode, id, placeholder, value}) => {

   const dispatch = useDispatch();

   const onEditTime = (id, count) => {
      dispatch(setTime({ id, count }))
   }

   const isNumber = (number) => {
      for (let i = 0; i < number.length; i++){
         if (number.charCodeAt(i) < 48 || number.charCodeAt(i) > 57) number[i] = 0
      }
      return +number
   }

   return(
          <input 
            className={styles.timerInput} 
            autoFocus={true}
            value={value}
            onChange={(event) => onEditTime(id, isNumber(event.target.value))}
            placeholder={placeholder}
            onBlur={onEditMode}
            maxLength="2"
            onKeyPress={(e) => e.key === 'Enter' && setEditMode(false)}
         ></input>
   )
}

export default TimeInput