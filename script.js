
const apiKey = '81e215eca73c3ce648c3454afb441e90';


const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherInfo = document.getElementById('weatherInfo');


getWeatherBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();

    
    if (city.length === 0) {
        alert('Please enter a city name');
        return;
    }

    
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=thiruvananthapuram&appid=81e215eca73c3ce648c3454afb441e90&units=metric' ;

    
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            
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

