
import headerFunc from "./header.js";
import productFunc from "./product.js";

//! add product to localStorage start

(async function getData(){
    const photos = await fetch("./js/data.json");
    const data = await photos.json();
   

   data ? localStorage.setItem("products",JSON.stringify(data)) : [];   
   productFunc();
})();

//! add product to localStorage start




const cartItems = document.querySelector(".header-cart-count");

cartItems.innerHTML = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length:"0";