const form = document.getElementById('productForm');
const editform = document.getElementById('editForm');
const applyfilter = document.getElementById('filter');
const toastLiveExample = document.getElementById('liveToast')
let products = JSON.parse(localStorage.getItem("products")) || [];

function generateId(){
    let r = "#" + Math.random().toString(36).substring(2, 6);
    return r;
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let name = document.getElementById('productName').value;
    let category =document.getElementById('productCategory').value;
    let price = document.getElementById('price').value;
    let description = document.getElementById('description').value;
    let img = document.getElementById('productImage').files[0];

        if (name && price && description && img) {
            const reader = new FileReader();
            try {
                reader.onload = function () {
                    if(img.size<600000){
                        let imgURL = reader.result;
                        products = JSON.parse(localStorage.getItem("products")) || [];
                        let newProduct = { id : generateId(), name, category, price, description, img: imgURL };
                        let exists = products.some(prod => {
                            if (prod.name === newProduct.name) {
                                return prod.name;
                            }
                        });
                        if (!exists) {
                            products.push(newProduct);
                            localStorage.setItem("products", JSON.stringify(products));
                            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
                            toastBootstrap.show()
                        } else {
                            alert("product with same name already exists")
                        }
                    }
                    else{
                        alert("file to large max(500kb) !");
                    }
                }
                reader.readAsDataURL(img);
            } catch (error) {
                    console.log(error.message);    
            }
        }
        else {
            alert('Please Enter Details !')
        }
});