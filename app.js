document.getElementById('searchBtn').addEventListener('click', function () {
    const city = document.getElementById('city').value.trim();
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the entire response to the console for debugging

            if (data.cod && data.cod !== 200) {
                alert(`Error: ${data.message}`);
                return;
            }

            document.getElementById('cityName').innerText = data.name;
            document.getElementById('temp').innerText = `Temperature: ${data.main.temp} °C`;
            document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
            document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
            document.getElementById('wind').innerText = `Wind Speed: ${data.wind.speed} m/s`;
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
        });
});
