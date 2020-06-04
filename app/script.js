require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery"
  ], function(Map, MapView, BasemapToggle, BasemapGallery) {

  let map = new Map({
    basemap: "gray-vector", // type of basemap https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap
  });

  let view = new MapView({
    container: "myMap", // the id of the container
    map: map,
    center: [-118.80500, 34.02700], // longitude, latitude
    zoom: 13
  });

  let basemapToggle = new BasemapToggle({
    view: view,
    nextBasemap: "satellite"
  });

  // Specify the widget while adding to the view's UI
    const basemapGallery = new BasemapGallery({
        view: view
    });
  
  // Add the widget to the top-right corner of the view
    view.ui.add(basemapGallery, {
        position: "top-right"
    });
});