(function () {

    // open map with current location




    mapboxgl.accessToken = MAPBOX_TOKEN;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-96.7970, 32.7767], // starting center in [lng, lat]
        zoom: 9, // starting zoom
        projection: 'globe' // display map as a 3D globe
    });





    // map function





    // weather api get request
        $.get("http://api.openweathermap.org/data/2.5/forecast?", {

            APPID: OPEN_WEATHER_APPID,
            q: "Dallas,Us",
            units: "imperial"
        }).done(function (data) {
            console.log(data);

            //pull 5days from 40 object array

            var dailyData = []
            for (var i = 0; i < data.list.length; i += 8) {
                dailyData.push(data.list[i])
            }







        })
})
()
