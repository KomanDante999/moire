<template>
  <ul class="flex items-center flex-wrap">
    <li
      v-for="(page, index) in breadcrumbs"
      :key="index"
      class="breadcrumbs__item"
    >
      <router-link
        :to="{ name: page.routerName }"
        :class="{ 'pointer-events-none': page.cursorNone }"
        class="breadcrumbs__link"
      >
        {{ page.titlePage }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "BreadCrumbs",
  props: {
    breadcrumbs: {
      type: Array,
      require: true
    }
  }
};
</script>
