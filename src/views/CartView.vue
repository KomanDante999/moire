<template>
  <div class="mb-9">
    <BaseBreadcrumbs />

    <div class="flex items-center">
      <h1 class="title-main">Корзина</h1>
      <span class="product-count"> 3 товара </span>
    </div>
  </div>

  <section>
    <form
      class="grid grid-cols-1 gap-y-14 lg:grid-cols-layout-cart lg:gap-x-10 lx:gap-x-12"
      method="POST"
    >
      <ul>
        <li class="cart-item product">
          <div class="">
            <img
              src="img/product-square-4.jpg"
              width="120"
              height="120"
              srcset="img/product-square-4@2x.jpg 2x"
              alt="Название товара"
            />
          </div>
          <div class="flex flex-col h-full">
            <h3 class="mb-auto">Базовая хлопковая футболка</h3>
            <div class="flex items-center mb-4">
              <p class="mr-2 text-sm leading-none text-neutral-500">Цвет:</p>
              <i
                class="mr-2 block w-5 h-5 rounded-full"
                style="background-color: #ff9b78"
              ></i>
              <span class="text-sm leading-none text-primary">
                Персиковый
              </span>
            </div>
            <span class="text-xs text-b9b9b9"> Артикул: 1501230 </span>
          </div>

          <FormCounterProduct class="title-base" />

          <button
            class="button-del"
            type="button"
            aria-label="Удалить товар из корзины"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-auto h-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
        <li class="cart-item product">
          <div class="">
            <img
              src="img/product-square-4.jpg"
              width="120"
              height="120"
              srcset="img/product-square-4@2x.jpg 2x"
              alt="Название товара"
            />
          </div>
          <div class="flex flex-col">
            <h3 class="mb-auto">Базовая хлопковая футболка</h3>
            <div class="flex items-center mb-4">
              <p class="mr-2 text-sm leading-none text-neutral-500">Цвет:</p>
              <i
                class="mr-2 block w-5 h-5 rounded-full"
                style="background-color: #ff9b78"
              ></i>
              <span class="text-sm leading-none text-primary">
                Персиковый
              </span>
            </div>
            <span class="text-xs text-b9b9b9"> Артикул: 1501230 </span>
          </div>

          <FormCounterProduct class="title-base" />

          <button
            class="button-del"
            type="button"
            aria-label="Удалить товар из корзины"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-auto h-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
        <li class="cart-item product">
          <div class="">
            <img
              src="img/product-square-4.jpg"
              width="120"
              height="120"
              srcset="img/product-square-4@2x.jpg 2x"
              alt="Название товара"
            />
          </div>
          <div class="flex flex-col">
            <h3 class="mb-auto">Базовая хлопковая футболка</h3>
            <div class="flex items-center mb-4">
              <p class="mr-2 text-sm leading-none text-neutral-500">Цвет:</p>
              <i
                class="mr-2 block w-5 h-5 rounded-full"
                style="background-color: #ff9b78"
              ></i>
              <span class="text-sm leading-none text-primary">
                Персиковый
              </span>
            </div>
            <span class="text-xs text-b9b9b9"> Артикул: 1501230 </span>
          </div>

          <FormCounterProduct class="title-base" />

          <button
            class="button-del"
            type="button"
            aria-label="Удалить товар из корзины"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-auto h-auto"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
      </ul>

      <div
        class="w-full py-7 px-5 mob:w-[370px] lg:w-[340px] xl:w-[370px] h-[fit-content] lg:py-7 lg:px-5 xl:py-9 xl:px-8 border border-dedede"
      >
        <p class="mb-4">
          Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе
        </p>
        <p class="mb-9 text-3xl leading-[48px]">
          Итого: <span class="font-medium text-[34px]">4 070 ₽</span>
        </p>

        <button
          class="w-full bg-alarm button-style button-primary"
          type="submit"
        >
          Оформить заказ
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import BaseBreadcrumbs from "@/components/BaseBreadcrumbs.vue";
import FormCounterProduct from "@/components/FormCounterProduct.vue";

export default {
  name: "CartView",
  components: { BaseBreadcrumbs, FormCounterProduct }
};
</script>
