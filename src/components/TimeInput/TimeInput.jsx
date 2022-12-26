import React from 'react'
import styles from './TimeInput.module.css'
import {useDispatch} from 'react-redux';
import { setTime } from '../../store/timerSlice';


const TimeInput = ({onEditMode, id, placeholder}) => {

   const dispatch = useDispatch();

   const onEditTime = (id, count) => {
      dispatch(setTime({ id, count }))
   }

   return(
         <input 
            className={styles.timerInput} 
            autoFocus={true}
            onChange={(event) => onEditTime(id, event.target.value)}
            placeholder={placeholder}
            onBlur={onEditMode}
            onKeyPress={(e) => e.key === 'Enter' && setEditMode(false)}
         ></input>
   )
}

export default TimeInput