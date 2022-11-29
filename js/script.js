console.log("Dzień dobry! :)");

let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.6884;
let rateUSD = 4.5111;
let rateCHF = 4.7729;
let rateGBP = 5.4497;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;

        case "USD":
            result = amount / rateUSD;
            break;

        case "CHF":
            result = amount / rateCHF;
            break;

        case "GBP":
            result = amount / rateGBP;
            break;

    }

    resultElement.innerHTML = `${amount.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
});