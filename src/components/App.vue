<template>
  <div class="boxContainer">
    <div class="fixedSidebar">
      <navWeather />
    </div>

    <div class="mainBox">
      <div class="weatherWidget">
        <searchCity @city-selected="fetchWeather" />
        <weatherInfo :weatherData="weather" />
        <p v-if="errorMessage" class="errorMessage">{{ errorMessage }}</p>
        <p v-if="loading" class="loadingMessage">Loading...</p>
        <todaysForecast />
        <airConditions />
      </div>
    </div>

    <div class="weekk">
      <weeklyForecast />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

import navWeather from "@/components/nav.vue";
import searchCity from "@/components/searchCity.vue";
import weatherInfo from "@/components/weatherInfo.vue";
import todaysForecast from "@/components/todaysForecast.vue";
import airConditions from "@/components/airConditions.vue";
import weeklyForecast from "@/components/weeklyForecast.vue";

const API_KEY = "286d526543394fa53c2fcb9d35c1ddf7";
const weather = ref(null);
const errorMessage = ref("");
const loading = ref(false);

onMounted(() => {
  errorMessage.value = "Please enter a city name or enter a correct name.";
});

const fetchWeather = async (city) => {
  loading.value = true;
  errorMessage.value = "";

  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (res.data.cod === "404") {
      errorMessage.value = "City not found. Please enter a valid name.";
      weather.value = null;
    } else {
      weather.value = res.data;
    }
  } catch (err) {
    errorMessage.value = "An error occurred. Please try again.";
    weather.value = null;
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
  display: flex;
  margin-top: 2.2rem;
  gap: 0.5rem;
}

.mainBox {
  display: flex;
  gap: 0.625rem;
  align-items: stretch;
}

.weekk {
  flex-grow: 1;
  margin-top: 3rem;
}

.errorMessage,
.loadingMessage {
  color: red;
  font-size: 1.2rem;
  widows: 100%;
  height: 15.4rem;
  padding: 5rem;
}
</style>
