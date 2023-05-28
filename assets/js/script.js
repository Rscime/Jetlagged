const dropList = document.querySelectorAll(".drop-list select"),
fromCurrency = document.querySelector(".from select"),
toCurrency = document.querySelector(".to select"),
getButton = document.querySelector(".wrapper button");
for (let i = 0; i < dropList.length; i++) {
    for(currency_code in country_code){
        let selected;
        if(i == 0){
            selected = currency_code == "USD" ? "selected" : "";
        }else if(i == 1){
            selected = currency_code == "EUR" ? "selected" : "";
        }
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;

        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
}

window.addEventListener("load", () =>{
    getExchangeRate();
});

getButton.addEventListener("click", e =>{
    e.preventDefault();
    getExchangeRate();
});

function getExchangeRate(){
    const amount = document.querySelector(".amount input");
    exchangeRateTxt = document.querySelector(".exchange-rate");
    let amountVal = amount.value;
    if(amountVal == "" || amountVal == "0"){
        amount.value = "1";
        amountVal = 1;

    };
    
    exchangeRateTxt.innerText = "Getting Exchange Rate...";
    let url = `https://v6.exchangerate-api.com/v6/76664b0d7885a7a9650b4c2f/latest/${fromCurrency.value}`;
    fetch(url).then(response => response.json()).then(result => {
        let exchangeRate = result.conversion_rates[toCurrency.value]
        let totalExchangeRate = (amountVal * exchangeRate).toFixed(2)
        exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`;
    })
}