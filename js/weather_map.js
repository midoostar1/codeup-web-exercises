(function () {












    mapboxgl.accessToken = MAPBOX_TOKEN;



    $("#btn").on("click", function () {



var days = $("#days-container")
        var city = $("#search")
        var inputCity = $("#search").val()

        $.get("http://api.openweathermap.org/data/2.5/forecast?", {

            APPID: OPEN_WEATHER_APPID,
            q: inputCity,
            units: "imperial"
        }).done(function (data) {
            console.log(data);


            var dailyData = []
            for (var i = 0; i < data.list.length; i += 8) {
                dailyData.push(data.list[i])

            }
            console.log(dailyData)
var days = ''
            $(dailyData).each(function (index, element) {
days += <div id="day1" className="card col">
    <div className="card-header d1">

    </div>
    <ul className="list-group list-group-flush ">
        <li className="list-group-item t1"></li>
        <li className="list-group-item i1"></li>
        <li className="list-group-item di1">Description:</li>
        <li className="list-group-item wi1 ">Wind Speed:</li>
        <li className="list-group-item p1">Pressure:</li>
    </ul>
</div>


                var con1 = "http://openweathermap.org/img/w/"
            con2 = ".png"




            //bellow clossing tag closes main function


            // map


        })
    })
//    *******************
    const accessToken = MAPBOX_TOKEN


})
()
