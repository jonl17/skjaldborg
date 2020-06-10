const functions = require('firebase-functions');
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')
const cors = require('cors')({ origin: true })
admin.initializeApp()

let transporter = nodemailer.createTransport({
  service: 'zoho', auth: {
    user: 'skjaldborg@skjaldborg.is',
    pass: 'Skjaldborg2020!'
  }
})

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {

    const dest = req.query.dest

    const mailOptions = {
      from: 'Skjaldborg 2020',
      to: dest,
      subject: 'Takk fyrir að sækja um á Skjaldborg 2020!',
    }

    return transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return res.send(err.toString())
      }
      return res.send('Sent')
    })
  })
})