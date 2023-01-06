// Calculate a circle area

function circleArea(radius) {
  const diameter = radius * 2;
  const area = (radius ** 2) * Math.PI;
  return (
    'The area of the circle is ' +
    area.toFixed(2) +
    ' square meters. The diameter is ' +
    diameter.toFixed(2) +
    ' meters.'
  );
}

console.log(circleArea(10));
