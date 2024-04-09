// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
// specific
import { addToCart } from '../cart/setupCart.js';
import { singleProductUrl, getElement, formatPrice } from '../utils.js';
import { store } from '../store.js';

// selections
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
const colorsDOM = getElement('.single-product-colors');
const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');

// cart product
// let productID;

// show product when page loads

window.addEventListener("DOMContentLoaded", () => {
    loading.style.display = 'none'
    const productID = window.location.search.slice(4)

    const product = store.find(product => {
        return product.id === productID
    })
    const { name, company, image, price, colors } = product

    document.title = `${name.toUpperCase()} | Prodavnica`
    pageTitleDOM.innerHTML = `Proizvod | ${name}`
    imgDOM.src = image
    companyDOM.innerHTML = company
    priceDOM.innerHTML = formatPrice(price)
    titleDOM.innerHTML = name
    colors.forEach(color => {
        const span = document.createElement("span")
        span.classList.add("product-color")
        span.style.backgroundColor = color
        colorsDOM.appendChild(span)
    })
})
