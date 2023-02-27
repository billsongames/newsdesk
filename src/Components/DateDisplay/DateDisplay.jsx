import React from "react";
import "./date-display.css"

function DateDisplay() {

  const date = new Date(Date.now());
  const days=[
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const dateString = `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`

  return(
    <div className="date-display">
      {dateString}
    </div>   
  )
}

export default DateDisplay