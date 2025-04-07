const API_KEY = 'your_openweather_api_key';

export async function fetchWeather(city) {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
  const data = await res.json();
  return data;
}
