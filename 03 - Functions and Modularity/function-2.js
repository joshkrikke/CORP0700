/*
 * test.js
 */

function times_table(a, start=1, end=10){
  for (var i = start; i <= end; i++) {
    var result = i * a;
    var output = i + " x " + a + " = " + result;
    document.writeln(output);
  }
}

times_table(4, 2, 14);

times_table(5);
