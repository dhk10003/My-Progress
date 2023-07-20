const productName = document.querySelector('#add-name')
const productPrice = document.querySelector('#add-price')
const productQuantity = document.querySelector('#add-quantity')
const productImg = document.querySelector('#add-image')

const shippingRate = 15.00
const taxRate = 0.18

// we will use this number to give them a discount of 30%
const dampingRate = .70

// our array of products:
let products;

function getDataFromDatabase() {
    // parse converts a string to a javascript object
    products = JSON.parse(localStorage.getItem('products')) || []
}

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const newProduct =
    {
        name: productName.value,
        price: Number(productPrice.value),
        amount: Number(productQuantity.value),
        img: productImg.value
    }

    // make sure the object looks good
    console.log(newProduct)

    // push object to array of products
    products.push(newProduct)

    // set local storage to new array
    // stringify converts a javascript object to a string
    localStorage.setItem("products", JSON.stringify(products))

    // render the new product to the page:
    renderProduct(newProduct)

})

// function to render a single product
function renderProduct(product) {
    // const name = product.name
    // const img = product.img
    // const amount = product.amount
    // const price = product.price
    const { name, price, amount, img } = product
    const productPanel = document.querySelector('#product-panel')
    productPanel.innerHTML +=
        `
    <div class="card shadow-lg mb-3">
            <div class="row g-0">
              <div class="col-md-5">
                <img
                  src=${img}
                  class="w-100 h-100 rounded-start"
               />
              </div>
              <div class="col-md-7">
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <div class="product-price">
                    <p class="text-warning h2">$
                      <span class="damping-price">${(
            price * dampingRate
        ).toFixed(2)}</span>
                      <span class="h5 text-dark text-decoration-line-through">${price.toFixed(
            2
        )}</span>
                    </p>
                  </div>
                  <div
                    class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2"
                  >
                    <div class="quantity-controller">
                      <button class="btn btn-secondary btn-sm">
                        <i class="fas fa-minus"></i>
                      </button>
                      <p class="d-inline mx-4" id="product-quantity">${amount}</p>
                      <button class="btn btn-secondary btn-sm">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div class="product-removal mt-4">
                    <button class="btn btn-danger btn-sm w-100 remove-product">
                      <i class="fa-solid fa-trash-can me-2"></i>Remove
                    </button>
                  </div>
                  <div class="mt-2">
                    Product Total: $<span class="product-line-price">${(
            price *
            dampingRate *
            amount
        ).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `
    // add/update remove button event listeners:
    createEventRemoveBtns()
    // add/update quantity button event listeners:
    createEventQuantityBtns()

    calculateCardTotal()
}

// function to render products
function renderAllProducts() {
    if (!products.length) {
        return
    }

    products.forEach(product => {
        renderProduct(product)
    })
}


// function to calculate total

// event listeners for remove buttons
function createEventRemoveBtns() {
    // get a list of all remove buttons:
    const removeBtns = document.querySelectorAll('.remove-product')
    // loop through all remove buttons and add event listener:
    removeBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            remove(btn)
        })
    })
}

// remove function
function remove(btn) {
    console.log(btn)
    // btn.parentNode.parentNode.parentNode.parentNode.parentNode.remove()
    btn.closest('.card').remove()
    // we need to get the name of the product that we want to remove
    // we can get the name from the card-title
    const name = btn.closest('.card').querySelector('.card-title').textContent
    // "product"

    // then we need to filter the array of products
    // and create a new array MINUS the product that we want to remove
    products = products.filter(product => product.name !== name)

    // then set the local storage to the new array
    localStorage.setItem("products", JSON.stringify(products))
    if (!products.length) {
        localStorage.setItem('products', JSON.stringify(''))
    }
    // TODO: calculate total
}

// event listeners for quantity buttons
function createEventQuantityBtns() {
    const quantityDivs = document.querySelectorAll('.quantity-controller')

    quantityDivs.forEach((div) => {
        // amount ref:
        const amount = div.querySelector('#product-quantity')

        // minut button ref:
        const minus = div.querySelector('.fa-minus')

        // event listener for minus button
        minus.addEventListener('click', () => {
            amount.textContent = Number(amount.textContent) - 1
            if (Number(amount.textContent) < 1) {
                alert("Item will be removed.")
                // (see remove function)
                remove(minus)
            }
            updateTotal(amount)
        })
        // plus button ref:
        const plus = div.querySelector('.fa-plus')

        // event listener for plus button
        plus.addEventListener('click', () => {
            amount.textContent = Number(amount.textContent) + 1
            updateTotal(amount)
        })

    })
}

// updateTotal function:
function updateTotal(amount) {
    const name = amount.closest('.row').querySelector('.card-title').textContent
    console.log(`NAME IS: ${name}`)
    products.map((product) => {
        if (product.name === name) {
            product.amount = Number(amount.textContent)
        }
    })

    // update product total in DOM:
    const price = amount.closest('.row').querySelector('.damping-price')

    const productTotal = amount.closest('.row').querySelector(".product-line-price")

    productTotal.textContent = (
        Number(price.textContent) * Number(amount.textContent)
    ).toFixed(2);

    calculateCardTotal()
}


// get initial data from local storage:
getDataFromDatabase()

// render products
renderAllProducts()

// calculate total
function calculateCardTotal() {
    const productTotals = document.querySelectorAll('.product-line-price')

    const subtotal = [...productTotals].reduce(
        (acc, item) => acc + Number(item.textContent), 0
    )

    const taxPrice = subtotal * taxRate;
    const shipping = subtotal > 0 ? shippingRate : 0;
    const cardTotal = subtotal + shipping + taxPrice;

    document.querySelector(".subtotal").textContent = subtotal.toFixed(2);
    document.querySelector(".tax").textContent = taxPrice.toFixed(2);
    document.querySelector(".shipping").textContent = shipping.toFixed(2);
    document.querySelector(".total").textContent = cardTotal.toFixed(2);
}