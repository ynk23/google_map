var mapCanvas;
function intialize() {
  //Create a map
  mapCanvas = new google.maps.Map(document.getElementById("map_canvas"));
  mapCanvas.setCenter(new google.maps.LatLng(35.564080, 139.625808));
  mapCanvas.setZoom(12);
  mapCanvas.setMapTypeId(google.maps.MapTypeId.ROADMAP);
  
  //marker : shinagawa 1
  var marker1 = new google.maps.Marker();
  marker1.setPosition(new google.maps.LatLng(35.515213, 139.462840));
  marker1.setMap(mapCanvas);
  
  //marker : shinagawa 2
  var marker2 = new google.maps.Marker();
  marker2.setPosition(new google.maps.LatLng(35.509234, 139.464187));
  marker2.setMap(mapCanvas);
  
  //marker : shinagawa 3
  var marker3 = new google.maps.Marker();
  marker3.setPosition(new google.maps.LatLng(35.611595, 139.595427));
  marker3.setMap(mapCanvas);
  
  //marker : shinagawa 4
  var marker4 = new google.maps.Marker();
  marker4.setPosition(new google.maps.LatLng(35.525259, 139.624334));
  marker4.setMap(mapCanvas);
  
  //marker : shinagawa 5
  var marker5 = new google.maps.Marker();
  marker5.setPosition(new google.maps.LatLng(35.626089, 139.556544));
  marker5.setMap(mapCanvas);
  
  //marker : shinagawa 6,7
  var marker6 = new google.maps.Marker();
  marker6.setPosition(new google.maps.LatLng(35.530417, 139.501372));
  marker6.setMap(mapCanvas);
  
  //marker : shinagawa 8
  var marker8 = new google.maps.Marker();
  marker8.setPosition(new google.maps.LatLng(35.532148, 139.490089));
  marker8.setMap(mapCanvas);
  
  //marker : shinagawa 9
  var marker9 = new google.maps.Marker();
  marker9.setPosition(new google.maps.LatLng(35.540562, 139.500909));
  marker9.setMap(mapCanvas);
  
  //marker : shinagawa 10
  var marker10 = new google.maps.Marker();
  marker10.setPosition(new google.maps.LatLng(35.587718, 139.640796));
  marker10.setMap(mapCanvas);
  
  //marker : shinagawa 11 - 13
  var marker11 = new google.maps.Marker();
  marker11.setPosition(new google.maps.LatLng(35.535388, 139.680906));
  marker11.setMap(mapCanvas);
  
  //marker : shinagawa
  var markerA = new google.maps.Marker();
  markerA.setPosition(new google.maps.LatLng(35.611971, 139.750580));
  markerA.setMap(mapCanvas);
  
  //marker : shin-yokohama
  var marker20 = new google.maps.Marker();
  marker20.setPosition(new google.maps.LatLng(35.504328, 139.567975));
  marker20.setMap(mapCanvas);
  
  //marker : shin-yokohama
  var marker21 = new google.maps.Marker();
  marker21.setPosition(new google.maps.LatLng(35.504271, 139.568148));
  marker21.setMap(mapCanvas);
  
  //marker : shin-yokohama
  var marker22 = new google.maps.Marker();
  marker22.setPosition(new google.maps.LatLng(35.546105, 139.450404));
  marker22.setMap(mapCanvas);
  
  //marker : shin-yokohama
  var markerB = new google.maps.Marker();
  markerB.setPosition(new google.maps.LatLng(35.511157, 139.620731));
  markerB.setMap(mapCanvas);
  
}
google.maps.event.addDomListener(window, "load", intialize);
var marker1 = new google.maps.Marker();
marker1.setPosition(new google.maps.LatLng(35.515213, 139.462840));
marker1.setMap(mapCanvas);