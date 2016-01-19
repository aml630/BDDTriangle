var triangleShape = function (a, b, c) {
  console.log(a,b,c)

if ((a+b<c) || (a+c<b) || (c+b<a)) {
  return "notTriangle";
} else if ((a ===b) && (a ===c) ) {
  return "equilateral"
} else if (( a === b && a !==c ) || ( a === c && a!== b) || ( b === c && b !==a)) {
  return "isosceles"
} else if (( a !== b && a !==c ) || ( b !== c && b !== a) || ( c !== b && c !== a)){
  return "scalene"
}
};

$("form").submit(function (event) {
  var d = parseInt($(".side1").val())
  var e = parseInt($(".side2").val())
  var f = parseInt($(".side3").val())
$(".printShape").text(triangleShape(d,e,f))
event.preventDefault()

})
