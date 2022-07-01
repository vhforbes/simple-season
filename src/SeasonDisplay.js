import React from "react"

const getSeason = (lat, month) => {
  if (month >= 3 && month <= 8) {
    return lat >= 0 ? "summer" : "winter"
  } else {
    return lat >= 0 ? "winter" : "summer"
  }
}

const SeasonDisplay = ({ latitude }) => {
  let month = new Date().getMonth()
  let season = getSeason(latitude, month)

  console.log(season)

  return (
    <div>
      <h1>You are in the {season}</h1>
    </div>
  )
}

export default SeasonDisplay
