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


//let map;


//async function initMap() {
//    const position = { lat: 54.5260, lng: 15.2551 };
  //  const { Map } = await google.maps.importLibrary("maps");
 //  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
//
 //   map = new Map(document.getElementById("map"), {
 //       zoom: 4,
 //       center: position,
  //      mapId: "Jetlagged_MAP_ID",
   //   });

 
  //    const marker = new AdvancedMarkerElement({
 //       map: map,
 //       position: position,
  //      title: "Europe",
 //     });

  
 //    }
    
 //   initMap();


 const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let labelIndex = 0;

 function initMap() {
    const Europe = { lat: 54.5260, lng: 15.2551 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: Europe,
    });

    google.maps.event.addListener(map, "click", (event) => {
        addMarker(event.latLng, map);
      });
      addMarker(bangalore, map);
    }
    function addMarker(location, map) {
        new google.maps.Marker({
            position: location,
            label: labels[labelIndex++ % labels.length],
            map: map,
          });
        }
        
        window.initMap = initMap;
        