const APP_ID = 'e17143ee';
const APP_KEY = 'a64911484b3d4308f5ed3308706f2b79';

export async function fetchRecipes(ingredients, diet) {
  const query = ingredients.split(',').map(i => i.trim()).join(',');
  const dietParam = diet ? `&diet=${diet}` : '';
  const endpoint = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&to=6${dietParam}`;
  
  const res = await fetch(endpoint);
  const data = await res.json();
  
  return data.hits.map(hit => ({
    label: hit.recipe.label,
    ingredients: hit.recipe.ingredientLines,
    calories: hit.recipe.calories,
    image: hit.recipe.image,
    url: hit.recipe.url,
    cost: (hit.recipe.ingredientLines.length * 1.5).toFixed(2)  // Simple cost estimate
  }));
}

