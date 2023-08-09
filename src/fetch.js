// START //

import { showError } from './populate';

export async function fetchWeather(place) {
  const apiKey = '0f5a85c9a97e48cdb5081603232106';
  const urlCurrent = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${place}`;
  console.clear();

  try {
    const response = await fetch(urlCurrent, { mode: 'cors' });
    if (!response.ok) throw new Error();
    const toJSON = await response.json();
    return toJSON;
  } catch (error) {
    showError();
  }
}

// END //
