function convertTemperature() {
  const temperatureInput = parseFloat(
    document.getElementById("temperature").value
  );
  const unit = document.getElementById("unit").value;
  let result = "";

  if (isNaN(temperatureInput)) {
    result = "Please enter a valid number for temperature.";
  } else {
    switch (unit) {
      case "celsius":
        result = `${temperatureInput}°C is ${
          (temperatureInput * 9) / 5 + 32
        }°F and ${temperatureInput + 273.15}K`;
        break;
      case "fahrenheit":
        result = `${temperatureInput}°F is ${
          ((temperatureInput - 32) * 5) / 9
        }°C and ${((temperatureInput - 32) * 5) / 9 + 273.15}K`;
        break;
      case "kelvin":
        result = `${temperatureInput}K is ${temperatureInput - 273.15}°C and ${
          ((temperatureInput - 273.15) * 9) / 5 + 32
        }°F`;
        break;
      default:
        result = "Invalid unit selected.";
    }
  }

  document.getElementById("result").textContent = result;
}
