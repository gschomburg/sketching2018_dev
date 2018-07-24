mapboxgl.accessToken = 'pk.eyJ1IjoiZ3NjaG9tYnVyZyIsImEiOiJKaVdWQjdrIn0.bfF-vwtkKeCC2OX05I9b1w';
var map = new mapboxgl.Map({
    container: 'map',
    center: [-83.044, 42.330],
    zoom: 11,
    scrollZoom: true,
    dragPan: true, //turn off phone scrolling. maybe
    // pitch: 60,
    // bearing: -55,
    style: 'mapbox://styles/gschomburg/cjjka72mc5dwo2rqio2h5040a'
});