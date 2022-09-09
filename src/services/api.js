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

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}

// usando referencia do stackoverflow https://stackoverflow.com/questions/2010892/how-to-store-objects-in-html5-localstorage
export function setLocalProducts(obj, products) {
  localStorage.setItem(obj, JSON.stringify(products));
}
// acessar os produtos do local storage:
export function getLocalProducts(obj) {
  return JSON.parse(localStorage.getItem(obj));
}
