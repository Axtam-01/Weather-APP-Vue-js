<template>

  <div v-if="realFeel || windSpeed || rainChance || uvIndex" class="airConditions">
    <div class="titleAction">
      <p>AIR CONDITIONS</p>
      <button class="seeMore">See more</button>
    </div>

    <div class="weatherStats">
      <div class="weatherItem">
        <div class="infoIcon">
          <img
            src="/src/assets/img/device_thermostat_24dp_CCCCCC_FILL0_wght400_GRAD0_opsz24.svg"
            alt="temperature"
          />
        </div>
        <div class="realFeel">
          <p>Real Feel</p>
          <span>{{ realFeel }}°</span>
        </div>
      </div>

      <div class="weatherItem">
        <div class="infoIcon">
          <img
            src="/src/assets/img/air_24dp_CCCCCC_FILL0_wght400_GRAD0_opsz24.svg"
            alt="wind"
          />
        </div>
        <div class="realFeel">
          <p>Wind</p>
          <span>{{ windSpeed }} km/h</span>
        </div>
      </div>

      <div class="weatherItem">
        <div class="infoIcon">
          <img
            src="/src/assets/img/water_drop_24dp_CCCCCC_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Chance of rain"
          />
        </div>
        <div class="realFeel">
          <p>Chance of rain</p>
          <span class="rainPercentage">{{ rainChance }} %</span>
        </div>
      </div>

      <div class="weatherItem">
        <div class="infoIcon">
          <img
            src="/src/assets/img/brightness_5_24dp_CCCCCC_FILL0_wght400_GRAD0_opsz24.svg"
            alt="UV Index"
          />
        </div>
        <div class="realFeel">
          <p>UV Index</p>
          <span>{{ uvIndex }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  realFeel: {
    type: Number,
    required: true,
  },
  windSpeed: {
    type: Number,
    required: true,
  },
  rainChance: {
    type: Number,
    required: true,
  },
  uvIndex: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.airConditions {
  color: #8a96a9;
  width: 100%;
  background-color: #242d3d;
  margin: 0.625rem 0 0 0;
  padding-top: 1rem;
  padding-left: 1rem;
  border-radius: 0.75rem;
}
.titleAction p {
  margin-left: 1rem;
}
.titleAction {
  display: flex;
  justify-content: space-between;
}
.seeMore {
  width: 5rem;
  height: 1.8rem;
  border-radius: 1.1rem;
  border: none;
  color: white;
  background-color: rgb(33, 121, 229);
  cursor: pointer;
  margin-right: 1.25rem;
}
.weatherStats,
.weatherMetrics {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.realFeel span {
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
}
.tempValue {
  display: flex;
  flex-direction: column;
}
.weatherItem {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  flex-basis: 50%;
}
@media (max-width: 480px){
  .titleAction{
    font-size: 14px;
  }
  .seeMore{
  margin: -0.625rem 1.4rem 0 0 ;  
  }
  .realFeel{
    font-size: 14px;
  }
  .realFeel span{
font-size: 18px;
  }
}
</style>
