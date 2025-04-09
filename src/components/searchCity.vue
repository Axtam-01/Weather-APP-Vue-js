<template >
  <div>
    <div class="sections">
      <section class="weatherNav">
        <input
          type="text"
          name="search"
          placeholder="Search for cities"
          class="search"
        />
      </section>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
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