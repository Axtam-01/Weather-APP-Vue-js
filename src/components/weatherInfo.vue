<template>
  <div class="weatherContainer" v-if="weatherData">
    <div class="weatherInfo">
      <h1 class="cityName">{{ weatherData.name }}</h1>
      <p class="rainChance">
        Chance of rain:
        <span class="rainPercentage">{{ weatherData.clouds?.all ?? 0 }}%</span>
      </p>
      <h1 class="temperature">{{ Math.round(weatherData.main.temp) }}°</h1>
    </div>
    <span class="sunImage">
      <img
        :src="getWeatherIcon(weatherData.weather[0].main)"
        alt="weather icon"
        v-if="weatherData.weather && weatherData.weather.length > 0"
      />
    </span>
  </div>
</template>
<script setup>
defineProps({
  weatherData: Object,
});

const getWeatherIcon = (main) => {
  switch (main) {
    case "Clear":
      return new URL(
        "/src/assets/img/sunny_24dp_FFFF55_FILL0_wght400_GRAD0_opsz24.png",
        import.meta.url
      ).href;
    case "Rain":
      return new URL(
        "/src/assets/img/rainy_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png",
        import.meta.url
      ).href;
    case "Clouds":
      return new URL(
        "/src/assets/img/cloud_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg",
        import.meta.url
      ).href;
    default:
      return new URL(
        "/src/assets/img/foggy_24dp_FFF_FILL0_wght400_GRAD0_opsz24.png",
        import.meta.url
      ).href;
  }
};
</script>



<style scoped>
.weatherContainer {
  display: flex;
  gap: 3.5rem;
  color: white;
  margin: 2.5rem;
  padding-bottom: 2.3125rem;
}
.cityName,
.temperature {
  font-size: 2rem;
}
.rainChance {
  color: #8a96a9;
}
.temperature {
  margin-top: 1.3rem;
}
.sunImage img {
  width: 60px;
  height: 60px;
}
</style>
