let view;

require([
  // import widgets here
  "esri/Map",
  "esri/views/MapView"
], function(
  Map, // geographical representation
  MapView) // view.angle of the Map
  {
    
    let map = new Map({
      basemap: "gray-vector", // type of basemaps https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap
    });
    
    view = new MapView({
      container: "myMap", // the id of the container
      map: map,
      zoom: 8,
      center: [-117.168, 32.776] // initial position for the regions
    });
  }
);

document.getElementById("territories").addEventListener("change", mapCenterUpdate);

function mapCenterUpdate() {
  let selectedValue =  this.value;
  let newCoords  =  selectedValue.split(',');
  let longitude = parseFloat(newCoords[0]);
  let latitude = parseFloat(newCoords[1]);
  view.center = [longitude,latitude];
}