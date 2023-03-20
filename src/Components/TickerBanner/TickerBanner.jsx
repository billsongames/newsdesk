import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types"

import Marquee from "react-fast-marquee";

import "./ticker-banner.css"


function TickerBanner({text}) {

  if (!text) return null
  
  return(
    <div className="ticker-banner">
      <div className="breaking-news">
        BREAKING NEWS: 
      </div>
    
      <div>
        <Marquee
          speed={40}
          gradient={false}
          pauseOnHover= {true}
        >
            {text}
          </Marquee>
        </div>
      </div>  
  )
}

TickerBanner.propTypes = {
  text: PropTypes.string.isRequired
}

export default TickerBanner

