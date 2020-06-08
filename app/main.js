let view;
let map;
let initialPosition = [-118.805, 34.027];
let mapContainer = "myMap";

const territories = [
  {
    name: "Territory A",
    latitude: -118.805,
    longitude: 34.027,
    description: "this is territory A"
  },
  {
    name: "Territory B",
    latitude: -117.168,
    longitude: 32.776,
    description: "this is territory B"
  },
  {
    name: "Territory C",
    latitude: -116.168,
    longitude: 34.027,
    description: "this is territory C"
  }
]

require([
  // import widgets here
  "esri/Map",
  "esri/views/MapView"
], function(
  Map, // geographical representation
  MapView) // view.angle of the Map
  {
    
    map = new Map({
      basemap: "gray-vector", // type of basemaps https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap
    });
    
    view = new MapView({
      container: mapContainer,
      map: map,
      zoom: 8,
      center: initialPosition
    });
  }
);


function setDropDownListener(){
  document.getElementById("territorySelector").addEventListener("change", mapCenterUpdate);
}

function mapCenterUpdate() {
  console.log(this);
  let coordinates  =  this.value.split(','); 
  let longitude = parseFloat(coordinates[0]);
  let latitude = parseFloat(coordinates[1]);
  view.center = [longitude,latitude];
}

window.addEventListener('DOMContentLoaded', (event) => {
  setDropDownListener();
});