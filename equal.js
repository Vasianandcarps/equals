
let start=document.getElementById("start");

start.onclick= function solveQuadratic() {
  let a = parseFloat(document.getElementById("in_a").value);
  let b = parseFloat(document.getElementById("in_b").value);
  let c = parseFloat(document.getElementById("in_c").value);

  if (a != 0) {
    let D = b * b - 4 * a * c;
    
    if (D >= 0) {
      let o = -b + Math.sqrt(D);
      let o1 = -b - Math.sqrt(D);
      let a1 = 2 * a;
      let x1 = o / a1;
      let x2 = o1 / a1;

      document.getElementById("answer").innerHTML = "D=" + D + ";" +"x1=" + x1 + ";" + "x2=" + x2;
    } else {
      document.getElementById("answer").innerHTML = "D cannot be less than 0";
    }
  } else {
    if (b != 0) {
      let x = -c / b;
      document.getElementById("answer").innerHTML = "x=" + x;
    } else {
      if (c == 0) {
        document.getElementById("answer").innerHTML = "Infinite solutions";
      } else {
        document.getElementById("answer").innerHTML = "No real solutions";
      }
    }
  }
}


