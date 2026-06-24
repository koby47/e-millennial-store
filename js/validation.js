const nameInput =
document.getElementById(
    "customer-name"
);

const emailInput =
document.getElementById(
    "customer-email"
);

const phoneInput =
document.getElementById(
    "customer-phone"
);
function validateName(){

    const value =
    nameInput.value.trim();

    const error =
    document.getElementById(
        "name-error"
    );

    if(value === ""){

        error.textContent =
        "Name is required";

        nameInput.classList.add(
            "input-error"
        );

        return false;
    }

    error.textContent = "";

    nameInput.classList.remove(
        "input-error"
    );

    nameInput.classList.add(
        "input-success"
    );

    return true;
}

function validateEmail(){

    const value =
    emailInput.value.trim();

    const error =
    document.getElementById(
        "email-error"
    );

    const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!regex.test(value)){

        error.textContent =
        "Enter a valid email";

        emailInput.classList.add(
            "input-error"
        );

        return false;
    }

    error.textContent = "";

    emailInput.classList.remove(
        "input-error"
    );

    emailInput.classList.add(
        "input-success"
    );

    return true;
}

function validatePhone(){

    const value =
    phoneInput.value.trim();

    const error =
    document.getElementById(
        "phone-error"
    );

    if(value.length < 10){

        error.textContent =
        "Phone must be at least 10 digits";

        phoneInput.classList.add(
            "input-error"
        );

        return false;
    }

    error.textContent = "";

    phoneInput.classList.remove(
        "input-error"
    );

    phoneInput.classList.add(
        "input-success"
    );

    return true;
}

nameInput.addEventListener(
    "blur",
    validateName
);

emailInput.addEventListener(
    "blur",
    validateEmail
);
phoneInput.addEventListener(
    "blur",
    validatePhone
);
function validateForm(){

    const validName =
    validateName();

    const validEmail =
    validateEmail();

    const validPhone =
    validatePhone();

    return (
        validName &&
        validEmail &&
        validPhone
    );
}
document
.getElementById(
    "checkout-btn"
)
.addEventListener(
    "click",
    ()=>{

        if(
            !validateForm()
        ){

            return;
        }

      try {

    closeCartModal();

    payWithPaystack();

} catch(error) {

    console.error(error);

}

    }
);