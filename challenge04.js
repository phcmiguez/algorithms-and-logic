// Celsius to Fahrenheith

function celsiusToFahrenheit(celsius){
  const fahrenheit = (celsius * 9) / 5 + 32;
  return celsius + 'ºC is equal to ' + fahrenheit.toFixed(2) + 'ºF.'
}

console.log(celsiusToFahrenheit(-19));

// Fahrenheit to Celsius

function fahrenheitToCelsius(fahrenheit){
  const celsius = (fahrenheit - 32) * 5 / 9;
  return fahrenheit + 'ºF is equal to ' + celsius.toFixed(2) + 'ºC.'
}

console.log(fahrenheitToCelsius(212));