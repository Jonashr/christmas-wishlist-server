const wishlistRouter = require('express').Router()
const axios = require('axios')
const userProfilesUrl = 'https://raw.githubusercontent.com/alj-devops/santa-data/master/userProfiles.json'
const usersUrl = 'https://raw.githubusercontent.com/alj-devops/santa-data/master/users.json'

wishlistRouter.post('/', async(req, res, next) => {
  try {
    const body = req.body
    console.log('Body')
    const userProfiles = await axios.get(userProfilesUrl)
    const userProfileData = userProfiles.data

    console.log(userProfileData.username.includes(body.username))

    if(!userProfiles || !userProfileData.username.includes(body.username)) {
      console.log('lol')
    }

    console.log('User profiles', userProfiles.data)

    return res.status(200).json(body)

  } catch(error) {
    console.log(error)
  }
})

module.exports = wishlistRouter