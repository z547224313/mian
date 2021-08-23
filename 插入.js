function cha(arr){
  for(let i = 1;i<arr.length;i++){
    let j = i
    while (j>0){
      if(arr[j]<arr[j-1]){
        let temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp
        j--
      }else {
        break
      }
    }
  }
}

let arr = [3,2,41,4]
cha(arr)
console.log(arr);