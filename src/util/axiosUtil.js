import axios from 'axios/index';
import qs from 'qs';
import {Toast} from 'vant';

const devUrl = "http://127.0.0.1:8088/mstore/";
//const ProductUrl = "https://39.106.121.52:8088/mstore/";
const ProductUrl = "https://www.mzrealm.com/mstore/";

axios.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
});

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
});

function checkStatus(response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode(res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    Toast(res.msg);
  }
  /* if (res.data && (!res.data.success)) {
       alert(res.data.error_msg)
   }*/
  return res
}

export function post(url, data) {
  return axios({
    method: 'post',
    baseURL: '',
    url: ProductUrl + url,
    data: data,
    timeout: 1000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      //'Content-Type': 'application/json; charset=UTF-8'
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
}

export function postJson(url, data) {
  return axios({
    method: 'post',
    baseURL: '',
    url: ProductUrl + url,
    data: data,
    //data: JSON.stringify(data),
    timeout: 1000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json; charset=UTF-8'
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
}

export function get(url, params) {
  return axios({
    method: 'get',
    baseURL: '',
    url: ProductUrl + url,
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
}
