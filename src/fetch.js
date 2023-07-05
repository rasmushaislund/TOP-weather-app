// START //

import { showError } from './populate';

export async function fetchWeather(place) {
  const apiKey = '0f5a85c9a97e48cdb5081603232106';
  const urlCurrent = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${place}`;

  try {
    const response = await fetch(urlCurrent, { mode: 'cors' });
    var toJSON = await response.json();
  } catch {
    showError();
  }

  // Store values from fetch in variables
  const lastUpdated = toJSON.current.last_updated;
  const icon = toJSON.current.condition.icon;
  const tempC = toJSON.current.temp_c;
  const tempF = toJSON.current.temp_f;
  const description = toJSON.current.condition.text;
  const humidity = toJSON.current.humidity;
  const windDir = toJSON.current.wind_dir;
  const windSpeed = toJSON.current.wind_kph;
  const isDay = toJSON.current.is_day;

  // Return relevant data to be used elsewhere in the codebase
  return {
    lastUpdated,
    icon,
    tempC,
    tempF,
    description,
    humidity,
    windDir,
    windSpeed,
    isDay,
  };
}

// END //
