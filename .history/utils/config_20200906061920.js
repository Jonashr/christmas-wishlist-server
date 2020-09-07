require('dotenv').config()

let MAIL_USERNAME = process.env.MAIL_USERNAME
let MAIL_PASSWORD = process.env.MAIL_PASSWORD
let EMAIL_SENDER  = process.env.EMAIL_SENDER
let EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT

module.exports = {
  MAIL_USERNAME,
  MAIL_PASSWORD,
  EMAIL_SENDER,
  EMAIL_RECIPIENT
}