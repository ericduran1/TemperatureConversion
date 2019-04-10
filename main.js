var convertFahToCel = function (fahrenheit) {
    var celcius = (fahrenheit - 32) * 5 / 9;
    return celcius;
}

var celciustemperature = convertFahToCel(42);

document.write(celciustemperature);
