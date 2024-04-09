const allProductsUrl = "https://course-api.com/javascript-store-products";
const singleProductUrl =
  "https://course-api.com/javascript-store-single-product";


const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

const formatPrice = (price) => {
  const formattedPrice = new Intl.NumberFormat("BA-BA", {
    style: 'currency',
    currency: 'BAM'
  }).format(price / 100)
  return formattedPrice;
};

const getStorageItem = (key) => {
  if (localStorage.getItem(key)) {
    const data = JSON.parse(localStorage.getItem(key))
    return data;
  }
  else {
    return []
  }
};

const setStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
};

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
};
