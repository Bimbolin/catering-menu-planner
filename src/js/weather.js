 const WEATHER_API_KEY = '7ea3723328d303e8d4d1d106a2951b0a';

export async function fetchWeather(city) {
  const url = `http://api.weatherstack.com/current?access_key=${WEATHER_API_KEY}&query=${city}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.success === false) {
      throw new Error(data.error.info);
    }

    return {
      city: data.location.name,
      temp: data.current.temperature,
      condition: data.current.weather_descriptions[0],
      icon: data.current.weather_icons[0]
    };
  } catch (err) {
    console.error('Weatherstack error:', err);
    return {
      city: city,
      temp: null,
      condition: 'Unavailable',
      icon: null
    };
  }
}


