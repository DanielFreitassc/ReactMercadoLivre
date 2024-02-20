const fetchProducts = async (query) => {

    const response = await fetch(`api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const data = await response.json();
    return data.results;
};
export default fetchProducts;