const wishlistRouter = require('express').Router()
const axios = require('axios')
const moment = require('moment')
const userProfilesUrl = 'https://raw.githubusercontent.com/alj-devops/santa-data/master/userProfiles.json'
const usersUrl = 'https://raw.githubusercontent.com/alj-devops/santa-data/master/users.json'
const cron = require('node-cron')

const wishlistQueue = []

wishlistRouter.post('/', async(req, res, next) => {
  const body = req.body

  try {
    const users = await axios.get(usersUrl)
    const usernames = users.data.map(user => user.username)

    if(!users || !usernames.includes(body.username)) {
      return res.status(404).json({ error: `User with id: ${body.username} does not exist.`})
    }

    console.log('Usernames', usernames)
    const userProfiles = await axios.get(userProfilesUrl)
    console.log('User profiles data', userProfiles.data)

    console.log('User names', usernames)
    console.log(usernames.includes(body.username))
    console.log('User profiles', moment(userProfiles.data[2].birthdate, "YYYY-DD-MM"))

  

    // console.log('Years from?', moment(userProfiles.data[1].birthdate).toNow())

    return res.status(200).json(body)

  } catch(error) {
    next(error)
  }
})

cron.schedule('15 * * * * *', () => {
  console.log('Running a cron job every second');
});
module.exports = wishlistRouter