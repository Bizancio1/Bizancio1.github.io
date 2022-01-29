


getWeatherData()
function getWeatherData() {
	navigator.geolocation.getCurrentPosition((success) => {
		let {latitude, longitude} = success.coords;

		fetch(`https://api.openweathermap.org/data/2.5/onecall?
			lat=${latitude}&
			lon=${longitude}&
			exclude=hourly,minutely&
			units=metric&
			lang=es&
			appid=${API_KEY}`).then(res => res.json()).then(data => {
			console.log(data)
			showWeatherData(data);
		})
	})
}

function showWeatherData(data) {
	let {humidity, pressure, sunrise, sunset, windspeed, temp} = data.current;
	let {description} = data.current.weather[0];
	let {day, night} = data.daily[0].feels_like;
	let {timezone} = data;

	let place = document.getElementById('place');
	let temperature = document.getElementById('temperature');
	let weather = document.getElementById('weather');
	let dayNigthTemp = document.getElementById('day/nigth-temp');


	place.innerText =  `${timezone}`;
	temperature.innerText = `${Math.round(temp)}°C`;
	weather.innerText =  `${description}`;
	dayNigthTemp.innerText =  `${Math.round(day)}°C / ${Math.round(night)}°C`;

}