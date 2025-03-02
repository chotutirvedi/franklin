 // API Key and Base URL
const apiKey = '219e6d1471ef449b87c170656252102';
const baseUrl = 'http://api.weatherapi.com/v1/current.json';

// DOM Elements
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const condition = document.getElementById('condition');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');

// Function to fetch weather data
async function fetchWeather(city) {
  const url = `${baseUrl}?key=${apiKey}&q=${city}&aqi=no`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('City not found');
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

// Function to display weather data
function displayWeather(data) {
  cityName.textContent = data.location.name;
  temperature.textContent = `Temperature: ${data.current.temp_c}°C`;
  condition.textContent = `Condition: ${data.current.condition.text}`;
  humidity.textContent = `Humidity: ${data.current.humidity}%`;
  windSpeed.textContent = `Wind Speed: ${data.current.wind_kph} km/h`;
}

// Event Listener for Search Button
searchBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    alert('Please enter a city name');
  }
});

// Optional: Fetch weather for a default city on page load
fetchWeather('London');