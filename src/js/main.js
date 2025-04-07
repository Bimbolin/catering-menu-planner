import { fetchRecipes } from './edamam.js';
import { fetchWeather } from './weather.js';
import { renderRecipes } from './utils.js';

const form = document.getElementById('recipe-form');
const weatherDiv = document.getElementById('weather');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const ingredient = document.getElementById('ingredient').value.trim();
  if (!ingredient) return;

  const recipes = await fetchRecipes(ingredient);
  renderRecipes(recipes);
});

// Load seasonal weather data on page load
fetchWeather('your-city-here').then((data) => {
  weatherDiv.textContent = `Weather: ${data.main.temp}°C - ${data.weather[0].main}`;
});
