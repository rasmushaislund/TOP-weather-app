// START //

import { fetchWeather } from './fetch';
import { formatDate } from './DoW';

const container = document.querySelector('.container');
const content = document.querySelector('.content');
const error = document.querySelector('.error');

export async function showWeather(location) {
  const day = document.querySelector('.dow');
  const weatherIcon = document.querySelector('.weather-icon');
  const temperatureC = document.querySelector('.temperature-c');
  const temperatureF = document.querySelector('.temperature-f');
  const descriptions = document.querySelector('.description');
  const humidityValue = document.querySelector('.humidity-value');
  const windDirection = document.querySelector('.direction-value');
  const windSpeedS = document.querySelector('.speed-value');

  // Make API call and store in variable
  const fetchAPI = await fetchWeather(location);

  // Call date formatter from DoW.js module to get date as day-of-week
  const dow = formatDate(fetchAPI.lastUpdated);

  // Style the displaying of weather data
  content.style.display = 'flex';
  content.classList.add('fade-in');
  container.style.height = '575px';
  error.style.display = 'none';
  error.classList.remove('fade-in');

  // Populate app with API fetch-values
  day.textContent = dow;
  weatherIcon.src = fetchAPI.icon;
  temperatureC.textContent = fetchAPI.tempC;
  temperatureF.textContent = Math.round(fetchAPI.tempF);
  descriptions.textContent = fetchAPI.description;
  humidityValue.textContent = fetchAPI.humidity;
  windDirection.textContent = fetchAPI.windDir;
  windSpeedS.textContent = fetchAPI.windSpeed;
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
