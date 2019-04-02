const axios = require('axios')
export default function (req, res, next) {
  let road = `http://192.168.10.222:60021/v1.0.0/user`
  axios.post(road)
  .then(val=>{
    res.cookie('token', 'abcdefg123456')
    res.send()
  })
  .catch(err=>{
    console.log('err', err)
    res.status(500).end(err)
  })
}