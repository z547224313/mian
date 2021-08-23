function shen(obj) {
  if(typeof obj !== 'object' || obj === null) {
    return obj
  }
  let res = Array.isArray(obj)? []:{}
  Object.keys(obj).map(key=> {
    res[key] = shen(obj[key])
  })
  return res
}

let obj = {
  a:'111',
  b: {
    c:22
  }
}

let res = shen(obj)
res.b.c = 333

console.log(res);
console.log(obj);
