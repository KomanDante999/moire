<template>
  <div class="md:col-span-2">
    <form>
      <ul class="flex items-center border-b border-secondary/60">
        <li v-for="(item, index) in infoData" :key="index" class="tabs__item">
          <label
            @keydown.enter="handleTabEnter(index)"
            @keydown.space="handleTabSpace(index)"
            :class="{ 'tabs__btn--current': index == selectedTab }"
            class="tabs__btn"
            tabindex="0"
          >
            <input
              v-model="selectedTabValue"
              :value="index"
              ref="selected"
              class="select-colors__input sr-only"
              type="radio"
            />
            <span class=""> {{ item.title }}</span>
          </label>
        </li>
      </ul>
    </form>

    <ul>
      <li
        v-for="(item, index) in infoData"
        :key="index"
        :class="{ hidden: index != selectedTab }"
        class="pt-12"
      >
        <ul>
          <li v-for="(contentItem, index) in item.content" :key="index">
            <h3 class="mb-[6px] title-h3">{{ contentItem.subtitle }}</h3>
            <p
              class="mb-5 font-light leading-7"
              v-html="insertLineBreaks(contentItem.info)"
            ></p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "baseTabs",
  props: {
    infoData: Array
  },
  data() {
    return {
      selectedTab: 0
    };
  },
  computed: {
    selectedTabValue: {
      get() {
        return this.selectedTab;
      },
      set(nevValue) {
        this.updatedSelectedTab(nevValue);
      }
    }
  },
  methods: {
    updatedSelectedTab(index) {
      this.selectedTab = index;
    },
    handleTabEnter(index) {
      this.$refs.selected[index].click();
    },
    handleTabSpace(index) {
      this.handleTabEnter(index);
    },
    insertLineBreaks(text) {
      return text.replace(/;/g, "<br>");
    }
  }
};
</script>
