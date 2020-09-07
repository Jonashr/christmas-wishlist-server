require('dotenv').config

let MAIL_USERNAME = process.env.MAIL_USERNAME
let MAIL_PASSWORD = process.env.MAIL_PASSWORD

console.log(MAIL_USERNAME, MAIL_PASSWORD)

module.exports = {
  MAIL_USERNAME,
  MAIL_PASSWORD
}