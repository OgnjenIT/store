// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from '../utils.js';
import { openCart } from './toggleCart.js';
import { findProduct } from '../store.js';
import addToCartDOM from './addToCartDOM.js';
import { store } from '../store.js';
// set items

const cartItemCountDOM = getElement(".cart-item-count");
const cartItemsDOM = getElement(".cart-items");
const cartTotalDOM = getElement(".cart-total")

let cart = getStorageItem("cart")


export const addToCart = (id) => {
 let product = cart.find(cartItem =>{
  return id === cartItem.id
 })
 if(product){
    const amount = increaseAmount(id)
    const items = [...document.querySelectorAll(".cart-item-amount")]
    const newAmountDOM = items.find(value=>{
      return id === value.dataset.id
    })
    newAmountDOM.innerHTML = amount
 }
 else{
  const newProduct = store.find(item=>{
    return item.id === id 
  })
  newProduct.amount = 1
  addToCartDOM(newProduct)
  cart = [...cart, newProduct
  ] // prekopira niz i doda novi produkt
  
}
  setStorageItem("cart",cart)
  displayCartItemCount()

};
  


const increaseAmount = (id)=>{
  let newAmount;
  cart = cart.map(cartItem=>{

    if(cartItem.id === id)
      {
        cartItem.amount++
        newAmount = cartItem.amount
      }

    return cartItem
  })
  return newAmount
}

/////////////////////////////////////


const displayCartItemCount = ()=>{
  const itemCount = cart.reduce((total,item)=>{
    return total + item.amount
  },0)
  cartItemCountDOM.innerHTML = itemCount
}

/////////////////////////////////////

const displayCartItems = ()=>{
  cart.forEach(item=>{
    addToCartDOM(item)
  })
}
const init = ()=>{
  displayCartItems()
  displayCartItemCount()
}

window.addEventListener("DOMContentLoaded",init)