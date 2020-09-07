const calculateTimeElapsedBetweenCurrentDateAndBirthDate = require('../helpers/dateTimeCalculationHelpers').calculateTimeElapsedBetweenCurrentDateAndBirthDate
const moment = require('moment')

describe('Calculate time elapsed between two dates are', () => {
  const currentDate = moment('2020/06/09', 'YYYY-DD-MM')

  test('Less than 10 when the date is one day before', () => {
    const dayBefore10Years = moment('2010/05/09', 'YYYY-DD-MM')
    const result = calculateTimeElapsedBetweenCurrentDateAndBirthDate(currentDate, dayBefore10Years)
    expect(result).toBe(9)
  })
})