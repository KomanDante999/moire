<template>
  <ul>
    <li class="check-list__item">
      <label class="check-list__label">
        <input
          class="check-list__check sr-only"
          type="checkbox"
          name="material"
          value="лен"
        />
        <span class="check-list__desc">
          лен
          <span>(3)</span>
        </span>
      </label>
    </li>
    <li class="check-list__item">
      <label class="check-list__label">
        <input
          class="check-list__check sr-only"
          type="checkbox"
          name="material"
          value="хлопок"
        />
        <span class="check-list__desc">
          хлопок
          <span>(46)</span>
        </span>
      </label>
    </li>
    <li class="check-list__item">
      <label class="check-list__label">
        <input
          class="check-list__check sr-only"
          type="checkbox"
          name="material"
          value="шерсть"
        />
        <span class="check-list__desc">
          шерсть
          <span>(20)</span>
        </span>
      </label>
    </li>
    <li class="check-list__item">
      <label class="check-list__label">
        <input
          class="check-list__check sr-only"
          type="checkbox"
          name="material"
          value="шелк"
        />
        <span class="check-list__desc">
          шелк
          <span>(30)</span>
        </span>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: "FormCheckbox",
  props: {
    categoriesData: Array,
    selectedItems: {
      type: Array,
      require: true,
      default: []
    }
  }
};
</script>
