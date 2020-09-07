const wishlistRouter = require('express').Router()
const axios = require('axios')
const moment = require('moment')
const userProfilesUrl = 'https://raw.githubusercontent.com/alj-devops/santa-data/master/userProfiles.json'
const usersUrl = 'https://raw.githubusercontent.com/alj-devops/santa-data/master/users.json'
const cron = require('node-cron')
const nodemailer = require('nodemailer')
const config = require('../utils/config')

const wishlistQueue = []

wishlistRouter.post('/', async(req, res, next) => {
  const body = req.body

  try {
    const users = await axios.get(usersUrl)
    const usernames = users.data.map(user => user.username)

    if(!users || !usernames.includes(body.username)) {
      return res.status(404).json({ error: `User with id: ${body.username} does not exist.` })
    }

    console.log('Usernames', usernames)
    const userProfiles = await axios.get(userProfilesUrl)
    console.log('User profiles data', userProfiles.data)

    console.log('User names', usernames)
    console.log(usernames.includes(body.username))
    // console.log('User profiles', moment'0', 'YYYY-DD-MM'))
    console.log('Time elapsed method', calculateTimeElapsedFromDateAToDateB(moment(, 'YYYY-DD-MM'), moment()))
    calculateTimeElapsedFromDateAToDateB(moment('2010-04-09', 'YYYY-DD-MM'), moment())
    console.log(moment('2010-04-09, 'YYYY-DD-MM').toNow())

    wishlistQueue.push('List item')

    // console.log('Years from?', moment(userProfiles.data[1].birthdate).toNow())

    return res.status(200).json(body)

  } catch(error) {
    next(error)
  }
})

const calculateTimeElapsedFromDateAToDateB = (dateA, dateB) => {
  console.log(moment(dateA, 'YYYY-DD-MM'), moment(dateB, 'YYYY-DD-MM'))
  const timeElapsed = moment(dateA, 'YYYY-DD-MM').from(dateB)
  return timeElapsed
}

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