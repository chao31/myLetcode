const flattenObject = (obj, prefix = '', newObj = {}) => { 
  Object.keys(obj).forEach((key) => {
    const pre = prefix ? `${prefix}.${key}`: key;
    if(typeof obj[key] === 'object' && obj[key] !== null) {
      flattenObject(obj[key], pre, newObj);
    }else {
      newObj[pre] = obj[key];
    }
  });
  return newObj;
};

console.log(flattenObject({ a: { b: { c: 1 } }, d: 1 })); // {a.b.c: 1, d: 1}
