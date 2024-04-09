import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {
    const priceInput = getElement(".price-filter")
    const priceValue = getElement(".price-value")
    const prices = store.map(product => {
        return product.price
    })
    console.log(prices);
};

export default setupPrice;
