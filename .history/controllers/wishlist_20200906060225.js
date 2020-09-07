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

    console.log('QID,', queriedUserProfile)
    // if(!useruid.includes(usernames[0].userUid)) {

    // }

    console.log(usernames[0].uid, userProfiles.data)

    const userProfileQueriedUser = userProfiles.data.find(profile => profile.userUid === usernames[0].uid)

    console.log('Queried user', userProfileQueriedUser)


    // console.log('Time elapsed method', calculateTimeElapsedBetweenNowAndCurrentDate(moment(), moment('2010-08-09', 'YYYY-DD-MM')))
    // calculateTimeElapsedFromDateAToDateB(moment('2010-04-09', 'YYYY-DD-MM'), moment())

    // wishlistQueue.push('List item')

    // console.log('Years from?', moment(userProfiles.data[1].birthdate).toNow())

    return res.status(200).json(body)

  } catch(error) {
    next(error)
  }
})

// Another alternative would be to use moment(birthDate).toNow() however this method should be easier to subject to unit testing.



// const transporter = nodemailer.createTransport({
//   host: 'smtp.ethereal.email',
//   port: 587,
//   auth: {
//     user: config.MAIL_USERNAME,
//     pass: config.MAIL_PASSWORD
//   }
// })


// cron.schedule('*/15 * * * * *', () => {
//   console.log('Running a cron job every 15 seconds')

//   const mailOptions = {
//     from: 'toby.carter@ethereal.email',
//     to: 'toby.carter@ethereal.email',
//     subject: 'Hello there',
//     text: `Testing nodemailer ${wishlistQueue}`
//   }

//   transporter.sendMail(mailOptions, (err, info) => {
//     if(err) {
//       console.log('Error occured.', err)
//     } else {
//       console.log('Email sent', info)
//     }
//   })
// })



module.exports = wishlistRouter