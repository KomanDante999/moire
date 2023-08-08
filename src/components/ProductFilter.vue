<template>
  <aside>
    <form class="px-6 pb-7" action="#" method="get">
      <fieldset class="mb-8">
        <legend class="form-legend">Цена</legend>
        <label class="filter-label label-price">
          <input class="form-input-style" name="min-price" value="0" />
          <span class="filter-cuption">От</span>
        </label>
        <label class="filter-label label-price">
          <input class="form-input-style" name="max-price" value="12345" />
          <span class="filter-cuption">До</span>
        </label>
      </fieldset>

      <fieldset class="mb-8">
        <legend class="form-legend">Категория</legend>
        <label class="filter-label">
          <FormSelect class="h-[52px] py-[14px] pr-9 pl-[18px]" />
        </label>
      </fieldset>

      <fieldset class="mb-8">
        <legend class="form-legend">Материал</legend>
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
      </fieldset>

      <fieldset class="mb-8">
        <legend class="form-legend">Коллекция</legend>
        <ul class="check-list">
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="collection"
                value="лето"
              />
              <span class="check-list__desc">
                лето
                <span>(2)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="collection"
                value="зима"
              />
              <span class="check-list__desc">
                зима
                <span>(53)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="collection"
                value="весна"
              />
              <span class="check-list__desc">
                весна
                <span>(24)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input
                class="check-list__check sr-only"
                type="checkbox"
                name="collection"
                value="осень"
              />
              <span class="check-list__desc">
                осень
                <span>(30)</span>
              </span>
            </label>
          </li>
        </ul>
      </fieldset>

      <button
        class="w-full mb-4 button-style button-primary bg-alarm"
        type="submit"
      >
        Применить
      </button>
      <button class="w-36 p-4 button-style button-second" type="button">
        Сбросить
      </button>
    </form>
  </aside>
</template>

<script>
import FormSelect from "./FormSelect.vue";

export default { components: { FormSelect } };
</script>
