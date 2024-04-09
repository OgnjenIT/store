import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const setupSearch = (store) => {
    const nameInput = getElement(".search-input")
    nameInput.addEventListener("keyup", () => {
        const value = nameInput.value
        const searchedProducts = store.filter((product) => {
            return product.name.toLowerCase().includes(value.toLowerCase())
        })
        if (searchedProducts.length < 1) {
            const container = getElement(".products-container")
            container.innerHTML = `<h3 class="filter-error">Nema proizvoda pod ${value} nazivom.</h3>`
        }
        else {
            display(searchedProducts, getElement(".products-container"))
        }
    })
};

export default setupSearch;
