export function valid(input) {
    const typeOfInput = input.dataset.tipo;
    if (input.validity.valid) {
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = showErrorMessage(typeOfInput, input);
    }
}

const typeOfError = ["valueMissing", "typeMismatch", "patternMismatch"]

const errorMessage = {
    name: {
        valueMissing: "This field can not be empty"
    },
    email: {
        valueMissing: "This field can not be empty",
        typeMismatch: "This email is not valid"
    },
    business: {
        valueMissing: "This field can not be empty",
        patternMismatch: "At least 6 to 12 characteres"
    },
    message: {
        valueMissing: "This field can not be empty",
        patternMismatch: "Max 300 characteres"
    }

}

function showErrorMessage(typeOfInput, input){
    let message = "";
    typeOfError.forEach((error) => {
        if(input.validity[error]){
            message =errorMessage[typeOfInput][error]
        }
    })
    return message
}
