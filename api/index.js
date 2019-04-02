import axios from 'axios'
const methods = ["get", "post", "delete", "put", "patch"];
const baseUrl = {
  development: "http://192.168.10.222:60021/v1.0.0",
  production: "http://192.168.10.222:60021/v1.0.0"
}
export const [get, post, del, put, patch] = methods.map(action => {
  return (road, cookie, data, params) => {
    console.log(reqRoad(action, road, data, params),)
    return axios({
      method: action,
      url: reqRoad(action, road, data, params),
      data: action !== 'get' ? params : null,
      headers: {cookie}
    })
    .then(res => {
      return res.data
    })
    .catch(err => {
      return {
        code: '9000001',
        data: '数据错误'
      }
    })
  }
    
})
const apis = {
  // 登录
  login: '/user',
  hotOpusList: '/hotOpus'
}
const parseUrl = (url, params) => {
  return (
    url &&
    url.replace(/\{(\w+)\}/g, (m, n) => {
      return params[n];
    })
  )
}
const serialize = function (obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p) && obj[p]) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}
const reqRoad = (method, road, data, params) => {
  if (method === 'get' && params) {
    return baseUrl[process.env.NODE_ENV] + parseUrl(apis[road], data) + '?' + serialize(params)
  } else {
    return baseUrl[process.env.NODE_ENV] + parseUrl(apis[road], data)
  }
}
