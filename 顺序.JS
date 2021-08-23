// async function async1() {
//   console.log('async1 start');
//   await async2();
//   console.log('async1 end');
// }
// async function async2() {
//   console.log('async2 start');
//   return new Promise((resolve, reject) => {
//     resolve();
//     console.log('async2 promise');
//   })
// }
// console.log('script start');
// setTimeout(function () {
//   console.log('setTimeout');
// }, 0);
// async1();
// new Promise(function (resolve) {
//   console.log('promise1');
//   resolve();
// }).then(function () {
//   console.log('promise2');
// }).then(function () {
//   console.log('promise3');
// });
// console.log('script end');




setTimeout(() => {
  console.log(1);
})
const p1 = Promise.resolve(() => {
  console.log(2);
})
const p2 = new Promise((resolve, reject) => {
  console.log(3);
  resolve();
})
Promise.race([p1]).then(() => {
  console.log(4);
})
Promise.all([p1, p2]).then(() => {
  console.log(5);
})
console.log(6);