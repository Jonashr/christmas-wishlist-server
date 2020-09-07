require('dotenv').config()

let MAIL_USERNAME = process.env.MAIL_USERNAME
let MAIL_PASSWORD = process.env.MAIL_PASSWORD
let EMAIL_SENDER  = process.env.EMAIL_SENDER
let EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT

// URL's should be stored organized in a different file and often in a .env, but since this is open source and just a json file we just store it in plaintext here.
let USER_PROFILES_URL = 'https://raw.githubusercontent.com/alj-devops/santa-data/master/userProfiles.json'
let USERS_URL = 'https://raw.githubusercontent.com/alj-devops/santa-data/master/users.json'

module.exports = {
  MAIL_USERNAME,
  MAIL_PASSWORD,
  EMAIL_SENDER,
  EMAIL_RECIPIENT,
  USER_PROFILES_URL,
  USERS_URL
}