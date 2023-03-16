import React, { useContext } from "react";

import TickerBanner from "../TickerBanner/TickerBanner";

import { DarkModeContext } from "../../context/DarkModeContext";
import "./date-display.css"
import {themeColors} from "../../themes/themes"

function DateDisplay() {
  const {darkMode, toggleDarkMode} = useContext(DarkModeContext)

  const r = document.querySelector(':root');

  r.style.setProperty("--greenButtonBorder", themeColors.greenButtonBorder)
  r.style.setProperty("--purpleButtonBorder", themeColors.purpleButtonBorder)

  

  if (darkMode) {
    r.style.setProperty("--background", themeColors.darkColor)
    r.style.setProperty("--text", themeColors.lightColor)

    r.style.setProperty("--opacityHigh", themeColors.darkOpacityHigh)
    r.style.setProperty("--opacityMedium", themeColors.darkOpacityMedium)
    r.style.setProperty("--opacityHigh", themeColors.darkOpacityHigh)

    r.style.setProperty("--saveButtonColor", themeColors.darkSaveButtonColor)
    r.style.setProperty("--savedArticleButtonColor", themeColors.darkSavedArticleButtonColor)

    r.style.setProperty("--fbLogin", themeColors.fbLoginDark)




  } else {
    r.style.setProperty("--background", themeColors.lightColor)
    r.style.setProperty("--text", themeColors.darkColor)

    r.style.setProperty("--opacityHigh", themeColors.lightOpacityHigh)
    r.style.setProperty("--opacityMedium", themeColors.lightOpacityMedium)
    r.style.setProperty("--opacityHigh", themeColors.lightOpacityHigh)

    r.style.setProperty("--saveButtonColor", themeColors.lightSaveButtonColor)
    r.style.setProperty("--savedArticleButtonColor", themeColors.lightSavedArticleButtonColor)

    r.style.setProperty("--fbLogin", themeColors.fbLoginLight)
  }

  const date = new Date(Date.now());
  const days=[
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const dateString = `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
  
  const handleClick = () => {
    toggleDarkMode()
  }
  return(
    <div className="date-display">
      <div>
        <TickerBanner/>
      </div>

      <div className="date-display__date">
        {dateString}
      </div>

      <div className="dark-toggle">
        <img src={darkMode ? "/lightswitch_on.png" : "/lightswitch_off.png"} alt="Dark Mode toggle" onClick={handleClick}/>
      </div>
      
    </div>   
  )
}

export default DateDisplay