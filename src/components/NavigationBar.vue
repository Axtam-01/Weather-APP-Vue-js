<template>
  <div>
    <button class="openBtn" @click="isOpen = true" v-if="!isOpen">☰</button>
    <div v-if="isOpen" class="overlay" @click="isOpen = false"></div>

    <div class="sidebarMenu" :class="{ active: isOpen }">
      <div class="weatherIcon">
        <div class="iconBox">
          <button class="closeBtn" @click="isOpen = false">✖</button>

          <router-link to="/" class="buttonIcon" @click="isOpen = false">
            <img
              src="/src/assets/img/rainy_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
              alt="rainy"
            />
            <p>Weather</p>
          </router-link>

          <router-link to="/cities" class="buttonIcon" @click="isOpen = false">
            <img
              src="/src/assets/img/format_list_bulleted_24dp_FFFFFF.svg"
              alt="format_list"
            />
            <p>Cities</p>
          </router-link>

          <router-link to="/map" class="buttonIcon" @click="isOpen = false">
            <img
              src="/src/assets/img/map_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
              alt="map"
            />
            <p>Map</p>
          </router-link>
          <router-link to="/Settings" class="buttonIcon" @click="isOpen = false">
            <img
              src="/src/assets/img/tune_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg"
              alt="tune"
            />
            <p>Settings</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
</script>

<style scoped>
.sidebarMenu {
  background: #242d3d;
  border-radius: 0.625rem;
  width: 10rem;
  height: 100vh;
 position: fixed;

 
}

.iconBox {
  display: flex;
  flex-direction: column;
  padding:2rem;
  justify-content: center;
  margin-top: 4rem;
}
.buttonIcon {
  display: flex;
  flex-direction: column;
  padding-bottom: 1.825rem;
  background: none;
  color: white;
  border: none;
  text-decoration: none;
}
.buttonIcon img{
  width: 2.5rem;
  height: 2.5rem;
}

.openBtn,
.closeBtn {
  display: none;
}
@media (max-width: 480px) {
  .openBtn {
    display: block;
    position: fixed;
    background: none;
    color: white;
    padding: 0.625rem;
    border: none;
    font-size: 24px;
    z-index: 1000;
    cursor: pointer;
    left: -0.25rem;
  }

  .closeBtn {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }

  .sidebarMenu {
    position: fixed;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    z-index: 1000;
  }

  .sidebarMenu.active {
    left: 0;
  }
  .overlay {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 900;
  }
}
</style>
