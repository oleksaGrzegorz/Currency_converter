let euroElement = document.querySelector(".js-euro");
let formElement = document.querySelector(".js-form");
let form__resultElement = document.querySelector(".js-form__result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

let euro = euroElement.value;

let form__result = euro * 4.56;

form__resultElement.innerText = form__result.toFixed(2);

})