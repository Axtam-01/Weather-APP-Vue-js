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
}
.search::placeholder {
  color: white;
}
</style>
