<template>
  <div class="boxContainer">
    <div class="fixedSidebar">
      <navWeather />
    </div>

    <div class="mainBox">
      <div class="weatherWidget">
        <searchCity />
        <weatherInfo />
        <todaysForecast />
        <airConditions />
      </div>

   

    
    </div>
    <div class="weekk"> <weeklyForecast /></div>
  </div>
</template>

<script>
import navWeather from "@/components/nav.vue";
import searchCity from "@/components/searchCity.vue";
import weatherInfo from "@/components/weatherInfo.vue";
import todaysForecast from "@/components/todaysForecast.vue";
import airConditions from "@/components/airConditions.vue";
import weeklyForecast from "./weeklyForecast.vue";
export default {
  components: {
    navWeather,
    searchCity,
    weatherInfo,
    todaysForecast,
    airConditions,
    weeklyForecast,
  },
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
.weekk{
flex-grow: 1;
margin-top: 3rem;

}

</style>
