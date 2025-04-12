<template>
  <div class="weatherForecast">
    <p class="titleForecast">TODAY'S FORECAST</p>

    <div v-if="errorMessage || forecastData.length === 0" class="errorBlock">
      <p class="forecastError">
        {{ errorMessage || "Please search for a city." }}
      </p>
    </div>

    <div v-else class="temperatureBlock">
      <div
        v-for="(forecast, index) in forecastData"
        :key="index"
        class="forecastItem"
      >
        <p>{{ forecast.dt_txt.substring(11, 16) }}</p>
        <img
          :src="`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`"
          :alt="forecast.weather[0].description"
        />
        <p>{{ Math.round(forecast.main.temp) }}°C</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  forecastData: {
    type: Array,
    required: true,
  },
  errorMessage: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.weatherForecast {
  width: 100%;
  padding: 1.5rem;
  color: #8a96a9;
  background-color: #242d3d;
  border-radius: 0.6rem;

}
.titleForecast {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #ffffff;
}
.temperatureBlock {
  display: flex;
  justify-content: flex-start;
  gap: 3rem;
  overflow-x: auto;
  padding-left: 1rem;
}
.temperatureBlock::-webkit-scrollbar {
  display: none;
}
.forecastItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.forecastItem p {
  color: #f1f3f6;
  font-size: 1.2rem;
}
.forecastItem img {
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 50%;
}

.errorBlock {
  padding: 1.5rem;
  text-align: center;
}
.forecastError {
  color: #ff5e5e;
  font-size: 1.1rem;
}
</style>
