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
var resetBtn = $('#resetButton');
var textBox = $('textarea');
resetBtn.on('click', function(){
    textBox.val("");
});

let country_code = {
    "USD" : "US",
    "EUR" : "FR",
    "CAD" : "CA",
    "GBP" : "GB",
    "CHF" : "CH",
}