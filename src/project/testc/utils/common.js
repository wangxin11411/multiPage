/**
 * 获取cookie
 * @param {String} 要获取的cookie的name
 * @return {Object} 返回对应cookie的value
 */
export const getCookie = (name) => {
  const arr = document.cookie.match(new RegExp(`(^| )${name}=([^;]*)(;|$)`));
  if (arr != null) {
    return decodeURI(arr[2]);
  }
  return null;
};
export const setCookie = (name, value, Days = 30) => {
  const exp = new Date();
  exp.setTime(exp.getTime() + (Days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${escape(value)};expires=${exp.toGMTString()}`;
};
/*
 * 获取url参数
 */
export const getUrlParam = (name) => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
};
export const getUrlHashParam = (name) => {
  const reg = new RegExp(`(^|&?)${name}=([^&]*)(&|$)`);
  const r = window.location.hash.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
};
