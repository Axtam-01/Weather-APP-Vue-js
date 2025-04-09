<template >
  <div class="weatherContainer">
    <div class="weatherInfo">
      <h1 class="cityName">Madrid</h1>
      <p class="rainChance">
        Chance of rain: <span class="rainPercentage">0%</span>
      </p>
      <h1 class="temperature">31°</h1>
    </div>

    <span class="sunImage">sun</span>
  </div>
</template>
<script>
export default {};
</script>
<style >
.weatherContainer {
  display: flex;
  gap: 3.5rem;
  color: white;
  margin: 3rem;
  padding-bottom:2.3125rem;
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
</style>