import { formatPrice, getElement } from './utils.js';
import { addToCart } from './cart/setupCart.js';
const display = (products, element) => {
    element.innerHTML = products.map(product => {
        const { id, name, image, price } = product
        return `<article class="product">
        <div class="product-container">
          <img src="${image}" alt="${name}" class="product-img img">
          <div class="product-icons">
            <a href="product.html?id=${id}" class="product-icon">
              <i class="fas fa-search"></i>
            </a>
            <button class="product-cart-btn product-icon" data-id="${id}">
              <i class="fas fa-shopping-cart"></i>
            </button>
          </div>
        </div>
        <footer>
          <p class="product-name">${name}</p>
          <h4 class="product-price">${formatPrice(price)}</h4>
        </footer>
      </article>`
    }).join("")
    const addToCartBtns = document.querySelectorAll(".product-cart-btn")
    addToCartBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            addToCart(btn.dataset.id)

        })
    })
}
//     addToCartBtn.addEventListener("click", () => {
//         addToCart(id)
//     })
// };

export default display;
