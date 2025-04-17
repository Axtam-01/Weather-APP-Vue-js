<template>
  <div class="sections">
    <section class="weatherNav">
      <input
        v-model="city"
        @keyup.enter="handleEnter"
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

const handleEnter = (event) => {
  event.target.blur();
  submitCity();
};
const submitCity = () => {
  if (city.value.trim()) {
    emit("city-selected", city.value);
    city.value = "";
  }
};
</script>

<style scoped>
.search {
  min-width: 41rem;
 
  height: 2.2rem;
  border-radius: 0.52rem;
  color: white;
  background: #242d3d;
  border: none;
  padding-left: 0.9rem;
  outline: none;
  padding: 0 3.5rem;
  margin-top: 2.2rem;
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
   cursor: pointer;
   top: 2.5rem;
  margin-left: 0.625rem;
}
@media (max-width: 480px) {
  .searchBtn {
    left: 2.5rem;
    top: 1rem;
  }
  .search::placeholder {
    padding: 2.5rem;
  }
  .search {
    margin: 0 2rem 2rem 2rem;
    min-width: 19rem;
  }
  .weatherNav {
    margin-top: 0.625rem;
  }
}
</style>
