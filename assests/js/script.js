feature/clearButtons
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

  //saving location input into local storage Rscime
var locationBtn = $('#searchBtn');
locationBtn.on('click', function(e){
    e.preventDefault();
    let locationText  = $('#locationInfo').val();
    //stores input location (locationText) under the key 'locationKey'
    localStorage.setItem('locationKey', locationText);
    console.log(locationText);
})

// Victoria 
document.addEventListener("DOMContentLoaded", function() {
  var saveButtons = document.querySelectorAll(".saveButton");
  var textAreas = document.querySelectorAll("textarea");

  // Taking the saved text to local storage 
  textAreas.forEach(function(textArea, index) {
    var savedText = localStorage.getItem("savedText_" + index);
    if (savedText) {
      textArea.value = savedText;
    }
  });

  saveButtons.forEach(function(button, index) {
    button.addEventListener("click", function() {
      var textBox = textAreas[index];
      var savedText = textBox.value;
      // Saving it!!
      localStorage.setItem("savedText_" + index, savedText);
      console.log("Saved text:", savedText);
    });
  });
});

//clear buttons for forms
var resetBtn = $('.resetButton');
var textBox = $('textarea');
resetBtn.on('click', function(){
    textBox.val("");
});

