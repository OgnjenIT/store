import { getStorageItem, setStorageItem } from './utils.js';
let store = getStorageItem("store");

const setupStore = (products) => {
    store = products.map((product) => {
        const {
            id,
            fields: { colors, company, name, featured, price, image: img },
        } = product
        const image = img[0].thumbnails.large.url

        return {
            id,
            colors,
            company,
            name,
            price,
            image,
            featured
        }
    })
    setStorageItem("store", store)
};
const findProduct = () => { };
export { store, setupStore, findProduct };
