
import headerFunc from "./header.js";
import productFunc from "./product.js";
import searchFunc from "./search.js";

//! add product to localStorage start
(async function () {
  const photos = await fetch("../js/data.json");
  const data = await photos.json();

  data ? localStorage.setItem("product", JSON.stringify(data)) : [];
  productFunc(data);
  searchFunc(data);
})();
//! add product to localStorage end

//! add cartItems to localStorage start
const cartItems = document.querySelector(".header-cart-count");

cartItems.innerHTML = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : "0";
//! add cartItems to localStorage end

//! modal dialog start

const modalDialogDOM = document.querySelector(".modal-dialog");
const modalContentDOM = document.querySelector(".modal-dialog .modal-content");
const btnCloseDialog = document.querySelector(".modal-dialog .modal-close");
btnCloseDialog.addEventListener("click", function () {
modalDialogDOM.classList.remove("show");
});

document.addEventListener("click", (e)=>{
if(!e.composedPath().includes(modalContentDOM)){
  modalDialogDOM.classList.remove("show")
}
});

setTimeout(() =>{
  modalDialogDOM.classList.add("show");
}, 3000)

//! modal dialog end

