<template>
  <div class="forecastWeek">
    <p class="textAside">7-DAY FORECAST</p>
<div class="weatherWrapper">
    <div class="todayBox">
      <p>Today</p>
      <img
        src="/src/assets/img/rainy_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
        alt="cloud"
      />
      <p>Sunny</p>
      <p><span>36</span>/22</p>
    </div>
    <p class="linesAside"></p>
  </div>
  <div class="weatherWrapper">
    <div class="todayBox">
      <p>Today</p>
      <img
        src="/src/assets/img/rainy_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
        alt="cloud"
      />
      <p>Sunny</p>
      <p><span>36</span>/22</p>
    </div>
  
  </div>
  <div class="weatherWrapper">
    <div class="todayBox">
      <p>Today</p>
      <img
        src="/src/assets/img/rainy_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
        alt="cloud"
      />
      <p>Sunny</p>
      <p><span>36</span>/22</p>
    </div>
   
  </div>
  <div class="weatherWrapper">
    <div class="todayBox">
      <p>Today</p>
      <img
        src="/src/assets/img/rainy_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
        alt="cloud"
      />
      <p>Sunny</p>
      <p><span>36</span>/22</p>
    </div>
    
  </div>
  <div class="weatherWrapper">
    <div class="todayBox">
      <p>Today</p>
      <img
        src="/src/assets/img/rainy_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
        alt="cloud"
      />
      <p>Sunny</p>
      <p><span>36</span>/22</p>
    </div>
   
  </div>

  <div class="weatherWrapper">
    <div class="todayBox">
      <p>Today</p>
      <img
        src="/src/assets/img/rainy_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
        alt="cloud"
      />
      <p>Sunny</p>
      <p><span>36</span>/22</p>
    </div>
   
  </div>
 
    <div class="todayBox">
      <p>Today</p>
      <img
        src="/src/assets/img/rainy_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
        alt="cloud"
      />
      <p>Sunny</p>
      <p><span>36</span>/22</p>

    
  </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.textAside{
padding: 1.5rem;
margin-left: 2.2rem;
}
.weatherWrapper::after {
  content: '';
  display: block; 
  border-bottom: 0.0625rem solid #2e3e5b;;  
  margin: 0 auto;
  width: 80%;
  
}
.forecastWeek{
  color: #ffff;
}
.forecastWeek{
  widows: 100%;
  height: 37.5rem;
  color: #8a96a9;
  background-color: #242d3d;
  margin-top: 1.8rem;
  border-radius: 0.625rem;
  
}
.todayBox{
  display: flex;
  justify-content: space-around;
  align-items: center;


}

.todayBox span{
  color: white;
}
.todayBox p:nth-child(3){
  color: #eff3f9;
  margin: 1.7rem;
}
</style>