let view;
let map;
let initialPosition = [-118.805, 34.027];
let mapContainer = "myMap";
let currentTerritoryId = "";

let territories = [
  {
    id: 1000,
    name: "Territory A",
    longitude: 34.027,
    latitude: -118.805,
    description: "this is territory A"
  },
  {
    id: 1001,
    name: "Territory B",
    longitude: 32.776,
    latitude: -117.168,
    description: "this is territory B"
  },
  {
    id: 1002,
    name: "Territory C",
    longitude: 34.027,
    latitude: -116.168,
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
      territories: territories,
      salesReps: salesReps,
      currentTerritory: ''
    },
    methods: {
      mapCenterUpdate(event) {
          currentTerritoryId = event.target.value;
          let territory = territories.find(element => element.id == currentTerritoryId);
          view.center = [territory.latitude, territory.longitude]; 
      }
  }
  });
}

window.addEventListener('DOMContentLoaded', (event) => {
  renderDropDown();
});