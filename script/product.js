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

function createDiv(wrapper){
    let b = document.createElement('div');
    let c = document.createElement('div');
    let d = document.createElement('div');
    let e = document.createElement('div');
    let f = document.createElement('div');
    let g = document.createElement('div');

    b.className = " initial-items-list";
    c.className = "row w-100";
    d.className = "col-12";
    e.className = "carousel slide";
    // e.id = "carousel2";
    f.className = "carousel-inner carousle-overflow";
    g.className = "carousel-item active";

    g.appendChild(wrapper);
    f.appendChild(g);
    e.appendChild(f);
    d.appendChild(e);
    c.appendChild(d);
    b.appendChild(c);

    return b;
}

function displayProduct() {

        let newproduct = document.getElementById("new-product-container");
        let outerdiv = document.createElement('div');
        let innerdiv = document.createElement('div');
        let cardwrapper = document.createElement('div');
        cardwrapper.className = "cards-wrapper "
        cardwrapper.id = "electronics"
        outerdiv.className = "boe-heading bg-light mt-3 p-2";
        innerdiv.className = "row mt-2 ms-2";
        let header = document.createElement('header');
        let h4 = document.createElement('h4');
        h4.textContent = "Electronics";
        header.appendChild(h4);
        innerdiv.appendChild(header);
        outerdiv.appendChild(innerdiv);
        newproduct.appendChild(outerdiv);

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
            newproduct.appendChild(createDiv(cardwrapper));
        }
   });
}
function displayFashionProducts(){
    let newproduct = document.getElementById("fashion-container");
    let outerdiv = document.createElement('div');
    let innerdiv = document.createElement('div');
    let cardwrapper = document.createElement('div');
    cardwrapper.className = "cards-wrapper "
    cardwrapper.id = "electronics"
    outerdiv.className = "boe-heading bg-light mt-3 p-2";
    innerdiv.className = "row mt-2 ms-2";
    let header = document.createElement('header');
    let h4 = document.createElement('h4');
    h4.textContent = "Tshirts, Shirts,Sweaters,Shoes";
    header.appendChild(h4);
    innerdiv.appendChild(header);
    outerdiv.appendChild(innerdiv);
    newproduct.appendChild(outerdiv);
    
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
            newproduct.appendChild(createDiv(cardwrapper));
            
        }
   });
}

function displayFurnitureProducts(){
    let newproduct = document.getElementById("furniture-container");
    let outerdiv = document.createElement('div');
    let innerdiv = document.createElement('div');
    let cardwrapper = document.createElement('div');
    cardwrapper.className = "cards-wrapper "
    cardwrapper.id = "electronics"
    outerdiv.className = "boe-heading bg-light mt-3 p-2";
    innerdiv.className = "row mt-2 ms-2";
    let header = document.createElement('header');
    let h4 = document.createElement('h4');
    h4.textContent = "Furniture";
    header.appendChild(h4);
    innerdiv.appendChild(header);
    outerdiv.appendChild(innerdiv);
    newproduct.appendChild(outerdiv);

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
            newproduct.appendChild(createDiv(cardwrapper));
        }
   });
}
function loadProducts() {
    if (products.some(product => product.category === "electronics")) {
        displayProduct();
    }
    if (products.some(product => product.category === "fashion")) {
        displayFashionProducts();
    }
    if (products.some(product => product.category === "furniture")) {
        displayFurnitureProducts();
    }
}