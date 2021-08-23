function bubble(arr) {
  for(let i =0;i<arr.length;i++) {
    for(let j=0;j<arr.length-i;j++) {
      if(arr[j]>arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
}

let arr = [3,2,41,4]
bubble(arr)
console.log(arr);