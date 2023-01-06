// Calculate a circle area

function circleArea(radius) {
  pi = 3.14159265359;
  diameter = (radius ** 2);
  area = diameter * pi;
  return 'The area of the circle is ' + area.toFixed(1) + ' square meters. The diameter is ' + diameter.toFixed(2) + ' meters.';
}

console.log(circleArea(16));
