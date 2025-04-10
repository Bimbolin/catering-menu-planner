export function displayWeather(data) {
  const weatherDiv = document.getElementById('weather-content');
  weatherDiv.innerHTML = `
    <p>Weather in ${data.city}: ${data.temp}°C - ${data.condition}</p>
    <img src="${data.icon}" alt="${data.condition}" style="width: 50px;" />
  `;
}

export function displaySeasonal(temp) {
  const suggestion = temp < 15 ? "🥣 Cozy up with a hot soup!" : "🥗 Try a light, refreshing salad!";
  document.getElementById('seasonal-suggestion').textContent = suggestion;
}

export function displayRecipes(recipes) {
  const recipeDiv = document.getElementById('recipe-list');
  recipeDiv.innerHTML = recipes.map(recipe => `
    <div class="card">
      <h3>${recipe.label}</h3>
      <img src="${recipe.image}" alt="${recipe.label}" style="width:100px;">
      <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
      <p><strong>Calories:</strong> ${Math.round(recipe.calories)}</p>
      <a href="${recipe.url}" target="_blank">View full recipe</a>
    </div>
  `).join('');
}

export function displayShoppingList(recipes) {
  const allItems = recipes.flatMap(r => r.ingredients);
  const uniqueItems = [...new Set(allItems)];
  const list = document.getElementById('shopping-items');
  list.innerHTML = `<h3>🛒 Shopping List</h3><ul>${uniqueItems.map(item => `<li>${item}</li>`).join('')}</ul>`;
}

export function displayNutrition(recipes) {
  const totalCalories = recipes.reduce((sum, r) => sum + r.calories, 0);
  document.getElementById('nutrition-info').innerHTML = `<h3>Nutrition</h3><p>Total Calories: ${Math.round(totalCalories)}</p>`;
}

export function displayCost(recipes) {
  const cost = recipes.reduce((sum, r) => sum + parseFloat(r.cost), 0);
  document.getElementById('cost-estimate').innerHTML = `<h3>💰 Estimated Cost</h3><p>$${cost.toFixed(2)}</p>`;
}

  