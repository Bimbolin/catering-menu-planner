
export function displayWeather(data) {
  document.getElementById('weather-content').innerHTML = `
    <p>Weather in ${data.city}: ${data.temp}°C - ${data.condition}</p>
    <img src="${data.icon}" alt="${data.condition}" />
  `;
}

export function displaySeasonal(temp) {
  const suggestion = temp < 15
    ? "🍲 It's chilly! How about a hot soup?"
    : "🥗 Nice weather! Try a fresh salad!";
  document.getElementById('seasonal-suggestion').textContent = suggestion;
}

export function displayRecipes(recipes) {
  document.getElementById('recipe-list').innerHTML = recipes.map(r => `
    <div class="card">
      <h3>${r.label}</h3>
      <img src="${r.image}" alt="${r.label}" width="100" />
      <p>${r.ingredients.join(', ')}</p>
      <p>Calories: ${Math.round(r.calories)}</p>
      <a href="${r.url}" target="_blank">View Recipe</a>
    </div>
  `).join('');
}

export function displayShoppingList(recipes) {
  const all = recipes.flatMap(r => r.ingredients);
  const unique = [...new Set(all)];
  document.getElementById('shopping-items').innerHTML = `
    <h3>🛒 Shopping List</h3>
    <ul>${unique.map(i => `<li>${i}</li>`).join('')}</ul>
  `;
}

export function displayNutrition(recipes) {
  const totalCalories = recipes.reduce((sum, r) => sum + r.calories, 0);
  document.getElementById('nutrition-info').innerHTML = `
    <h3>Nutrition</h3>
    <p>Total Calories: ${Math.round(totalCalories)}</p>
  `;
}

export function displayCost(recipes) {
  const total = recipes.reduce((sum, r) => sum + parseFloat(r.cost), 0);
  document.getElementById('cost-estimate').innerHTML = `
    <h3>💰 Estimated Cost</h3>
    <p>$${total.toFixed(2)}</p>
  `;
}
