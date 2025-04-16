<template>
  <div class="mapContainer">
    <div class="mapBox">
      <button
        v-for="city in cities"
        :key="city.text"
        @click="selectCity(city.coords)"
      >
        {{ city.text }}
      </button>
    </div>
    <div id="yandexMap" class="map"></div>
  </div>
</template>
  
  <script setup>
import { onMounted, ref } from "vue";

const cities = [
  { text: "Toshkent", coords: [41.3111, 69.2797] },
  { text: "Samarqand", coords: [39.6542, 66.9597] },
  { text: "Buxoro", coords: [39.7681, 64.455] },
  { text: "Andijon", coords: [40.7821, 72.3442] },
  { text: "Namangan", coords: [40.9983, 71.6726] },
  { text: "Farg'ona", coords: [40.3894, 71.7864] },
  { text: "Xorazm ", coords: [41.5537, 60.631] },
  { text: "Navoiy", coords: [40.0844, 65.3792] },
  { text: "Qashqadaryo", coords: [38.86, 65.8] },
  { text: "Surxondaryo", coords: [37.2242, 67.2783] },
  { text: "Jizzax", coords: [40.125, 67.88] },
  { text: "Sirdaryo", coords: [40.4897, 68.7842] },
  { text: "Toshkent viloyati", coords: [41.0283, 69.3783] },
  { text: "Qoraqalpog'iston", coords: [42.461, 59.6032] },
];

let mapInstance = null;

onMounted(() => {
  const checkYandex = setInterval(() => {
    if (window.ymaps) {
      clearInterval(checkYandex);
      window.ymaps.ready(initMap);
    }
  }, 100);
});

function initMap() {
  mapInstance = new window.ymaps.Map("yandexMap", {
    center: [41.3111, 69.2797],
    zoom: 7,
  });
}

function selectCity(coords) {
  if (mapInstance) {
    mapInstance.setCenter(coords, 9, {
      duration: 300,
    });
  }
}
</script>
  
  <style>
.mapContainer {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mapBox {
  max-width: 53.125rem;
  display: flex;
  overflow-x: auto;
  gap: 1rem;
}

.mapBox button {
  padding: 0 1rem;
  margin: 0.625rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.mapBox::-webkit-scrollbar {
  display: none;
}
.mapBox button:hover {
  background-color: #2980b9;
}

.map {
  width: 100%;
  max-width: 95%;
  height: 40.3125rem;
  border: 0.0625rem solid #ccc;
}
@media (max-width: 480px) {
  .mapContainer {
    max-width: 30rem;
  }
  .mapBox {
    display: flex;
    overflow-x: auto;
    max-width: 20rem;
    margin-top: 0.9rem;
    align-items: center;
  }
  .mapBox button {
    padding: 0.5rem;
  }
}
</style>
  