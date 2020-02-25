export function setLocalStorage(key, value, expire) {
  let obj = {
    data: value,
    time: Date.now(),
    expire: expire*600000
  };
  //localStorage 设置的值不能为对象,转为json字符串
  localStorage.setItem(key, JSON.stringify(obj));
}

export function getLocalStorage(key) {
    let val = localStorage.getItem(key);
    if (!val) {
      return val;
    }
    val = JSON.parse(val);
    if (Date.now() - val.time > val.expire) {
      localStorage.removeItem(key);
      return null;
    }
    return val.data;
}

