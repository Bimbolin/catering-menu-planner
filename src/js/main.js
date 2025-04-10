import { fetchRecipes } from './edamam.js';
import { fetchWeather } from './weather.js';
import {
  displayRecipes,
  displayWeather,
  displaySeasonal,
  displayShoppingList,
  displayNutrition,
  displayCost
} from './utils.js';

const form = document.getElementById('menu-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const diet = document.getElementById('diet').value;
  const ingredients = document.getElementById('ingredients').value;
  const city = document.getElementById('city').value;

  try {
    // Loading indicators
    document.getElementById('recipe-list').textContent = "Loading recipes...";
    document.getElementById('weather-content').textContent = "Loading weather...";

    // Fetch data
    const weather = await fetchWeather(city);
    displayWeather(weather);

    const recipes = await fetchRecipes(ingredients, diet);
    displayRecipes(recipes);

    // Additional UI updates
    displaySeasonal(weather.temp);
    displayShoppingList(recipes);
    displayNutrition(recipes);
    displayCost(recipes);
  } catch (error) {
    console.error(error);
    alert("Something went wrong. Please check your input or try again later.");
  }
});
