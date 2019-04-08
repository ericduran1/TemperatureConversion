var convertFahToCel = function (fahrenheit) {
    var celcius = (fahrenheit - 32) * 5 / 9;
    return celcius;
}

var celsiusTemperature = convertFahToCel(32);

document.write(celsiusTemperature);
