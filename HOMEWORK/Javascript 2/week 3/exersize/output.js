// Snippet
let a = 10;
console.log(a); // it logs 10 becouse we havent change any think yet
const x = (function() {
  a = 12;
  console.log(a); // it shows 12 becouse becouse we have changed the value of a on this function
  return function() {
    alert(a); // alerts 12 becouse iit is on function blocks
  };
})();
console.log(a);// it shows 12 becouse we have changed the value of  globall varible without creating any new function