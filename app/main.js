let view;
let map;
let initialPosition = [-118.805, 34.027];
let repsForDisplay = [];
const initialMapZoom = 6;
const mapContainer = "myMap";
const territories = [
  {
    id: 1000,
    name: "Territory A",
    longitude: 34.027,
    latitude: -118.805,
    description: "description for territory A"
  },
  {
    id: 1001,
    name: "Territory B",
    longitude: 32.776,
    latitude: -117.168,
    description: "description for territory B"
  },
  {
    id: 1002,
    name: "Territory C",
    longitude: 34.027,
    latitude: -116.168,
    description: "description for territory C"
  }
];
const salesReps = [
  {
    id: 100,
    givenName: 'rep1GivenName',
    familyName: 'rep1FamilyName',
    email: 'rep1@mail.com',
    telephone: '555-777-8888',
    territoryId: 1001,
    address: 'TEST ROADWAY NW'
  },
  {
    id: 101,
    givenName: 'rep2GivenName',
    familyName: 'rep2FamilyName',
    email: 'rep2@mail.com',
    telephone: '555-777-8888',
    territoryId: 1001,
    address: '25th NW Test Drive'
  },
  {
    id: 103,
    givenName: 'rep3GivenName',
    familyName: 'rep3FamilyName',
    email: 'rep3@mail.com',
    telephone: '555-777-8888',
    territoryId: 1002
  },
  {
    id: 104,
    givenName: 'rep4GivenName',
    familyName: 'rep4FamilyName',
    email: 'rep4@mail.com',
    telephone: '555-777-8888',
    territoryId: 1002
  },
  {
    id: 105,
    givenName: 'rep5GivenName',
    familyName: 'rep5FamilyName',
    email: 'rep5@mail.com',
    telephone: '555-777-8888',
    territoryId: 1000
  },
  {
    id: 106,
    givenName: 'rep6GivenName',
    familyName: 'rep6FamilyName',
    email: 'rep1@mail.com',
    telephone: '555-777-8888',
    territoryId: 1000
  }
];

let selectedTerritory = {
  id: 0,
  name: '',
  longitude: 0,
  latitude: 0,
  description: ''
}

require(["esri/Map","esri/views/MapView"], function(Map,MapView){
  map = new Map({
    basemap: "gray-vector",
  });
  
  view = new MapView({
    container: mapContainer,
    map: map,
    zoom: initialMapZoom,
    center: initialPosition
  });
});

function updateTerritoryInfo(event){
  let selectedTerritoryId = event.target.value;
  let territory = territories.find(element => element.id == selectedTerritoryId);
  view.center = [territory.latitude, territory.longitude];
  view.zoom = initialMapZoom;
  selectedTerritory.name = territory.name;
  selectedTerritory.description = territory.description;
}

function showTerritorySalesRep(event){
  let selectedTerritoryId = event.target.value;
  repsForDisplay.length = 0;
  salesReps.map( rep => {
    rep.territoryId == selectedTerritoryId ?
      repsForDisplay.push(rep) : null;
  });
}

function renderRepFinder(){
  var repFinder = new Vue({
    el: '#repFinder',
    data: { 
      territories: territories,
      salesReps: repsForDisplay,
      selectedTerritory: selectedTerritory
    },
    methods: {
      territoryUpdate(event) {
        updateTerritoryInfo(event);
        showTerritorySalesRep(event);
      }
    }
  });
}

window.addEventListener('DOMContentLoaded', (event) => {
  renderRepFinder();
});