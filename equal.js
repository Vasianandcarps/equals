$("#start").click(function () {
  let a = parseFloat($("#in_a").val());
  let b = parseFloat($("#in_b").val());
  let c = parseFloat($("#in_c").val());

  if (a != 0) {
    let D = b * b - 4 * a * c;
    
    if (D >= 0) {
      let o = -b + Math.sqrt(D);
      let o1 = -b - Math.sqrt(D);
      let a1 = 2 * a;
      let x1 = o / a1;
      let x2 = o1 / a1;

      $("#answer").html("D=" + D.toFixed(2) + ";" +"x1=" + x1 + ";" + "x2=" + x2);
    } else {
     $("#answer").html("D cannot be less than 0");
    }
  } else {
    if (b != 0) {
      let x = -c / b;
      $("#answer").html("x=" + x);
    } else {
      if (c == 0) {
        $("#answer").html("Infinite solutions");
      } else {
        $("#answer").html("No real solutions");
      }
    }
  }
});
