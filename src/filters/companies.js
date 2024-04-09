import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
    const companiesDOM = getElement(".companies")
    const companies = ["All", ...new Set(store.map(product => product.company))]

    companies.forEach(company => {
        const companyBtn = document.createElement("button")
        companyBtn.classList.add("company-btn")
        companyBtn.innerHTML = company
        companiesDOM.append(companyBtn)
    })
    companiesDOM.addEventListener("click", (e) => {
        if (e.target.innerHTML === "All") {
            display(store, getElement(".products-container"))
        }
        else {
            const filteredProducts = store.filter(product => {
                return product.company === e.target.innerHTML
            })
            display(filteredProducts, getElement(".products-container"))
        }
    })
};

export default setupCompanies;
