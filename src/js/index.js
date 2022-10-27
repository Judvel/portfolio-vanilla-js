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
        valueMissing: "Este campo no puede estar vacio"
    },
    email: {
        valueMissing: "Este campo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    business: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Al menos 6 a 12 caracteres"
    },
    message: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "Maximo 300 caracteres"
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
