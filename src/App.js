// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);

//   const API_KEY = "f4003ae4a316447585360330261102";

//   const getWeather = async () => {
//     if (!city) return;

//     try {
//       const response = await fetch(
//         `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
//       );

//       const data = await response.json();
//       console.log("API Response:", data);

//       setWeather(data);
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   };

//   return (
//     <div className="app-container">
//       <h1 className="app-title">Weather App 🌤️</h1>

//       {/* Search Section */}
//       <div className="search-box">
//         <input
//           type="text"
//           placeholder="Enter city name"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               getWeather();
//             }
//           }}
//           className="city-input"
//         />

//         <button onClick={getWeather} className="search-button">
//           Search
//         </button>
//       </div>

//       {/* Weather Display */}
//       {weather && weather.current ? (
//         <div className="weather-card">
//           <h2>{weather.location.name}</h2>
//           <h3>{weather.current.temp_c} °C</h3>
//           <p>{weather.current.condition.text}</p>
//           <img
//             src={weather.current.condition.icon}
//             alt="weather icon"
//           />
//         </div>
//       ) : weather && weather.error ? (
//         <p className="error-message">
//           {weather.error.message}
//         </p>
//       ) : null}
//     </div>
//   );
// }

// export default App;





// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);
//   const [forecast, setForecast] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const API_KEY = "f4003ae4a316447585360330261102";

//   const changeBackground = (condition, isDay) => {
//     if (!condition) return;

//     if (!isDay) {
//       document.body.style.background =
//         "linear-gradient(to right, #141e30, #243b55)";
//     } else if (condition.toLowerCase().includes("rain")) {
//       document.body.style.background =
//         "linear-gradient(to right, #4e73df, #1cc88a)";
//     } else if (condition.toLowerCase().includes("cloud")) {
//       document.body.style.background =
//         "linear-gradient(to right, #bdc3c7, #2c3e50)";
//     } else if (condition.toLowerCase().includes("clear")) {
//       document.body.style.background =
//         "linear-gradient(to right, #f7971e, #ffd200)";
//     } else {
//       document.body.style.background =
//         "linear-gradient(to right, #a5d2ff, #bbb7f2)";
//     }
//   };

//   const getWeather = async (searchCity) => {
//     const query = searchCity || city;
//     if (!query) return;

//     setLoading(true);
//     setError("");
//     setWeather(null);
//     setForecast(null);

//     try {
//       const response = await fetch(
//         `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=5`
//       );

//       if (!response.ok) {
//         throw new Error("City not found");
//       }

//       const data = await response.json();

//       if (data.error) {
//         setError("City not found");
//       } else {
//         setWeather(data);
//         setForecast(data.forecast.forecastday);

//         changeBackground(
//           data.current.condition.text,
//           data.current.is_day
//         );
//       }
//     } catch (err) {
//       setError("City not found");
//     }

//     setLoading(false);
//   };

//   const getLocationWeather = () => {
//     if (!navigator.geolocation) {
//       setError("Geolocation not supported");
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const coords = `${position.coords.latitude},${position.coords.longitude}`;
//         getWeather(coords);
//       },
//       () => {
//         setError("Location permission denied");
//       }
//     );
//   };

//   return (
//     <div className="app-container">
//       <h1 className="app-title">Weather App 🌤️</h1>

//       <div className="search-box">
//         <input
//           type="text"
//           placeholder="Enter city name"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               getWeather();
//             }
//           }}
//           className="city-input"
//         />

//         <button onClick={() => getWeather()} className="search-button">
//           Search
//         </button>

//         <button onClick={getLocationWeather} className="location-button">
//           📍 Use My Location
//         </button>
//       </div>

//       {loading && <p>Loading...</p>}
//       {error && <p className="error-message">{error}</p>}

//       {weather && weather.current && (
//         <div className="weather-card">
//           <h2>
//             📍 {weather.location.name}, {weather.location.country}
//           </h2>
//           <h3>🌡 {weather.current.temp_c}°C</h3>
//           <p>☁ {weather.current.condition.text}</p>
//           <p>💨 Wind: {weather.current.wind_kph} km/h</p>
//           <p>💧 Humidity: {weather.current.humidity}%</p>
//           <img
//             src={weather.current.condition.icon}
//             alt="weather icon"
//           />
//         </div>
//       )}

//       {forecast && (
//         <div className="forecast-container">
//           <h3>📅 5-Day Forecast</h3>
//           <div className="forecast-grid">
//             {forecast.map((day, index) => (
//               <div key={index} className="forecast-card">
//                 <p>{day.date}</p>
//                 <img
//                   src={day.day.condition.icon}
//                   alt="forecast icon"
//                 />
//                 <p>{day.day.avgtemp_c}°C</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;










import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "f4003ae4a316447585360330261102";

  // ✅ SIMPLE & BEGINNER FRIENDLY DARK MODE CHECK
  const isDarkMode = () => {

    // Agar weather data nahi hai
    if (weather === null) {
      return false;
    }

    // Agar current data nahi hai
    if (weather.current === undefined) {
      return false;
    }

    // Agar is_day 0 hai → night hai
    if (weather.current.is_day === 0) {
      return true;
    } else {
      return false;
    }
  };

  // ✅ Dynamic Background Function (Simple Version)
  const getBackground = () => {

    // Default background
    let background = "linear-gradient(135deg, #a5d2ff, #bbb7f2)";

    if (weather && weather.current) {

      const condition = weather.current.condition.text.toLowerCase();

      // 🌙 Night
      if (isDarkMode()) {
        background = "linear-gradient(135deg, #141e30, #243b55)";
      }

      // 🌧 Rain
      else if (condition.includes("rain")) {
        background = "linear-gradient(135deg, #4e73df, #224abe)";
      }

      // ☁ Cloudy
      else if (condition.includes("cloud")) {
        background = "linear-gradient(135deg, #bdc3c7, #2c3e50)";
      }

      // ☀ Clear
      else if (
        condition.includes("clear") ||
        condition.includes("sunny")
      ) {
        background = "linear-gradient(135deg, #f7971e, #ffd200)";
      }
    }

    return background;
  };

  const getWeather = async (searchCity) => {
    const query = searchCity || city;
    if (!query) return;

    setLoading(true);
    setError("");
    setWeather(null);
    setForecast(null);

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=5`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();

      if (data.error) {
        setError("City not found");
      } else {
        setWeather(data);
        setForecast(data.forecast.forecastday);
      }
    } catch (err) {
      setError("City not found");
    }

    setLoading(false);
  };

  const getLocationWeather = () => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = `${position.coords.latitude},${position.coords.longitude}`;
        getWeather(coords);
      },
      () => {
        setError("Location permission denied");
      }
    );
  };

  return (
    <div
      className={`app-container ${isDarkMode() ? "dark" : "light"}`}
    style={{
    background: getBackground(),
    minHeight: "100vh",
    transition: "background 0.5s ease",
  }}
    >
      <h1 className="app-title">Weather App 🌤️</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              getWeather();
            }
          }}
          className="city-input"
        />

        <button onClick={() => getWeather()} className="search-button">
          Search
        </button>

        <button onClick={getLocationWeather} className="location-button">
          📍 Use My Location
        </button>
      </div>

      {loading && <p className="status-message">Loading...</p>}
      {error && <p className="status-message error-message">{error}</p>}

      {weather && weather.current && (
        <div className="weather-card glass-panel">
          <h2>
            📍 {weather.location.name}, {weather.location.country}
          </h2>
          <h3>🌡 {weather.current.temp_c}°C</h3>
          <p>☁ {weather.current.condition.text}</p>
          <p>💨 Wind: {weather.current.wind_kph} km/h</p>
          <p>💧 Humidity: {weather.current.humidity}%</p>
          <img
            src={weather.current.condition.icon}
            alt="weather icon"
          />
        </div>
      )}

      {forecast && (
        <div className="forecast-container">
          <h3>📅 3-Day Forecast</h3>
          <div className="forecast-grid">
            {forecast.map((day, index) => (
              <div key={index} className="forecast-card glass-panel">
                <p>{day.date}</p>
                <img
                  src={day.day.condition.icon}
                  alt="forecast icon"
                />
                <p>{day.day.avgtemp_c}°C</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
