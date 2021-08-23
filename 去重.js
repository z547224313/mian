function qvchong(arr) {
  let set = new Set(arr)
  return Array.from(set)
}

console.log(qvchong([1,1,2,3,4,4,4,4]));