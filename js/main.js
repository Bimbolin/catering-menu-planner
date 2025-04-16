
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

document.getElementById('menu-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const diet = document.getElementById('diet').value;
  const ingredients = document.getElementById('ingredients').value;
  const city = document.getElementById('city').value;

  const recipes = await fetchRecipes(ingredients, diet);
  const weather = await fetchWeather(city);

  displayWeather(weather);
  displaySeasonal(weather.temp);
  displayRecipes(recipes);
  displayShoppingList(recipes);
  displayNutrition(recipes);
  displayCost(recipes);
});
