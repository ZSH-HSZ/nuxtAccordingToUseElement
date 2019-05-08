import axios from 'axios'
const methods = ["get", "post", "delete", "put", "patch"];
const baseUrl = {
  development: "http://api.ybw.cn",
  production: "http://api.ybw.cn"
}
export const [get, post, del, put, patch] = methods.map(action => {
  return (road, data, params) => {
    console.log(reqRoad(action, road, data, params),)
    return axios({
      method: action,
      url: reqRoad(action, road, data, params),
      data: action !== 'get' ? params : null,
      withCredentials: true
    })
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.log(err)
      return {
        code: '9000001',
        data: '数据错误'
      }
    })
  }
    
})
const apis = {
  // 登录
  users: '/',
  getIndex: '/api/getIndex'
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
