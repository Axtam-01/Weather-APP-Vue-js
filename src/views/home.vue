<template>
  <div>
    <searchCity @city-selected="fetchWeather" />
    <div class="boxContainer">
          <div class="mainBox">               
          <weatherInfo :weatherData="weather" />
          <p v-if="errorMessage" class="errorMessage">{{ errorMessage }}</p>
          <p v-if="loading" class="loadingMessage">Loading...</p>
          <todaysForecast :forecastData="forecastData" />
          <airConditions
            :realFeel="weather?.main?.feels_like"
            :windSpeed="weather?.wind?.speed"
            :rainChance="forecastData[0]?.pop * 100"
            :windDegree="weather?.wind?.deg" 
          />
       
      </div>

      <div class="weekk">
        <weeklyForecast :weeklyData="dailyForecast" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import { useRoute } from 'vue-router'; 
import searchCity from "@/components/SearchCity.vue";
import weatherInfo from "@/components/weatherInfo.vue";
import todaysForecast from "@/components/todaysForecast.vue";
import airConditions from "@/components/AirConditions.vue";
import weeklyForecast from "@/components/weeklyForecast.vue";

const API_KEY = import.meta.env.VITE_API_KEY;

const weather = ref(null);
const forecastData = ref([]);
const dailyForecast = ref([]);
const errorMessage = ref("");
const loading = ref(false);
const route = useRoute();
const city = route.query.city || ""; 
onMounted(() => {
  fetchWeather(city);
});
const fetchWeather = async (city) => {
  loading.value = true;
  errorMessage.value = "";

  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (res.data.cod === "404") {
      errorMessage.value = "City not found. Please enter a valid name.";
      weather.value = null;
      forecastData.value = [];
      dailyForecast.value = [];
    } else {
      weather.value = { name: city, ...res.data.list[0] };
      forecastData.value = res.data.list.slice(0, 6);
      const grouped = {};
      res.data.list.forEach((item) => {
        const date = item.dt_txt.split(" ")[0];
        if (!grouped[date]) grouped[date] = [];
        grouped[date].push(item);
      });
      const days = Object.keys(grouped).slice(0, 7);
      dailyForecast.value = days.map((date) => {
        const dayItems = grouped[date];
        return dayItems.reduce((prev, curr) => {
          const prevHour = parseInt(prev.dt_txt.split(" ")[1].split(":")[0]);
          const currHour = parseInt(curr.dt_txt.split(" ")[1].split(":")[0]);
          return Math.abs(currHour - 12) < Math.abs(prevHour - 12)
            ? curr
            : prev;
        });
      });
    }
  } catch (err) {
    errorMessage.value = "Enter the name of the city";
    weather.value = null;
    forecastData.value = [];
    dailyForecast.value = [];
    console.error("error:", err);
  } finally {
    loading.value = false;
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 16px;
  background-color: #060d18;
}

.boxContainer {
  align-items: stretch;
  display: flex;
  align-items:self-end;
  gap: 0.5rem;
}

.mainBox {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

}

.weekk {
  flex-grow: 1;
  margin-top: 3rem;
}

.errorMessage,
.loadingMessage {
  color: white;
  font-size: 1.2rem;
  widows: 100%;
  height: 15.4rem;
  padding: 5rem;
}

.cityName {
  font-size: 1.5rem;
  color: white;
  margin-top: 1rem;
}
@media (max-width: 480px) {
  body {
    font-size: 14px;
  }
  .boxContainer {
    display: flex;
    flex-direction: column;
    align-items: normal;
  }
}
</style>
