<template>
  <div class="weatherForecast">
    <p class="titleForecast">TODAY'S FORECAST</p>
    <div class="temperatureBlock">
      <div class="forecastItem">
        <p>6.00</p>
        <img
          src="/src/assets/img/rainy_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
          alt="cloud"
        />
        <h2>25</h2>
      </div>

      <span class="line"></span>

      <div class="forecastItem">
        <p>6.00</p>
        <img
          src="/src/assets/img/rainy_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
          alt="cloud"
        />
        <h2>25</h2>
      </div>
      <span class="line"></span>

      <div class="forecastItem">
        <p>6.00</p>
        <img
          src="/src/assets/img/rainy_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
          alt="cloud"
        />
        <h2>25</h2>
      </div>
      <span class="line"></span>

      <div class="forecastItem">
        <p>6.00</p>
        <img
          src="/src/assets/img/rainy_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
          alt="cloud"
        />
        <h2>25</h2>
      </div>
      <span class="line"></span>

      <div class="forecastItem">
        <p>6.00</p>
        <img
          src="/src/assets/img/rainy_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
          alt="cloud"
        />
        <h2>25</h2>
      </div>
      <span class="line"></span>

      <div class="forecastItem">
        <p>6.00</p>
        <img
          src="/src/assets/img/rainy_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
          alt="cloud"
        />
        <h2>25</h2>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
<style>
.weatherForecast {
  width: 100%;
  padding: 2rem;
  color: #8a96a9;
  background-color: #242d3d;
  border-radius: 0.6rem;
}
.titleForecast {
  color: #8a96a9;
  padding-bottom: 1rem;
  margin-left: -0.625rem;
}
.temperatureBlock {
  display: flex;
  justify-content: space-around;
  color: #8a96a9;
  gap: 2.5rem;
}
.line {
  height: 6.5rem;
  width: 0.032rem;
  background-color: #2e3e5b;
}
.forecastItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.forecastItem h2 {
  color: #f1f3f6;
}
</style>