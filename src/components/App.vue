<template>
  <div class="manibox">
    <div class="sidebarNav">
      <navigation-bar />
    </div>
    <div class="contentWrapper">   
    <router-view />     
    </div>
     
  </div>
</template>

<script setup>
import NavigationBar from "@/components/NavigationBar.vue";
</script>

<style>
.manibox{
  gap: 0.625rem;
  display: flex;
  
}
.contentWrapper{
  flex: 1;
}
.sidebarNav{
  margin-top: 2.2rem;
}
@media (max-width: 480px){
  .manibox{
    gap: 0;
  }
}
</style>
