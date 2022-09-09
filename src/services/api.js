export async function getCategories() {
  // Implemente aqui
  const data = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const results = await data.json();
  return results;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const data = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const results = await data.json();
  return results;
}

export async function getProductById(id) {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  const data = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const results = await data.json();
  return results;
}
