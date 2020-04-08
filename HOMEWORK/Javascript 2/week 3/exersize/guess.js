// Snippet
const x = 9;
console.log(x); // it shows 9 becouse we dident changed anythink yet
function f1(vall) {
  vall = vall + 1;
  return vall;
}
f1(x);
console.log(x);

const y = { x:9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);