// 引入axios
import axios from 'axios';
import pageHost from '@/utils/getHost';
import {
  getCookie
} from '@/utils/common';

const httpLang = getCookie('_udbl_') || 'zh_CN';

let winHost = window.location.host;
if (winHost.indexOf('localhost') !== -1) {
  winHost = 'udb.test.mycrudeoil.com';
  // pageHost = '//10.26.24.63:10000/';
}
const udbService = window.location.protocol + '//udb' + winHost.replace(/[a-z]*[^9|.]/i, '') + '/udb/api/v1/login/redirect';
// 响应拦截器即异常处理
axios.interceptors.response.use((response) => {
  if (response.data.code === '401') {
    window.location.href = response.data.loginUrl + '&locale=' + httpLang + '&service=' + udbService + '?callBack=' + window.location.origin + window.location.pathname;
  }
  return response;
}, (err) => {
  const $err = err;
  if ($err && $err.response) {
    switch ($err.response.status) {
      case 400:
        $err.message = '错误请求';
        break;
      case 401:
        $err.message = '未授权，请重新登录';
        break;
      case 403:
        $err.message = '拒绝访问';
        break;
      case 404:
        $err.message = '请求错误,未找到该资源';
        break;
      case 405:
        $err.message = '请求方法未允许';
        break;
      case 408:
        $err.message = '请求超时';
        break;
      case 500:
        $err.message = '服务器端出错';
        break;
      case 501:
        $err.message = '网络未实现';
        break;
      case 502:
        $err.message = '网络错误';
        break;
      case 503:
        $err.message = '服务不可用';
        break;
      case 504:
        $err.message = '网络超时';
        break;
      case 505:
        $err.message = 'http版本不支持该请求';
        break;
      default:
        $err.message = `连接错误${err.response.status}`;
    }
  } else {
    $err.message = '连接到服务器失败';
  }
  // message.err($err.message);
  return Promise.reject($err);
});

axios.defaults.baseURL = pageHost();
// 设置默认请求头
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest',
  language: httpLang,
};
axios.defaults.withCredentials = true;
axios.defaults.timeout = 30 * 1000;


export default {
  // get请求
  get(url, param) {
    const params = param;
    const getTimestamp = new Date().getTime();
    params.webSite = 'udb';
    params.timestamp = getTimestamp;
    return axios.get(url, {
      params,
    });
  },
  // post请求
  post(url, param) {
    const params = param;
    params.webSite = 'udb';
    return axios.post(url, params);
  },
  // post请求
  put(url, param) {
    const params = param;
    params.webSite = 'udb';
    return axios.put(url, params, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        language: httpLang,
      }
    });
  },
  // 图片上传方法upload
  uploadHttp(url, param) {
    const params = param;
    params.webSite = 'udb';
    return axios.post(url, params, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'multipart/form-data',
        language: httpLang,
      }
    });
  },

  // delete请求
  delete(url, param) {
    const params = param;
    params.webSite = 'udb';
    return axios.delete(url, {
      params,
    });
  }
};
