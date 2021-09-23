let a = prompt("Введите число a (a/b)");
let b = prompt("Введите число b (a/b)");
while (a != NaN && b != NaN) {
  if (a % b == 0) {
    d = a / b;
    alert(d);
    break;
  } else if (a > b) {
    a -= b;
  } else if (a < b) {
    b -= a;
  } else {
    break;
  }
  break;
}

alert(a / d);
alert(b / d);
