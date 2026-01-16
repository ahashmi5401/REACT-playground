import React, { useState, useEffect } from "react";
import { Search, Wind, Droplets, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (query) => {
    if (!query) return;

    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          query.trim()
        )}&units=metric&appid=${API_KEY}`
      );

      const data = await res.json(); // ✅ FIRST

      if (!res.ok) {
        console.log("API ERROR:", data);
        throw new Error(data.message || "City not found");
      }

      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather("London");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-500 via-indigo-500 to-purple-600 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-3xl bg-white/90 backdrop-blur-xl shadow-2xl p-8"
      >
        <h1 className="text-3xl font-extrabold text-center mb-6 text-slate-800">
          Weather Forecast
        </h1>

        <div className="flex items-center gap-2 mb-4">
          <Search className="text-slate-400" />
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchWeather(city)}
            placeholder="Search city..."
            className="flex-1 bg-transparent border-b-2 border-slate-300 focus:border-sky-500 outline-none py-2"
          />
        </div>

        {loading && (
          <p className="text-center text-slate-600">Fetching weather...</p>
        )}
        {error && <p className="text-center text-red-500">{error}</p>}

        {weather && !loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-6"
          >
            <p className="flex justify-center items-center gap-1 text-lg font-semibold">
              <MapPin size={18} /> {weather.name}, {weather.sys.country}
            </p>

            <img
              className="mx-auto drop-shadow-xl"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt={weather.weather[0].description}
            />

            <p className="text-5xl font-extrabold">
              {Math.round(weather.main.temp)}°C
            </p>
            <p className="capitalize text-slate-600 mb-6">
              {weather.weather[0].description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-sky-100 p-4 flex items-center gap-2 justify-center">
                <Droplets /> {weather.main.humidity}%
              </div>
              <div className="rounded-2xl bg-indigo-100 p-4 flex items-center gap-2 justify-center">
                <Wind /> {weather.wind.speed} m/s
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
