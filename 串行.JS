function repate(func,times,delay) {
  let np = () => new Promise((resolve)=> {
    setTimeout(()=> {
      func()
      resolve()
    },delay)
  })
  function dfs(cur) {
    if(cur!==times) {
      np().then(() => {
        dfs(++cur)
      })
    }
  }
  dfs(0)
}
