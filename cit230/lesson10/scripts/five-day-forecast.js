function getFiveDayForecast(cityId) {
    // create the five-day forecast
    var daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    const apiForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=' + cityId + '&appid=517004902d09d0d641c884d5fe1961c6&units=imperial';

    fetch(apiForecastURL)
        .then(
            (response) => response.json()
        )
        .then(
            (forecasts) => {
                let hourString = '18:00:00';
                let counter = 1;

                // loop through results
                forecasts.list.forEach(
                    (forecast) => {
                        if (forecast.dt_txt.includes(hourString)) {

                            // add temp
                            const tempElement = document.getElementById(`temp${counter}`);
                            tempElement.innerHTML = forecast.main.temp_max + '&deg;';

                            // add day of week
                            let nextDate = new Date(forecast.dt_txt.replace(' ', 'T'));

                            const dayElement = document.getElementById(`day${counter}`);
                            dayElement.innerHTML = daysOfWeek[nextDate.getDay()];

                            // add image
                            const imageElement = document.getElementById(`img${counter}`);
                            imageElement.setAttribute('src', 'https://openweathermap.org/img/w/' +
                                forecast.weather[0].icon + '.png');
                            imageElement.setAttribute('alt', forecast.weather[0].description);

                            // increment variables
                            counter += 1;
                        }
                    }
                );
            }
        );
}