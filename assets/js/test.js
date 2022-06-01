function parseParam(url) {
  // 得到 search
  const str = /.+\?(.+)$/.exec(url)[1];
  const arr = str.split('&');
  let paramsObj = {};

  arr.forEach(item => {
    let [key, val] = item.split('='); 
    paramsObj[key] = deal(val);
  })

  return paramsObj;
}

function deal(s) {
  // 未设置 value，则为 true
  if(!s) return true;
  s = decodeURIComponent(s);
  // 判断是否转为数字
  s = /^\d+$/.test(s) ? Number(s) : s;
  return s;
}

// let path = 'https://www.baidu.com/s?open&ie=UTF-8&wd=URL%20Params%20%E4%B8%BA%E5%AF%B9%E8%B1%A1';
// console.log(parseParam(path)); //{"open":true, "ie":"UTF-8", "wd":"URL Params 为对象"}
