import { valid } from "./index.js";

const inputs = document.querySelectorAll(".input");

inputs.forEach((element) => {
    element.addEventListener('blur', (element) => {
        valid(element.target)
    })
});