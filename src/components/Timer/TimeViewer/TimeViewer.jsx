import React from 'react'


function TimeViewer({ minutes, seconds }) {

   const isTwoDigit = (number) => {
      if (number < 10) number = "0" + number
      return number
   }

   return (
      <h1>
         <span>{isTwoDigit(minutes)}</span>
         <span>:</span>
         <span>{isTwoDigit(seconds)}</span>
      </h1>
   )
}

export default TimeViewer