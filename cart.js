let carts = document.querySelectorAll(".add-cart");


let products = [
    {
        name: "Python",
        tag: "python",
        price: 16,
        incart: 0
    },
    {
        name: "Java",
        tag: "java",
        price: 18,
        incart: 0
    },
    {
        name: "Complete Webdevelopment",
        tag: "completewebdevelopment",
        price: 15,
        incart: 0
    },
    {
        name: "Sql",
        tag: "sql",
        price: 10,
        incart: 0
    },
    {
        name: "JQuery",
        tag: "jquery",
        price: 20,
        incart: 0
    },


]

for (let i=0; i < carts.length; i++) {
   carts[i].addEventListener("click", () => {
      cartNumbers(products[i]);
      totalCost(products[i])
   
   
    })
}


function cartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    
    if(productNumbers) {
        document.querySelector('.cart span').textcontent = produvtNumbers
    }
}

function cartNumbers(product) {
    
    let productNumbers = localStorage.getItem("cartNumbers");

    productNumbers = parseInt(productNumbers);

    if(productNumbers ){
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', ProductNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }

    setItems(product)
}

function setItems(products) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    console.log("My cartItems are", cartItems);

    if(cartItems != null) {

        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].incart +=1;

    } else {
        product.inCart = 1;
        cartItems = {
          [product.tag]: product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    console.log("The product price is", product.price);
    localStorage.setItem("totalCost", product.price);
}



onLoadCartNumbers();
