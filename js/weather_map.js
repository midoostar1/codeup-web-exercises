(function () {

        $("#btn").on("click", function () {
        })
        let city = $("#search").val()
        $.get("http://api.openweathermap.org/data/2.5/forecast?", {

            APPID: OPEN_WEATHER_APPID,
            q: "dallas, us",
            units: "imperial"
        }).done(function (data) {
            console.log(data);

            var dailyData = []
            for (var i = 0; i < data.list.length; i += 8) {
                dailyData.push(data.list[i])

            }
            console.log(dailyData)

            var date= []
            var tempMax = []
            var tempMin = []
            var icon = []
            var description = []
            var humidity=[]
            var wind = []
            var pressure = []

$(dailyData).each(function (index, element){
  var newDate=  element.dt_txt.substring(0,10)
    date.push(newDate )
    var newTempMax = element.main.temp_max
    tempMax.push(newTempMax);
    var newTempMin = element.main.temp_min
    tempMin.push(newTempMin);
    var descriptionNew = element.weather[0].description
    description.push(descriptionNew)
    var humidityNew = element.main.humidity
    humidity.push(humidityNew)
    var iconNew = element.weather[0].icon
    icon.push(iconNew)
    var windNew = element.wind.speed
    wind.push(windNew)
    var pressureNew = element.main.pressure
    pressure.push(pressureNew)
})
console.log(pressure)


$(date).each(function (index, element){
    if(index===0){
      $(".d1").append(element)}
    if(index===1){
        $(".d2").append(element)}
    if(index===2){
        $(".d3").append(element)}
    if(index===3){
        $(".d4").append(element)}

    if(index===4){
        $(".d5").append(element)}
})
        })


        // map

        mapboxgl.accessToken = MAPBOX_TOKEN;
        navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

        function successLocation(position) {
            console.log(position)
            setupMap([position.coords.longitude, position.coords.latitude])
        }

        function errorLocation() {

        }

        function setupMap(center) {
            const map = new mapboxgl.Map({
                container: 'map', // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: center,
                zoom: 14
            })
        }
//    *******************
    const accessToken = MAPBOX_TOKEN




})
()