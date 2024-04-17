import { formatPrice, getElement } from '../utils.js';

const addToCartDOM = (product) => {
  const cartItemsDOM = getElement(".cart-items")
    const article = document.createElement("article")
    article.classList.add("cart-item")
    article.setAttribute("data-id", product.id)
    article.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="cart-item-img">
          <div>
            <h4 class="cart-item-name">
             ${product.name}
            </h4>
            <p class="cart-item-price">
              ${formatPrice(product.price)}
            </p>
            <button class="cart-item-remove-btn" data-id=${product.id}>Obrisi</button>
          </div>
          
          <div>
            <button class="cart-item-increase-btn" data-id=${product.id}>
              <i class="fas fa-chevron-up"></i>
            </button>

            <p class="cart-item-amount" data-id=${product.id}> ${product.amount} </p>

            <button class="cart-item-decrease-btn" data-id=${product.id}>
              <i class="fas fa-chevron-down"></i>
            </button>

    `
    cartItemsDOM.appendChild(article)
};

export default addToCartDOM;
