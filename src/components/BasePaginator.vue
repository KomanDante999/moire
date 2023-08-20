<template>
  <ul class="flex items-center justify-center flex-wrap mb-auto">
    <li class="pagination__item mr-6">
      <button
        @click="doUpdateCurrentPage(currentPagePagination - 1)"
        :class="{ 'pagination__link--disabled': currentPagePagination == 1 }"
        :disabled="currentPagePagination == 1"
        class="pagination__link pagination__link--events pagination__link-arrow pagination__link-arrow--events"
        aria-label="Предыдущая страница"
      >
        <svg class="mr-[2px]" width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </button>
    </li>
    <li v-for="page in diapazonPagination" :key="page">
      <button
        @click="doUpdateCurrentPage(page)"
        class="pagination__link pagination__link--events"
        :class="{
          'pagination__link--current':
            page == currentPagePagination || page == '...'
        }"
        :disabled="page == currentPagePagination || page == '...'"
      >
        {{ page }}
      </button>
    </li>
    <li class="pagination__item ml-6">
      <button
        @click="doUpdateCurrentPage(currentPagePagination + 1)"
        :class="{
          'pagination__link--disabled':
            currentPagePagination == paginationData.pages
        }"
        :disabled="currentPagePagination == paginationData.pages"
        class="pagination__link pagination__link--events pagination__link-arrow pagination__link-arrow--events"
        aria-label="Следующая страница"
      >
        <svg class="ml-[2px]" width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </button>
    </li>
  </ul>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "BasePaginator",
  computed: {
    ...mapState(["currentPagePagination"]),
    ...mapState(["paginationData"]),
    diapazonPagination() {
      if (this.paginationData.pages <= 3) {
        return this.paginationData.pages;
      } else if (this.currentPagePagination < 3) {
        return [1, 2, 3, "...", this.paginationData.pages];
      } else if (this.currentPagePagination > this.paginationData.pages - 2) {
        return [
          this.paginationData.pages - 3,
          this.paginationData.pages - 2,
          this.paginationData.pages - 1,
          "...",
          this.paginationData.pages
        ];
      } else {
        return [
          this.currentPagePagination - 1,
          this.currentPagePagination,
          this.currentPagePagination + 1,
          "...",
          this.paginationData.pages
        ];
      }
    }
  },
  methods: {
    ...mapMutations(["updateCurrentPage"]),
    doUpdateCurrentPage(page) {
      this.updateCurrentPage(page);
    }
  }
};
</script>
