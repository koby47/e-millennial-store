//cart.js
let cart = [];

function toggleCart(productId) {

  const existingItem = cart.find(
    item => item.id === productId
  );

  if (existingItem) {

    cart = cart.filter(
      item => item.id !== productId
    );

  } else {

    const product = products.find(
      item => item.id === productId
    );

    cart.push({
      ...product,
      quantity: 1
    });

  }

  updateCartCount();

  renderProducts();

  console.log(cart);
}

function updateCartCount() {

  cartCount.textContent = cart.length;

}

function renderCartItems(){

    const cartBody =
    document.getElementById(
      "cart-items-body"
    );

    cartBody.innerHTML = "";

    if(cart.length === 0){

    cartBody.innerHTML = `
        <tr>
            <td colspan="5">
                Your cart is empty
            </td>
        </tr>
    `;

    document.getElementById(
        "cart-total"
    ).textContent = "₵0";

    return;
}

    cart.forEach(
      (item,index)=>{

        cartBody.innerHTML += `

        <tr>

            <td>${index+1}</td>

            <td>${item.name}</td>

            <td>
                ₵${(
                  item.price *
                  item.quantity
                ).toLocaleString()}
            </td>

            <td>

                <button
                    class="quantity-btn"
                    onclick="decreaseQuantity('${item.id}')"
                >
                    -
                </button>

                ${item.quantity}

                <button
                    class="quantity-btn"
                    onclick="increaseQuantity('${item.id}')"
                >
                    +
                </button>

            </td>

            <td>

                <button
                    class="remove-btn"
                    onclick="removeItem('${item.id}')"
                >
                    Remove
                </button>

            </td>

        </tr>

        `;
    });

    calculateTotal();

}
function increaseQuantity(productId) {

    const item = cart.find(
        item => item.id === productId
    );

    if(item){

        item.quantity++;

        renderCartItems();

    }
}

function decreaseQuantity(productId) {

    const item = cart.find(
        item => item.id === productId
    );

    if(item && item.quantity > 1){

        item.quantity--;

        renderCartItems();

    }
}

function removeItem(productId) {

    cart = cart.filter(
        item => item.id !== productId
    );

    updateCartCount();

    renderCartItems();

    renderProducts();

}

function calculateTotal() {

    const total = cart.reduce(

        (sum,item)=>

            sum +
            (item.price * item.quantity),

        0

    );

    document.getElementById(
        "cart-total"
    ).textContent =
    `₵${total.toLocaleString()}`;

}

function renderSummary(){

    const summary =
    document.getElementById(
        "summary-details"
    );
  const customerName = document.getElementById(
    "customer-name"
).value.trim();

document.getElementById(
    "success-message"
).innerHTML =
`Thank You, <span class="customer-name">${customerName}</span>, Your Order Has Been Received`;
    summary.innerHTML = "";

    cart.forEach(item => {

        summary.innerHTML += `

            <div
                class="summary-item"
            >

                <span>

                    ${item.name}

                    x${item.quantity}

                </span>

                <span>

                    ₵${(
                        item.price *
                        item.quantity
                    ).toLocaleString()}

                </span>

            </div>

        `;

    });

    summary.innerHTML += `

        <hr>

        <div
            class="summary-item"
        >

            <strong>Total</strong>

            <strong>

                ₵${getCartTotal()
                    .toLocaleString()}

            </strong>

        </div>

    `;
}

function resetStore(){

    cart = [];

    updateCartCount();

    renderProducts();

    document.getElementById(
        "customer-name"
    ).value = "";

    document.getElementById(
        "customer-email"
    ).value = "";

    document.getElementById(
        "customer-phone"
    ).value = "";

}