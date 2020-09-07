const moment = require('moment')

const calculateTimeElapsedBetweenBirthdateAndCurrentDate = (currentDate, birthdate) => {
  const timeElapsed = moment(currentDate).diff(moment(birthdate, 'YYYY-DD-MM'), 'years', true)
  return timeElapsed
}

module.exports = {
  calculateTimeElapsedBetweenBirthdateAndCurrentDate
}