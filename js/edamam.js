
const APP_ID = 'your_edamam_app_id';
const APP_KEY = 'your_edamam_app_key';

export async function fetchRecipes(ingredients, diet) {
  const query = ingredients.split(',').join(',');
  const dietParam = diet ? `&diet=${diet}` : '';
  const endpoint = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&to=6${dietParam}`;
  const res = await fetch(endpoint);
  const data = await res.json();

  return data.hits.map(hit => ({
    label: hit.recipe.label,
    image: hit.recipe.image,
    url: hit.recipe.url,
    calories: hit.recipe.calories,
    ingredients: hit.recipe.ingredientLines,
    cost: (hit.recipe.ingredientLines.length * 1.5).toFixed(2)
  }));
}
