<template >
  <div class="sidebarMenu">
    <div class="weatherIcon">
      <div class="iconBox">
        <img
          src="/src/assets/img/beach_access_24dp_7CA7D8_FILL0_wght400_GRAD0_opsz24.svg"
          alt="umbrella"
          style="margin: 0 auto; padding-bottom: 60px; margin-top: 30px"
          width="24px"
          class="imgUmbrella"
        />

        <button class="buttonIcon">
          <img
            src="/src/assets/img/rainy_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
            alt="rainy"
          />
          <p>Weather</p>
        </button>
        <button class="buttonIcon">
          <img
            src="/src/assets/img/format_list_bulleted_24dp_FFFFFF.svg"
            alt="format_list"
          />
          <p>Cities</p>
        </button>
        <button class="buttonIcon">
          <img
            src="/src/assets/img/map_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
            alt="map"
          />
          <p>Map</p>
        </button>
        <button class="buttonIcon">
          <img
            src="/src/assets/img/tune_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
            alt="tune"
          />
          <p>Settings</p>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style >
.weatherIcon {
  width: 15.625rem;
  padding-bottom: 17rem;
}
.sidebarMenu {
  background: #242d3d;
  border-radius: 0.625rem;
}
.buttonIcon {
  padding-bottom: 1.825rem;
  background: none;
  color: white;
  border: none;
}
.iconBox {
  display: flex;
  flex-direction: column;
}
</style>