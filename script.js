// Replace 'your_api_key' with your actual API key from OpenWeatherMap
const apiKey = '81e215eca73c3ce648c3454afb441e90';

// Select elements from the DOM
const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherInfo = document.getElementById('weatherInfo');

// Event listener for button click
getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();

    // Validate input
    if (city.length === 0) {
        alert('Please enter a city name');
        return;
    }

    // API URL
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=thiruvananthapuram&appid=81e215eca73c3ce648c3454afb441e90&units=metric' ;

    // Fetch weather data
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            // Display weather information
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            weatherInfo.innerHTML = `
                <h3>Weather in ${city}</h3>
                <p><strong>Temperature:</strong> ${temperature}°C</p>
                <p><strong>Description:</strong> ${description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            weatherInfo.innerHTML = `<p class="text-danger">Error fetching weather data. Please try again later.</p>`;
        });
});

