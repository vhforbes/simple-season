import React from "react"

const seasonConfig = {
  summer: {
    text: "It's probably hot!",
    icon: "sun",
  },
  winter: {
    text: "I bet it's chilly right now",
    icon: "snowflake",
  },
}

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
  const { text, icon } = seasonConfig[season]

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{text}</h1>
      <i className={`${icon} icon`}></i>
    </div>
  )
}

export default SeasonDisplay
