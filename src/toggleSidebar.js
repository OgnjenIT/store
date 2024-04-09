import { getElement } from './utils.js';

const toggleNavBtn = getElement(".toggle-nav")
const sidebarOverlay = getElement(".sidebar-overlay")
const closeBtn = getElement(".sidebar-close")


toggleNavBtn.addEventListener("click",()=>{
    sidebarOverlay.classList.add("show")
})
closeBtn.addEventListener("click",()=>{
    sidebarOverlay.classList.remove("show")
})
