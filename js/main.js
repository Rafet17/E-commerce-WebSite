
import headerFunc from "./header.js";
import productFunc from "./product.js";

//! add product to localStorage

async function getData(){
    const photos = await fetch("./js/data.json");
    const data = await photos.json();
   

   data ? localStorage.setItem("products",JSON.stringify(data)) : [];   
}

getData();


