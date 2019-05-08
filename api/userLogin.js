const axios = require('axios')
export default function (req, res, next) {
  res.cookie('token', 'abcdefg123456')
  res.send()
}