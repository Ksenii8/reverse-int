module.exports = function reverse (n) {
   var s = "";
  for (var i = String(Math.abs(n)).length - 1; i>=0; i--) {
    s +=String(Math.abs(n))[i];
  }
  return Number(s);
}
