document.addEventListener("DOMContentLoaded", loadProducts);
let products = JSON.parse(localStorage.getItem("products")) || [];

function createcardbody(product){
    let cardbody = document.createElement('div');
    let mrp = document.createElement('p');
    let desc = document.createElement('p');
    let header = document.createElement('h5');
    cardbody.className = "card-body";
    header.className = "card-title text-center";
    desc.className = "card-text text-center";
    mrp.className = "card-text text-center";
    header.innerText=product.name;
    mrp.innerText = "$"+ product.price;
    desc.innerText = product.description;

    cardbody.appendChild(header);
    cardbody.appendChild(desc);
    cardbody.appendChild(mrp)

    return cardbody;

}

function displayProduct() {
   let cardwrapper = document.getElementById("electronics");
   products.forEach((product) => {
        if (product.category === "electronics") {
            let card = document.createElement('div');
            card.className = "cards";
            let image = document.createElement('img');
            image.src=product.img;
            image.alt = "Product-image";
            image.className ="card-img-top ";

            card.appendChild(image);
            card.appendChild(createcardbody(product));
            cardwrapper.appendChild(card);
        }
   });
}
function displayFashionProducts(){
    let cardwrapper = document.getElementById("fashion");
    products.forEach((product) => {
        if(product.category == "fashion"){
            let card = document.createElement('div');
            card.className = "cards";
            let image = document.createElement('img');
            image.src=product.img;
            image.alt = "Product-image";
            image.className ="card-img-top ";
        
            card.appendChild(image);
            card.appendChild(createcardbody(product));
            cardwrapper.appendChild(card);
        }
   });
}

function displayFurnitureProducts(){
    let cardwrapper = document.getElementById("furniture");
    products.forEach((product) => {
        if(product.category == "furniture"){
            let card = document.createElement('div');
            card.className = "cards";
            let image = document.createElement('img');
            image.src=product.img;
            image.alt = "Product-image";
            image.className ="card-img-top ";
        
            card.appendChild(image);
            card.appendChild(createcardbody(product));
            cardwrapper.appendChild(card);
        }
   });
}
function loadProducts() {
    displayProduct();
    displayFashionProducts();
    displayFurnitureProducts();
}