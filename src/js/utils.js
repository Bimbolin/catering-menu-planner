export function renderRecipes(recipes) {
    const container = document.getElementById('recipes');
    container.innerHTML = '';
  
    recipes.forEach(recipe => {
      const card = document.createElement('div');
      card.className = 'recipe-card';
      card.innerHTML = `
        <h3>${recipe.label}</h3>
        <img src="${recipe.image}" alt="${recipe.label}" width="100%" />
        <p><strong>Calories:</strong> ${Math.round(recipe.calories)}</p>
      `;
      container.appendChild(card);
    });
  }
  