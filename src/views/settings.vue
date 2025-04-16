<template >
  <div class="settingsbox">
    <img
      src="/src/assets/img/construction_24dp_EFEFEF_FILL0_wght400_GRAD0_opsz24.png"
      alt="constructionImg"
    />
    <h1>IT WILL BE LAUNCHED SOON</h1>
  </div>
</template>
<script setup>
</script>
<style >
.settingsbox {
  display: flex;
  color: white;
  margin: 20%;
  gap: 1rem;
}
.settingsbox img {
  width: 3rem;
  height: 3rem;
}
@media (max-width: 480px) {
  .settingsbox {
    padding-top: 50%;
    font-size: 12px;
  }
}
</style>