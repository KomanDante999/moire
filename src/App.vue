<template>
  <div class="h-screen grid grid-rows-layout-body">
    <app-header />

    <main>
      <div class="main-container">
        <router-view />
      </div>
    </main>

    <app-footer />
  </div>
</template>

<style src="./main.css"></style>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "App",
  components: { AppHeader, AppFooter }
};
</script>
