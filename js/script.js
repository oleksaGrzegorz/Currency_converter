let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let form__resultElement = document.querySelector(".js-form__result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let form__result;

    switch (currency) {
        case "EUR":
            form__result = amount / 4.59;
            break;

        case "GBP":
            form__result = amount / 5.50;
            break

        case "USD":
            form__result = amount / 4.07;
            break;
    }

    form__resultElement.innerHTML = form__result.toFixed(2);

})
