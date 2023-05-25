//saving location input into local storage Rscime
var locationBtn = $('#searchBtn');
locationBtn.on('click', function(e){
    e.preventDefault();
    let locationText  = $('#locationInfo').val();
    //stores input location (locationText) under the key 'locationKey'
    localStorage.setItem('locationKey', locationText);
    console.log(locationText);
})