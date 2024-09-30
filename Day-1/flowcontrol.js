/*
 * test.js
 */
var a = 3;
for (var i = 1; i <= 10; i++) {
  var result = i * a;
  var output = i + " x " + a + " = " + result;
  document.writeln(output);
}