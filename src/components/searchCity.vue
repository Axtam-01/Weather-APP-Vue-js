<template>
  <div class="sections">
    <section class="weatherNav">
      <input
        v-model="city"
        @keyup.enter="submitCity"
        type="text"
        placeholder="Search for cities"
        class="search"
      />
      <button @click="submitCity" class="searchBtn">
        <img
          src="/src/assets/img/search_24dp_FFF_FILL0_wght400_GRAD0_opsz24 (1).svg"
          alt="searchImg"
        />
      </button>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["city-selected"]);

const city = ref("");

const submitCity = () => {
  if (city.value.trim()) {
    emit("city-selected", city.value);
    city.value = "";
  }
};
</script>

<style scoped>
.search {
  width: 100%;
  height: 2.2rem;
  border-radius: 0.52rem;
  color: white;
  background: #242d3d;
  border: none;
  padding-left: 0.9rem;
  outline: none;
  padding-left: 40px;
}
.search::placeholder {
  color: rgb(138, 131, 131);
}
.weatherNav {
  display: flex;
  align-items: center;
}
.searchBtn {
  background: none;
  border: none;
  position: absolute;
  left: 260px;
  cursor: pointer;
}
</style>
