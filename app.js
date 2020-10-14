var map;
var icon = "http://path/to/icon.png";
//var json = "http://path/to/universities.json";
var infowindow = new google.maps.InfoWindow();
var markers=[];
function initialize() {

  var mapProp = {
    center: new google.maps.LatLng(33.888630, 35.495480), //LLANDRINDOD WELLS
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById("map"), mapProp);
  //data are saved in data.js file
   console.log(data.universities.length);
  $.each(data.universities, function(key, data) {

    var latLng = new google.maps.LatLng(data.lat, data.lng);

    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      // icon: icon,
      title: data.title
    });

    markers.push(marker)

    var details = data.website + ", " + data.phone + ".";
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(details);
      infowindow.open(map, marker);
      });
    
  });

  // map.addDomListener(document.getElementById("location2"), "click", function(ev) {
  //   map.setCenter({lat:data.universities[1].lat, lng:data.universities[1].lng});
  //   });
 
// Path for cluster icons to be appended (1.png, 2.png, etc.)
const imagePath = "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m";

// Enable marker clustering for this map and these markers
const markerClusterer = new MarkerClusterer(map, markers, {imagePath: imagePath});
};

google.maps.event.addDomListener(window, 'load', initialize);

