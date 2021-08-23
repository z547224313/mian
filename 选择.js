function select(arr) {
  for(let i =0;i<arr.length;i++) {
    let min = arr[i]
    for(let j=i;j<arr.length;j++) {
      if(arr[j]<min) {
        let temp = arr[j]
        arr[j] = min
        min = temp
        arr[i] = temp
      }
    }
  }
}

let arr = [3,2,41,4]
select(arr)
console.log(arr);