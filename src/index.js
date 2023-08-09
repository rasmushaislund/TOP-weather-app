import './style.css';
import './index.html';
import { showWeather, toggleTemperature } from './populate';
import { fetchWeather } from './fetch';

// Add event listeners for location search
const location = document.querySelector('#location');
const search = document.querySelector('.search-btn');

search.addEventListener('click', async () => {
  if (location.value === '') return;
  const getWeather = await fetchWeather(location.value);
  showWeather(getWeather);
});

location.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    search.click();
  }
});

// Add event listener for toggle that
// shows temperature as Celsius or Fahrenheit
const toggle = document.querySelector('#temp-toggle');

toggle.addEventListener('change', () => {
  toggleTemperature(toggle.valueAsNumber);
});
