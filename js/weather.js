
const WEATHERSTACK_KEY = 'your_weatherstack_key';

export async function fetchWeather(city) {
  const endpoint = `http://api.weatherstack.com/current?access_key=${WEATHERSTACK_KEY}&query=${city}`;
  const res = await fetch(endpoint);
  const data = await res.json();

  return {
    city: data.location.name,
    temp: data.current.temperature,
    condition: data.current.weather_descriptions[0],
    icon: data.current.weather_icons[0]
  };
}
