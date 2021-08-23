function quick(arr){
  if(arr.length<1) {
    return arr
  }
  let mid = Math.floor(arr.length/2)
  let midItem = arr.splice(mid,1)[0]
  let left = []
  let right = []
  for(let i=0;i<arr.length;i++) {
    if(arr[i]<midItem) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quick(left).concat(midItem,quick(right))
}

let arr = [3,2,41,4]
console.log(quick(arr));