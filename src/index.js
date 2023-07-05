import './style.css';
import './index.html';
import { showWeather, toggleTemperature } from './populate';

// Add event listeners for location search
const location = document.querySelector('#location');
const search = document.querySelector('.search-btn');

search.addEventListener('click', () => {
  showWeather(location.value);
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
