<template>
  <app-header />
  <app-footer />
</template>

<style src="./main.css"></style>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  name: "App",
  components: { AppHeader, AppFooter }
};
</script>
