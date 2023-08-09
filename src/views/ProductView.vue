<template>
  <div class="mb-9">
    <!-- breadcrumbs -->
    <BaseBreadcrumbs />
  </div>

  <section class="grid gap-7 items-start">
    <div>
      <div class="mb-5">
        <img
          width="570"
          height="570"
          src="img/product-square-1.jpg"
          srcset="img/product-square-1@2x.jpg 2x"
          alt="Название товара"
        />
      </div>
      <ul class="grid grid-cols-5 gap-5">
        <li>
          <a href="" class="pics__link pics__link--current">
            <img
              width="98"
              height="98"
              src="img/product-square-2.jpg"
              srcset="img/product-square-2@2x.jpg 2x"
              alt="Название товара"
            />
          </a>
        </li>
        <li>
          <a href="" class="pics__link">
            <img
              width="98"
              height="98"
              src="img/product-square-3.jpg"
              srcset="img/product-square-3@2x.jpg 2x"
              alt="Название товара"
            />
          </a>
        </li>
      </ul>
    </div>

    <div>
      <span class="text-sm leading-none text-secondary">Артикул: 150030</span>
      <h2 class="title-h2 mt-3 mb-5">Носки с принтом мороженое</h2>
      <div>
        <form class="" action="#" method="POST">
          <div class="flex justify-start items-center mb-3">
            <div class="flex items-center w-[150px] h-[70px] mr-5">
              <button
                class="btn-round"
                type="button"
                aria-label="Убрать один товар"
              >
                <svg width="12" height="12" fill="currentColor">
                  <use xlink:href="#icon-minus"></use>
                </svg>
              </button>

              <input class="couter-input" value="1" name="count" />

              <button
                class="btn-round"
                type="button"
                aria-label="Добавить один товар"
              >
                <svg width="12" height="12" fill="currentColor">
                  <use xlink:href="#icon-plus"></use>
                </svg>
              </button>
            </div>

            <b class="price-main"> 18 990 ₽ </b>
          </div>

          <div class="flex justify-start items-start mb-9">
            <fieldset class="form__block mr-5">
              <legend class="form-legend">Цвет</legend>
              <FormSelectColors />
            </fieldset>

            <fieldset class="form__block">
              <legend class="form-legend">Размер</legend>
              <label class="form__label form__label--small form__label--select">
                <FormSelect />
              </label>
            </fieldset>
          </div>

          <button
            class="min-w-[200px] button-style button-primary bg-alarm"
            type="submit"
          >
            В корзину
          </button>
        </form>
      </div>
    </div>

    <div class="md:col-span-2">
      <ul class="flex items-center border-b border-secondary/60">
        <li class="tabs__item">
          <button class="tabs__btn tabs__btn--current">
            Информация о товаре
          </button>
        </li>
        <li class="tabs__item">
          <button class="tabs__btn">Доставка и возврат</button>
        </li>
      </ul>

      <div class="pt-12">
        <h3 class="mb-[6px] title-h3">Состав:</h3>

        <p class="mb-5 font-light leading-7">
          60% хлопок<br />
          30% полиэстер<br />
        </p>

        <h3 class="mb-[6px] title-h3">Уход:</h3>

        <p class="mb-5 font-light leading-7">
          Машинная стирка при макс. 30ºC короткий отжим<br />
          Гладить при макс. 110ºC<br />
          Не использовать машинную сушку<br />
          Отбеливать запрещено<br />
          Не подвергать химчистке<br />
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import BaseBreadcrumbs from "@/components/BaseBreadcrumbs.vue";
import FormSelect from "@/components/FormSelect.vue";
import FormSelectColors from "@/components/FormSelectColors.vue";

export default {
  name: "ProductView",
  components: { FormSelectColors, FormSelect, BaseBreadcrumbs }
};
</script>
