// (function () {
//
//     //open map with current location
//
//     const accessToken = MAPBOX_TOKEN
//     navigator.geolocation.getCurrentPosition(success, error,)
//
//     function success(position) {
//         setupMap([position.coords.longitude, position.coords.latitude])
//     }
//
//     function error() {
//
//     }
//
//     //map function
//
//     function setupMap(center) {
//         mapboxgl.accessToken = MAPBOX_TOKEN;
//         const map = new mapboxgl.Map({
//             container: 'map',
//             style: 'mapbox://styles/mapbox/streets-v11',
//             center: center,
//             zoom: 9
//         })
//     }
//
//     //click Event for location change
//
//     $("#btn").on("click", function () {
//
// var showcity = document.getElementById("current-city")
//         var days = document.getElementById("days-container")
//         var city = document.getElementById("search")
//         var inputCity = city.value
//
//
//         //weather api get request
//         $.get("http://api.openweathermap.org/data/2.5/forecast?", {
//
//             APPID: OPEN_WEATHER_APPID,
//             q: inputCity,
//             units: "imperial"
//         }).done(function (data) {
//             console.log(data);
//
//             //pull 5days from 40 object array
//
//             var dailyData = []
//             for (var i = 0; i < data.list.length; i += 8) {
//                 dailyData.push(data.list[i])
//
//             }
//
//             var cityname = data.city.name
//             var country = data.city.country
//             console.log(cityname )
//             console.log(country)
//
//             //pull coordinate from return data
//
//             var cityCoordLon = data.city.coord.lon
//             var cityCoordLat = data.city.coord.lat
//
//
//             console.log(dailyData)
//
//
//             // dynamic html
//
//             var eachDays = ''
//             dailyData.forEach((element) => {
//                 eachDays += `<div id="day1" class="card col">
//                                             <div class="card-header">${(element.dt_txt).substring(0, 10)}</div>
//                                             <ul class="list-group list-group-flush ">
//                                                 <li class="list-group-item ">${element.main.temp_min} / ${element.main.temp_max}</li>
//                                                 <li class="list-group-item "><img src= "http://openweathermap.org/img/w/${element.weather[0].icon}.png"></li>
//                                                 <li class="list-group-item ">Description: ${element.weather[0].description}</li>
//                                                 <li class="list-group-item ">Humidity: ${element.main.humidity}</li>
//                                                 <li class="list-group-item ">Wind Speed: ${element.wind.speed}</li>
//                                                 <li class="list-group-item ">Pressure: ${element.main.pressure}</li>
//                                             </ul>
//                                         </div>`
//
//             })
//             days.innerHTML = eachDays
//             showcity.innerHTML = `${cityname}, ${country}`
//
//
//             console.log(cityCoordLon)
//             console.log(inputCity)
//
//
//             // map on click
//
//
//             mapboxgl.accessToken = MAPBOX_TOKEN;
//             var map = new mapboxgl.Map({
//                 container: 'map',
//                 style: 'mapbox://styles/mapbox/streets-v9',
//                 zoom: 12,
//                 center: [cityCoordLon, cityCoordLat]
//             });
//
//
//
//             //bellow clossing tag closes main function
//         })
//         //    *******************
//
//         //close click function below
//     })
//
// })
// ()
