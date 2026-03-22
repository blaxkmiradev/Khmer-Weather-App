import { useState, useEffect } from 'react'
import { fetchWeather, type WeatherData } from './services/weatherService'
import * as Icons from './components/WeatherIcons'
import './App.css'

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [city, setCity] = useState('Phnom Penh');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadWeather = async (location: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeather(location);
      setWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWeather(city);
  }, [city]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setCity(searchQuery);
    }
  };

  const current = weather?.current_condition[0];
  const area = weather?.nearest_area[0];
  const forecast = weather?.weather;

  const WeatherIcon = ({ desc, className }: { desc: string; className?: string }) => {
    const d = desc.toLowerCase();
    if (d.includes('sun') || d.includes('clear')) return <Icons.Sun className={className} />;
    if (d.includes('drizzle')) return <Icons.CloudDrizzle className={className} />;
    if (d.includes('rain') || d.includes('shower')) return <Icons.CloudRain className={className} />;
    if (d.includes('thunder')) return <Icons.CloudLightning className={className} />;
    if (d.includes('snow')) return <Icons.CloudSnow className={className} />;
    if (d.includes('mist') || d.includes('fog')) return <Icons.Mist className={className} />;
    return <Icons.Cloud className={className} />;
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="app-container animate-fade">
      <header>
        <span className="pro-badge">Meteorological Dashboard</span>
        <h1>Khmer Weather</h1>
        <p className="text-gradient" style={{ fontWeight: 700, letterSpacing: '2px', fontSize: '0.8rem', textTransform: 'uppercase' }}>Precision Data Engineering</p>
      </header>

      <div className="search-wrapper glass-panel">
        <input
          type="text"
          className="search-input"
          placeholder="Enter location (e.g. Phnom Penh)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch(e as any)}
        />
        <button onClick={handleSearch} className="search-btn">LOCATE</button>
      </div>

      {loading ? (
        <div className="loading-box">
          <div className="spinner"></div>
          <p>Analyzing atmospheric metrics...</p>
        </div>
      ) : error ? (
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ color: '#ef4444', marginBottom: '1rem' }}>Fetch Error</h2>
          <p style={{ color: 'var(--text-dim)' }}>{error}. System cannot retrieve data for the specified location.</p>
        </div>
      ) : weather && (
        <>
          <section className="weather-main">
            <div className="glass-panel hero-panel">
              <div className="location-info">
                <span className="country">{area?.country[0].value}</span>
                <span className="city">{area?.areaName[0].value}</span>
              </div>
              
              <div className="temp-section">
                <span className="temp-large">{current?.temp_C}°</span>
                <WeatherIcon desc={current?.weatherDesc[0].value || ''} className="main-icon" />
              </div>

              <div className="condition-label">
                {current?.weatherDesc[0].value}
              </div>
            </div>

            <div className="stats-panel">
              <div className="glass-panel stat-item">
                <div className="stat-header">
                  <Icons.Sun className="stat-icon" />
                  <span>Feels Like</span>
                </div>
                <span className="stat-value">{current?.FeelsLikeC}°C</span>
              </div>
              <div className="glass-panel stat-item">
                <div className="stat-header">
                  <Icons.Droplets className="stat-icon" />
                  <span>Humidity</span>
                </div>
                <span className="stat-value">{current?.humidity}%</span>
              </div>
              <div className="glass-panel stat-item">
                <div className="stat-header">
                  <Icons.Wind className="stat-icon" />
                  <span>Wind Speed</span>
                </div>
                <span className="stat-value">{current?.windspeedKmph} <small style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>km/h</small></span>
              </div>
              <div className="glass-panel stat-item">
                <div className="stat-header">
                  <Icons.Gauge className="stat-icon" />
                  <span>Pressure</span>
                </div>
                <span className="stat-value">{current?.pressure} <small style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>hPa</small></span>
              </div>
            </div>
          </section>

          <section className="forecast-section">
            <h2>Extended Outlook</h2>
            <div className="forecast-grid">
              {forecast?.slice(0, 3).map((day, idx) => (
                <div key={idx} className="glass-card forecast-day">
                  <span className="day-name">{formatDate(day.date)}</span>
                  <WeatherIcon desc={day.hourly[4].weatherDesc[0].value} className="day-icon" />
                  <div className="day-temp">
                    <span className="hi">{day.maxtempC}°</span>
                    <span className="lo">{day.mintempC}°</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      <footer>
        <div className="footer-nav">
          <a href="#">Privacy Protocol</a>
          <a href="#">Terms of Delivery</a>
          <a href="#">System Logistics</a>
        </div>
        <div className="legal">
          © 2026 KHMER WEATHER • ENGINEERED BY <strong>RIKIXZ</strong> • ALL RIGHTS RESERVED
        </div>
      </footer>
    </div>
  );
}

export default App;
