import { formatPrice, getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {
    const priceInput = getElement(".price-filter")
    const priceValue = getElement(".price-value")
    const prices = store.map(product => product.price)
    const maxPrice = Math.max(...prices)
    priceInput.max = maxPrice
    priceInput.value = maxPrice
    priceValue.innerHTML = `Cijena do ${formatPrice(priceInput.value)}`
    priceInput.addEventListener("input", () => {
        const value = priceInput.value
        const filteredStore = store.filter(product => {
            return product.price <= value
        })
        priceValue.innerHTML = `Cijena je do ${formatPrice(value)}`

        if (filteredStore.length < 1) {
            const container = getElement(".products-container")
            container.innerHTML = `<h3 class="filter-error">Nema proizvoda do < ${formatPrice(value)} > </h3>`
        }
        else {
            display(filteredStore, getElement(".products-container"))
        }
    })
};

export default setupPrice;
