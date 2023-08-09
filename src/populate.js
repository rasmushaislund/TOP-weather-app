// START //

import { formatDate } from './DoW';

const container = document.querySelector('.container');
const content = document.querySelector('.content');
const error = document.querySelector('.error');

export function showWeather(getWeather) {
  if (!getWeather) return;

  // Get DOM items for later data population
  const day = document.querySelector('.dow');
  const weatherIcon = document.querySelector('.weather-icon');
  const temperatureC = document.querySelector('.temperature-c');
  const temperatureF = document.querySelector('.temperature-f');
  const descriptions = document.querySelector('.description');
  const humidityValue = document.querySelector('.humidity-value');
  const windDirection = document.querySelector('.direction-value');
  const windSpeedS = document.querySelector('.speed-value');

  // Store relevant weather data items in variables
  const lastUpdated = getWeather.current.last_updated;
  const icon = getWeather.current.condition.icon;
  const tempC = getWeather.current.temp_c;
  const tempF = getWeather.current.temp_f;
  const description = getWeather.current.condition.text;
  const humidity = getWeather.current.humidity;
  const windDir = getWeather.current.wind_dir;
  const windSpeed = getWeather.current.wind_kph;

  // Get day-of-week by using date from weather data
  const dow = formatDate(lastUpdated);

  // Populate app with API data values
  day.textContent = dow;
  weatherIcon.src = icon;
  temperatureC.textContent = tempC;
  temperatureF.textContent = Math.round(tempF);
  descriptions.textContent = description;
  humidityValue.textContent = humidity;
  windDirection.textContent = windDir;
  windSpeedS.textContent = windSpeed;

  // Style the displaying of weather data
  content.style.display = 'flex';
  content.classList.add('fade-in');
  container.style.height = '575px';
  error.style.display = 'none';
  error.classList.remove('fade-in');
}

export function toggleTemperature(value) {
  const tempUnit = document.querySelector('sup .temperature-unit');
  const temperatureC = document.querySelector('.temperature-c');
  const temperatureF = document.querySelector('.temperature-f');
  const slider = document.querySelector('#temp-toggle');

  if (value === 0) {
    tempUnit.innerHTML = '&degC';
    temperatureC.classList.add('show-temp');
    temperatureF.classList.remove('show-temp');
    slider.classList.add('slider');
    slider.classList.remove('slider-active');
  } else if (value === 1) {
    tempUnit.innerHTML = '&degF';
    temperatureF.classList.add('show-temp');
    temperatureC.classList.remove('show-temp');
    slider.classList.add('slider-active');
    slider.classList.remove('slider');
  }
}

export function showError() {
  content.style.display = 'none';
  content.classList.remove('fade-in');
  container.style.height = '575px';
  error.style.display = 'flex';
  error.classList.add('fade-in');
}

// END //
