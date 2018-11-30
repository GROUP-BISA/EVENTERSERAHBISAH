require('dotenv').config()

const NEXMO_API_KEY = process.env.NEXMO_API_KEY
const NEXMO_API_SECRET = process.env.NEXMO_API_SECRET
const TO_NUMBER = process.env.NEXMO_TO_NUMBER
const FROM_NUMBER = process.env.NEXMO_FROM_NUMBER

const Nexmo = require('nexmo')

const nexmo = new Nexmo({
  apiKey: NEXMO_API_KEY,
  apiSecret: NEXMO_API_SECRET
})

const from = FROM_NUMBER
const to = TO_NUMBER
const text = 'someone has interest with your event'

module.exports = nexzmo.message.sendSms(from, to, text)
