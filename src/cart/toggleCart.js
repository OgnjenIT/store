import { getElement } from "../utils.js";

const toggleCartBtn = getElement(".toggle-container")
const cartOverlay = getElement(".cart-overlay")
const closeBtn = getElement(".cart-close")


toggleCartBtn.addEventListener("click",()=>{
    cartOverlay.classList.add("show")
})
closeBtn.addEventListener("click",()=>{
    cartOverlay.classList.remove("show")
})
export const openCart = () => {
    cartOverlay.classList.add("show")
};
