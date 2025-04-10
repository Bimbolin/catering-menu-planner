const fetchWeather = async (city) => {
  const apiKey = "7ea3723328d303e8d4d1d106a2951b0a";
  const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.error) {
      console.error("Error:", data.error.info);
    } else {
      console.log("Weather Data:", data);
      displayWeather(data); // Function to render weather data dynamically
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

