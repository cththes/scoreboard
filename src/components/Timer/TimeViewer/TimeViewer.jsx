import React from 'react'
import styles from "./TimeViewer.module.scss"

function TimeViewer({ minutes, seconds, isTimeout }) {

   const isTwoDigit = (number) => {
      if (number < 10) number = "0" + number
      return number
   }

   let h1Color
   isTimeout ? h1Color = styles.timeoutColor : h1Color = styles.mainColor 

   return (
      <h1 className={h1Color}>
         <span>{isTwoDigit(minutes)}</span>
         <span>:</span>
         <span>{isTwoDigit(seconds)}</span>
      </h1>
   )
}

export default TimeViewer