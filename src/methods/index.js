// Months array
export const months_arr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]
export const months_arr_is = [
  "Janúar",
  "Febrúar",
  "Mars",
  "Apríl",
  "Maí",
  "Júní",
  "Júlí",
  "Ágúst",
  "September",
  "Október",
  "Nóvember",
  "Desember",
]

export const convert = timestampSeconds => {
  // Convert timestamp to milliseconds
  var date = new Date(timestampSeconds * 1000)

  // Year
  var year = date.getFullYear()

  // Month
  var month = months_arr[date.getMonth()]

  // Day
  var day = date.getDate()

  // Hours
  var hours = date.getHours()

  // Minutes
  var minutes = "0" + date.getMinutes()

  // Seconds
  var seconds = "0" + date.getSeconds()

  // Display date time in MM-dd-yyyy h:m:s format
  var convdataTime =
    month +
    "-" +
    day +
    "-" +
    year +
    " " +
    hours +
    ":" +
    minutes.substr(-2) +
    ":" +
    seconds.substr(-2)

  return convdataTime
}

export const titleToURL = title => {
  return title.replace(/ /g, "-").toLowerCase()
}

export const formatTime = (date, nonVerbose) => {
  const hour = date.getHours()
  let minutes = date.getMinutes()
  if (minutes < 10) {
    minutes = "0" + minutes
  }
  if (nonVerbose) {
    // þetta er hakk, laga síðar
    if (`${hour}:${minutes}` === `14:10`) {
      return `14:00`
    } else {
      if (isCoupleOfMinutesOver(minutes)) {
        return `${hour}:00`
      }
      return `${hour}:${minutes}`
    }
  }
  if (isCoupleOfMinutesOver(minutes)) {
    return `${hour}:00`
  } else {
    return `kl. ${hour}.${minutes}`
  }
}

export const isCoupleOfMinutesOver = minutes => {
  return minutes - 9 < 0
}
