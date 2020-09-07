const moment = require('moment')

const calculateTimeElapsedBetweenBirthdateAndCurrentDate = (currentDate, birthdate) => {
  const timeElapsed = moment(currentDate).diff(moment(birthdate, 'YYYY-DD-MM'), 'years')
  return timeElapsed
}

module.exports = {
  calculateTimeElapsedBetweenBirthdateAndCurrentDate
}