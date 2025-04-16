<template>
  <div class="citiesContainer">
    <button
      v-for="city in cities"
      :key="city.value"
      @click="selectCity(city.value)"
    >
      {{ city.text }}
    </button>
  </div>
</template>
  
  <script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const cities = [
  { text: "Toshkent sh.", value: "Tashkent" },
  { text: "Buxoro sh.", value: "Buxoro" },
  { text: "Samarqand sh", value: "Samarkand" },
  { text: "Farg'ona sh", value: "Fergana" },
  { text: "Andijon sh", value: "Andijan" },
  { text: "Namangan sh", value: "Namangan" },
  { text: "Jizzax sh", value: "Jizzakh" },
  { text: "Qashqadaryo sh", value: "Qarshi" },
  { text: "Surxondaryo sh", value: "Termiz" },
  { text: "Xorazm sh", value: "Xiva" },
  { text: "Navoiy sh", value: "Navoi" },
  { text: "Qoraqalpog'iston Respublikasi", value: "Karakalpakstan" },
];

const selectCity = (cityValue) => {
  router.push({ path: "/", query: { city: cityValue } });
};
</script>
  
  <style scoped>
.citiesContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: space-between;
  margin: 15%;
}

button {
  width: 14rem;
  height: 3rem;
  cursor: pointer;
  border: none;
  border-radius: 0.625rem;
  background-color: #798395;
  color: rgb(240, 238, 238);

  transition: background-color 0.3s;
}

button:hover {
  background-color: darkgrey;
}
@media (max-width: 480px) {
  .citiesContainer {
    overflow-y: auto;
    max-height: 30rem;
    justify-content: center;
    margin-top: 30%;
  }
  .citiesContainer::-webkit-scrollbar {
    display: none;
  }
}
</style>
  