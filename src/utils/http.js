import axios from 'axios'
import qs from 'qs'
import globe from '../../static/config'

axios.interceptors.request.use(config => {
  // 这里可以加一些动作, 比如来个进度条开始动作
  config.url = globe.allurl + config.url
  // config.headers.common.Authorization = '90b231da-25d6-41f8-adea-0a2f5d912c4f'
  console.log(config)
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

function checkStatus (response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  console.log(response)
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode (res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === 404) {
    console.log(res.msg)
  }
  if (res.data && (!res.data.success)) {
    console.log(res.data.error_msg)
  }
  return res
}

export default {
  post (url, data) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        data: qs.stringify(data),
        timeout: 10000,
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      }).then(
        (response) => {
          resolve(checkStatus(response))
        }
      ).then(
        (res) => {
          reject(checkCode(res))
        }
      )
    })
  },
  get (url, params) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url,
        params, // get 请求时带的参数
        timeout: 10000,
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      }).then(
        (response) => {
          return checkStatus(response)
        }
      ).then(
        (res) => {
          return checkCode(res)
        }
      )
    })
  }
}
