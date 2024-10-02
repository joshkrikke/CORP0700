/*
 * function-1.js
 */

function times_table(a){
  for (var i = 1; i <= 10; i++) {
    var result = i * a;
    var output = i + " x " + a + " = " + result;
    document.writeln(output);
  }
}

times_table(4);
