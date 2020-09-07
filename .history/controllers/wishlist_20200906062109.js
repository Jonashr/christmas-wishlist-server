const wishlistRouter = require('express').Router()
const axios = require('axios')
const moment = require('moment')
const userProfilesUrl = 'https://raw.githubusercontent.com/alj-devops/santa-data/master/userProfiles.json'
const usersUrl = 'https://raw.githubusercontent.com/alj-devops/santa-data/master/users.json'
const cron = require('node-cron')
const { calculateTimeElapsedBetweenNowAndCurrentDate } = require('../helpers/dateTimeCalculationHelpers')
const nodemailer = require('nodemailer')
const config = require('../utils/config')

const wishlistQueue = []

wishlistRouter.post('/', async(req, res, next) => {
  const body = req.body

  try {
    const users = await axios.get(usersUrl)
    const queriedUser = users.data.find(user => user.username === body.username)

    if(!queriedUser) {
      return res.status(404).json({ error: `User with id: ${body.username} does not exist.` })
    }

    const userProfiles = await axios.get(userProfilesUrl)
    const queriedUserProfile = userProfiles.data.find(userProfile => userProfile.userUid === queriedUser.uid)

    if(!queriedUserProfile) {
      return res.status(404).json({ error: `User with username ${body.username} does not have an existing user profile` })
    }

    // The last entry of the json file gives away that the format is indeeed YYYY-DD-MM, if this is not included the calculate date will be invalid
    // For the last entry.
    const userAge = calculateTimeElapsedBetweenNowAndCurrentDate(moment(), moment(queriedUserProfile.birthdate, 'YYYY-DD-MM'))

    if(userAge >= 10) {
      return res.status(400).json({ error: `User with username: ${body.username} is older than 10 years` })
    }

    const wishlistEntry = {
      username: queriedUser.username,
      address: userProfiles.address,
      wish: body.wish
    }

    wishlistQueue.push(wishlistEntry)

    return res.status(200).json(wishlistEntry)

  } catch(error) {
    next(error)
  }
})


// If the wishlist items were not kept in memory and instead stored in a DB, the transporter and cron job would more likely than not be moved to a different controller
// However, since this only lives in memory it is easier to keep them in the same class as the wishlist queue.

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: config.MAIL_USERNAME,
    pass: config.MAIL_PASSWORD
  }
})


// The format of the mail is not the prettiest and could be made better, but works fine just for demonstration purposes.

cron.schedule('*/15 * * * * *', () => {
  console.log('Running cron job')

  const mailOptions = {
    from: config.EMAIL_SENDER,
    to: config.EMAIL_RECIPIENT,
    subject: 'List of pending requests Santa Application',
    text: `Pending requests: ${wishlistQueue.length}
          ${JSON.stringify(wishlistQueue)}`
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if(err) {
      console.log('Error occured.', err)
    } else {
      console.log('Email sent', info)
    }
  })
})


module.exports = wishlistRouter