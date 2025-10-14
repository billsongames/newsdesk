import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types"
import axios from 'axios'

import Marquee from "react-fast-marquee";

import Alert from "../Alert/Alert"

import "./ticker-banner.css"


function TickerBanner() {

  const REACT_APP_NEWSDATAIO_APIKEY = process.env.REACT_APP_NEWSDATAIO_APIKEY


  const [alert, setAlert] = useState({ message: "" })
  const [topArticleDate, setTopArticleDate] = useState({ date: 0 })
  const [tickerText, setTickerText] = useState({ text: "" })


  useEffect(() => {

    const timer = setTimeout(() => {

      axios
        /* .get(`https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=gb&sortby=publishedAt&apikey=445b4b502608f3804329f4428b41b723`) */
        .get(`https://newsdata.io/api/1/latest?apikey=${REACT_APP_NEWSDATAIO_APIKEY}&country=gb}`)

        .then(function (response) {
          setAlert({
            message: ""
          })


          function setText() {
/*             setTopArticleDate({ date: response.data.results[0].pubDate })
            console.log(topArticleDate)
            let interval = (Date.now() - Date.parse(topArticleDate.date)) / 1000 / 60 / 60;
            console.log(interval) */
            setTickerText(response.data.results[0].title)
          }

          setText()
        })

        .catch(function (error) {
          setAlert({
            message: "ERROR RETRIEVING ARTICLES. PLEASE TRY LATER..."
          })
          console.log(error);
        })
    }, 4000)

    return () => clearTimeout(timer)

  }, [])

  if (!tickerText.text) return null

  return (
    <div className="ticker-banner">
      <Alert message={alert.message} />
      <div className="breaking-news">
        BREAKING NEWS:
      </div>

      <div>
        <Marquee
          speed={40}
          gradient={false}
          pauseOnHover={true}
        >
          {tickerText.text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Marquee>
      </div>
    </div>
  )
}

TickerBanner.propTypes = {
  text: PropTypes.string
}

export default TickerBanner

