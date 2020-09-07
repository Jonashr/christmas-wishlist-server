const calculateTimeElapsedBetweenCurrentDateAndBirthDate = require('../helpers/dateTimeCalculationHelpers').calculateTimeElapsedBetweenCurrentDateAndBirthDate
const moment = require('moment')

describe('Calculate time elapsed between two dates', () => {
  const currentDate = moment('2020/06/09', 'YYYY-DD-MM')

  test('Is calculated as 9 when the birthdate is 10 years minus one day apart', () => {
    const dayBefore10Years = moment('2010/07/09', 'YYYY-DD-MM')
    const result = calculateTimeElapsedBetweenCurrentDateAndBirthDate(currentDate, dayBefore10Years)
    expect(result).toBe(9)
  })

  test('Is calculated as 10 when only the years are 10 years apart', () => {
    const dayBefore10Years = moment('2010/06/09', 'YYYY-DD-MM')
    const result = calculateTimeElapsedBetweenCurrentDateAndBirthDate(currentDate, dayBefore10Years)
    expect(result).toBe(10)
  })

  test('Is calculated as 10 when the date is ten years and one day apart', () => {
    const dayBefore10Years = moment('2010/05/09', 'YYYY-DD-MM')
    const result = calculateTimeElapsedBetweenCurrentDateAndBirthDate(currentDate, dayBefore10Years)
    expect(result).toBe(10)
  })
})