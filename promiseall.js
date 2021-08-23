function myPromiseall(arr) {
  let count = 0
  let length = arr.length - 1 
  let res = []
  return new Promise((resolve,reject) => {
    while(count<=length) {
      Promise.resolve(arr[count]).then((ans)=>{
        if(count<length) {
          count++
          res.push(ans)            
        } else {
          resolve(res)
        }
      }).catch(()=>{
        reject()
      })
    }
  })
}