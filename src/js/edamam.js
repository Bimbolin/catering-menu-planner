const APP_ID = 'your_edamam_app_id';
const APP_KEY = 'your_edamam_app_key';

export async function fetchRecipes(ingredient) {
  const endpoint = `https://api.edamam.com/search?q=${ingredient}&app_id=${APP_ID}&app_key=${APP_KEY}&to=6`;
  const res = await fetch(endpoint);
  const data = await res.json();
  return data.hits.map(hit => hit.recipe);
}
