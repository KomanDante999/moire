<template>
  <div class="h-screen grid grid-rows-layout-body">
    <layout-header />

    <main>
      <div class="main-container pt-8 pb-20">
        <router-view />
      </div>
    </main>
    <LayoutFooter />
  </div>
  <div id="teleport-target" />
</template>

<style src="./main.css"></style>

<script>
import LayoutFooter from "./components/LayoutFooter.vue";
import LayoutHeader from "./components/LayoutHeader.vue";

export default {
  name: "App",
  components: { LayoutHeader, LayoutFooter }
};
</script>
