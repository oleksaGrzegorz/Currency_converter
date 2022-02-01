{
    const calculateResult = (amountElement, currencyElement) => {
        const eur = 4.59;
        const usd = 4.07;
        const gbp = 5.50;

        switch (currencyElement) {
            case "EUR":
                return amountElement / eur;

            case "USD":
                return amountElement / usd;

            case "GBP":
                return amountElement / gbp;
        }
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        const resultElement = document.querySelector(".js-form__result");
        const amountElement = document.querySelector(".js-amount").value;
        const currencyElement = document.querySelector(".js-currency").value;
        const result = calculateResult(amountElement, currencyElement);
        resultElement.innerText = result.toFixed(2)+" "+currencyElement;
    };
    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit)
    };
    init();
}