<template>
  <div class="h-screen grid grid-rows-layout-body">
    <app-header />
    <main-view />
    <app-footer />
  </div>
</template>

<style src="./main.css"></style>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import MainView from "@/views/MainView.vue";
export default {
  name: "App",
  components: { AppHeader, AppFooter, MainView }
};
</script>
