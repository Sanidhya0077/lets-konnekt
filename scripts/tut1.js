// var is functionally scoped but not block scoped
// let is scoped functionally as well as inside a block
if (true) {
  var c = 2;
  console.log(c);
}

console.log(c);

function test() {
  var b = 3;
  console.log(b);
}
test();
console.log(b);
