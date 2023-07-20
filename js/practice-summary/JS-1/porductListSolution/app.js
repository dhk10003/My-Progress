import {products} from './products.js'

// container for products to be rendered to page:
const sectionCenter = document.querySelector('.section-center');

// container for buttons to be rendered to page:
const btnContainer = document.querySelector('.btn-container');

// function we can dynamically pass an array of products to be rendered 
const displayProducts = (products)=>{
    // for each product, create an element

    let display = products.map((product)=>{
        // this is where we return the element
        return(
        `
        <article class="product-item">
          <img
            src=${product.thumbnail}
            alt=${product.title}
            9=""
            class="photo"
          />
          <div class="item-info">
            <header>
              <h4>${product.title}</h4>
            </header>
            <p class="item-text">${product.description}</p>
            <h4 class="price">${product.price}</h4>
          </div>
        </article>
        `
        )
    })
    // join the array of elements (as strings) into one string
    // that we can use for innerHTML of the section container
    display = display.join('')
    // console.log(display)
    // append these elements to the sectionCenter
    sectionCenter.innerHTML = display
}

// dynamically create buttons for each category
const displayButtons = ()=>{
    let categories = ['all']
    // loop through products and if category is not in categories array, add it
    products.forEach((product)=>{
        if(!categories.includes(product.category)){
            categories.push(product.category)
        }
    })
    // we now have an array of strings for the categories
    console.log(categories)

    // we need to now create a button for each category:
    let categoryBtns = categories.map((category)=>{
        return(
            `
            <button type="button" class="filter-btn" data-id=${category}>
                ${category}
            </button>
            `
        )
    })
    // we now have an array of buttons as strings
    // join them into one string
    categoryBtns = categoryBtns.join('')
    // put the string of buttons into the btn-container div
    btnContainer.innerHTML = categoryBtns

    // filter-btn
    let filterBtns = document.querySelectorAll(".filter-btn")
    
    // loop through every button element, and add an event listener:
    filterBtns.forEach((item ) => {
        // for each element, we add the event listener, passing the whole event as an argument to our callback function
        item.addEventListener("click", (e) =>{
            // data-id attribute value:
            console.log(e.target.dataset.id)
            // "smartphones"
            
            // get category
            // here we store the value of the data-id attribute of the button that was clicked
            const category = e.target.dataset.id
            // "smartphones"
            
            // create new array of products that match category
            let productsOfCategory = 
                products.filter(
                    (product)=> 
                        product.category === category 
                )
                // filter returns a new array of products that match the category
                // filter takes a callback function as an argument
                // this callback function takes a single product/element as an argument
                // this callback function returns true or false
                // if the callback returns true, the element will be added to the new array
                // if the callback returns false, the element will not be added to the new array
            
            console.log(productsOfCategory)
            // what do we do if category is all?
            if (category === "all") {
                displayProducts(products)
            }
            else {
                displayProducts(productsOfCategory)
            } 
        })
    })
}

window.addEventListener('DOMContentLoaded', ()=>{
    displayProducts(products)
    displayButtons()
})