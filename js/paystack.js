function getCartTotal() {

    return cart.reduce(

        (sum,item)=>

            sum +
            (item.price * item.quantity),

        0

    );

}



function payWithPaystack() {
    if(cart.length === 0){

    alert(
        "Your cart is empty"
    );

    return;
}

    const totalAmount =
    getCartTotal();

    const email =
    document.getElementById(
        "customer-email"
    ).value;

    const name =
    document.getElementById(
        "customer-name"
    ).value;

    const phone =
    document.getElementById(
        "customer-phone"
    ).value;

    const handler =
    PaystackPop.setup({

        key:
        "pk_test_eee6b33471281c7b96d5dee177e1d92c1d8c15eb",

        email: email,

        amount:
        totalAmount * 100,

        currency: "GHS",

        metadata: {

            custom_fields: [

                {
                    display_name:
                    "Customer Name",

                    variable_name:
                    "customer_name",

                    value: name
                },

                {
                    display_name:
                    "Phone Number",

                    variable_name:
                    "phone_number",

                    value: phone
                }

            ]

        },

        callback: function(response){

            console.log(
                response.reference
            );

            openSummaryModal();

        },

        onClose: function(){

            console.log(
                "Payment window closed"
            );

        }

    });

    handler.openIframe();

}