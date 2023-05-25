var APIkey = "bdAaYSOFUtzpTl31szeCTwxkqTQkbXkPhqVSXr3O"; 

async function getExchangeRate(fromCurrency, toCurrency) {
    const url = `https://api.freecurrencyapi.com/v1/latest`;
    const params = {
      from_currency: fromCurrency,
      to_currency: toCurrency,
    };
    const response = await fetch(url, {
      method: "GET",
      params,
    });
    const data = await response.json();
    return data.rates[toCurrency];
  };
  
  const main = async () => {
    const fromCurrency = "USD";
    const toCurrency = "EUR";
    const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);
  
    const amount = 100;
    const convertedAmount = amount * exchangeRate;
  
    console.log(`${amount} ${fromCurrency} is equal to ${convertedAmount} ${toCurrency}.`);
  };
  
  main();