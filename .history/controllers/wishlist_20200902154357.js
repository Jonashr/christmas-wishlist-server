const wishlistRouter = require('express').Router()
const axios = require('axios')
const userProfilesUrl = 'https://raw.githubusercontent.com/alj-devops/santa-data/master/userProfiles.json'
s usersUrl = 'https://raw.githubusercontent.com/alj-devops/santa-data/master/users.json'

wishlistRouter.post('/', async(req, res, next) => {
  try {
    const body = req.body

  } catch(error) {
    console.log(error)
  }
})

module.exports = wishlistRouter