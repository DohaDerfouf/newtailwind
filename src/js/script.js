
$(document).ready(function() {
    $('#getWeatherBtn').on('click', function() {
        var cityname = $('#city').val();
        if (cityname !== '') {
            getWeather(cityname);
        } else {
            $('#message').text('Veuillez entrer le nom d\'une ville.');
        }
    });
});
  
  function getWeather(cityName) {
   
    var apikey = '00350e6bc87e4098b11141303232811';
    var url = 'http://api.weatherapi.com/v1/forecast.json?key=' + apikey + '&q=' + cityName + '&days=3&aqi=no&alerts=no&lang=(navigator.language || navigator.userLanguage).substring(0, 2);';
  
    $.ajax({
      url: url,
      method: 'GET',
      success: function(response) {
        // Affichage des données dans le HTML
        $('#cityname').text(response.location.name);
        $('#tmp').text(response.current.temp_c + '°C');
        $('#condition').text(response.current.condition.text);
        $('#icon').attr('src', 'https:' + response.current.condition.icon);
   console.log(response)   },
      error: function(status, error) {
        alert('Erreur lors de la récupération des données météorologiques.');
        console.error(status + ': ' + error);
        
      }
    });
  }
  