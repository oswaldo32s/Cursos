const convertToCelsius = function(F) {
  return Math.round(((F - 32) * (5/9)) * Math.pow(10, 1)) / Math.pow(10, 1)
};

const convertToFahrenheit = function(C) {
  return Math.round(((C * (9/5)) + 32 ) * Math.pow(10, 1)) / Math.pow(10, 1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
