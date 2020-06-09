let view;
let map;
let initialPosition = [-118.805, 34.027];
let mapContainer = "myMap";

let territories = [
  {
    id: 1000,
    givenName: "Territory A",
    latitude: -118.805,
    longitude: 34.027,
    description: "this is territory A"
  },
  {
    id: 1001,
    givenName: "Territory B",
    latitude: -117.168,
    longitude: 32.776,
    description: "this is territory B"
  },
  {
    id: 1002,
    givenName: "Territory C",
    latitude: -116.168,
    longitude: 34.027,
    description: "this is territory C"
  }
]

let salesReps = [
  {
    id: 100,
    givenName: 'Sam',
    familyName: 'Porter',
    telephone: '555-777-8888',
    territoryId: 1001,
    address: 'Captial Knot City'
  },
  {
    id: 101,
    givenName: 'Bridget',
    familyName: 'Strand',
    telephone: '555-777-8888',
    territoryId: 1001
  },
  {
    id: 103,
    givenName: 'Robert',
    familyName: 'Martin',
    telephone: '555-777-8888',
    territoryId: 1002
  },
  {
    id: 104,
    givenName: 'John',
    familyName: 'Doe',
    telephone: '555-777-8888',
    territoryId: 1002
  },
  {
    id: 105,
    givenName: 'Robert',
    familyName: 'Martin',
    telephone: '555-777-8888',
    territoryId: 1000
  },
  {
    id: 106,
    givenName: 'John',
    familyName: 'Doe',
    telephone: '555-777-8888',
    territoryId: 1000
  }
];

require(["esri/Map","esri/views/MapView"], function(Map,MapView){
  map = new Map({
    basemap: "gray-vector",
  });
  
  view = new MapView({
    container: mapContainer,
    map: map,
    zoom: 8,
    center: initialPosition
  });
});

function renderDropDown(){
  var app = new Vue({
    el: '#app',
    data: {
      selected: '',
      currentMapCoordinate: '',
      territories: territories,
      salesReps: salesReps
    },
    methods: {
      mapCenterUpdate(event) {
          let coordinates = event.target.value.split(','); 
          let longitude = parseFloat(coordinates[0]);
          let latitude = parseFloat(coordinates[1]);
          view.center = [longitude,latitude];


          // view.zoom = 8;
      }
  }
  });
}



window.addEventListener('DOMContentLoaded', (event) => {
  renderDropDown();
});