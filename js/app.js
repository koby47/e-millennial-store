//app.js
const productsGrid = document.getElementById("products-grid");
const cartCount = document.getElementById("cart-count");
const cartModal = document.getElementById("cart-modal");
const summaryModal =
document.getElementById(
    "summary-modal"
);

document
.getElementById(
    "summary-close-btn"
)
.addEventListener(
    "click",
    ()=>{
        closeSummaryModal();
        resetStore();
    }
);
function openSummaryModal(){

    renderSummary();

    summaryModal.classList.add(
        "show"
    );

}

function closeSummaryModal(){

    summaryModal.classList.remove(
        "show"
    );

}

function openCartModal(){

    renderCartItems();

    cartModal.classList.add(
      "show"
    );

}
function closeCartModal(){

    cartModal.classList.remove("show");

}
document
.getElementById(
"continue-shopping-btn"
)
.addEventListener(
"click",
closeCartModal
);

cartModal.addEventListener(
"click",
(e)=>{

    if(
      e.target === cartModal
    ){

      closeCartModal();

    }

});


function renderProducts() {
  productsGrid.innerHTML = "";

  products.forEach((product) => {
    const inCart = cart.some((item) => item.id === product.id);

    productsGrid.innerHTML += `

      <div class="product-card">

          <div class="product-image-container">

              <img
                  src="${product.image}"
                  alt="${product.name}"
              >

              <div class="price-overlay">

                  <p>Price</p>

                  <h2>
                    ₵${product.price.toLocaleString()}
                  </h2>

              </div>

          </div>

          <h3>${product.name}</h3>

          <button
              class="add-cart-btn
              ${inCart ? "remove-btn" : ""}"
              onclick="toggleCart('${product.id}')"
          >

            ${inCart ? "REMOVE FROM CART" : "ADD TO CART"}

          </button>

      </div>

    `;
  });
}
renderProducts();
