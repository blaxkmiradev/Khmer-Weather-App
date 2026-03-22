export interface WeatherData {
  current_condition: Array<{
    temp_C: string;
    weatherDesc: Array<{ value: string }>;
    humidity: string;
    windspeedKmph: string;
    FeelsLikeC: string;
    uvIndex: string;
    pressure: string;
    visibility: string;
  }>;
  nearest_area: Array<{
    areaName: Array<{ value: string }>;
    country: Array<{ value: string }>;
  }>;
  weather: Array<{
    date: string;
    maxtempC: string;
    mintempC: string;
    hourly: Array<{
      weatherDesc: Array<{ value: string }>;
    }>;
  }>;
}

const API_URL = import.meta.env.VITE_WEATHER_API_URL;

export const fetchWeather = async (location: string): Promise<WeatherData> => {
  const response = await fetch(`${API_URL}${location}?format=j1`);
  if (!response.ok) {
    throw new Error('City not found');
  }
  return response.json();
};
