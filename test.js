function A() {
  this.b = 3;
}
var b = 5;
A.prototype = {
  b: 7,
  d: 2,
  log:()=> {
    console.log(2222);
  }
};
var c = new A();
A();

console.log(b);
console.log(c.b);
console.log(c.log()); 