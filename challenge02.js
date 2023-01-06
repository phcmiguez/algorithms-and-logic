// Calculate a circle area

function circleArea(radius) {
  const PI = 3.14159265359;
  const diameter = (radius ** 2);
  const area = diameter * PI;
  return 'The area of the circle is ' + area.toFixed(1) + ' square meters. The diameter is ' + diameter.toFixed(2) + ' meters.';
}

console.log(circleArea(43));
