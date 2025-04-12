<template>
  <div class="forecastWeek" v-if="weeklyData.length > 0">
    <p class="textAside">7-DAY FORECAST</p>
    <div v-for="(day, index) in weeklyData" :key="day.dt_txt" class="weatherWrapper">
      <div class="todayBox">
        <p>{{ formatDate(day.dt_txt) }}</p>
        <img
          :src="getIconUrl(day.weather[0].icon)"
          :alt="day.weather[0].description || 'Weather icon'"/>
        <p>{{ day.weather[0].main }}</p>
        <p>
          <span>{{ Math.round(day.main.temp_max) }}°</span>/{{
            Math.round(day.main.temp_min)
          }}°
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  weeklyData: {
    type: Array,
    default: () => [],
  },
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { weekday: "short" });
};

const getIconUrl = (iconCode) => {
  
  return iconCode ? `https://openweathermap.org/img/wn/${iconCode}@2x.png` : '/path/to/default-icon.png';
};
</script>

<style scoped>
.textAside {
  padding: 1.5rem;
  margin-left: 1.7rem;
  font-weight: bold;
  color: white;
}

.weatherWrapper::after {
  content: "";
  display: block;
  border-bottom: 1px solid #2e3e5b;
  margin: 0 auto;
  width: 80%;
}

.todayBox {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem 0;
}

.todayBox span {
  color: white;
}

.todayBox p:nth-child(3) {
  color: #eff3f9;
  margin: 1.7rem;
}

.todayBox img {
  height: 3rem;
  width: 3rem;
}

.forecastWeek {
  color: #8a96a9;
  background-color: #242d3d;
  margin-top: 1.8rem;
  border-radius: 0.625rem;
  padding: 1rem;
  max-height: 37.5rem;
  overflow-y: auto;
}

.forecastWeek::-webkit-scrollbar {
  display: none;
}
</style>