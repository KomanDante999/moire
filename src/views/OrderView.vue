<template>
  <div class="mb-9">
    <BaseBreadcrumbs :breadcrumbs="breadcrumbsData" />

    <h1 class="title-main">Оформление заказа</h1>
  </div>

  <section>
    <form
      @submit.prevent="createOrder"
      class="grid grid-rows-layout-order grid-cols-layout-order gap-y-5 gap-x-12"
    >
      <div class="row-span-2">
        <div class="grid grid-cols-2 gap-y-1 gap-x-7 mb-9">
          <FormInput
            v-model:value="userDataValue.name"
            cuption="ФИО"
            placeholder="Введите ваше полное имя"
            :errorMessage="orderErrorsData.name"
            class="order-label col-span-2"
          />
          <FormInput
            v-model:value="userDataValue.address"
            cuption="Адрес доставки"
            placeholder="Введите ваш адрес"
            :errorMessage="orderErrorsData.address"
            class="order-label col-span-2"
          />
          <FormInput
            v-model:value="userDataValue.phone"
            cuption="Телефон"
            placeholder="Введите ваш телефон"
            :errorMessage="orderErrorsData.phone"
            class="order-label"
          />
          <FormInput
            v-model:value="userDataValue.email"
            cuption="Email"
            placeholder="Введи ваш Email"
            :errorMessage="orderErrorsData.email"
            class="order-label"
          />
          <FormTextarea
            v-model:value="userDataValue.comment"
            cuption="Комментарий к заказу"
            placeholder="Ваши пожелания"
            class="order-label col-span-2"
          />
        </div>

        <div>
          <h3 class="title-order-h3 mb-5">Доставка</h3>
          <FormRadioOrder :categoriesData="deliveryType" />
          <h3 class="title-order-h3 mb-5">Оплата</h3>
          <FormRadioOrder :categoriesData="paymentType" />
        </div>
      </div>

      <div class="cart__block">
        <ul class="cart__orders">
          <li class="cart__order">
            <h3>Смартфон Xiaomi Redmi Note 7 Pro 6/128GB</h3>
            <b>990 ₽</b>
            <span>Артикул: 150030</span>
          </li>
          <li class="cart__order">
            <h3>Гироскутер Razor Hovertrax 2.0ii</h3>
            <b>1 990 ₽</b>
            <span>Артикул: 150030</span>
          </li>
          <li class="cart__order">
            <h3>Электрический дрифт-карт Razor Lil’ Crazy</h3>
            <b>4 090 ₽</b>
            <span>Артикул: 150030</span>
          </li>
        </ul>

        <div class="cart__total">
          <p>Доставка: <b>бесплатно</b></p>
          <p>Итого: <b>3</b> товара на сумму <b>4 070 ₽</b></p>
        </div>

        <button class="cart__button button button--primery" type="submit">
          Оформить заказ
        </button>
      </div>
      <div class="cart__error form__error-block">
        <h4>Заявка не отправлена!</h4>
        <p>
          Похоже произошла ошибка. Попробуйте отправить снова или перезагрузите
          страницу.
        </p>
      </div>
    </form>
  </section>
</template>

<script>
import BaseBreadcrumbs from "@/components/BaseBreadcrumbs.vue";
import FormInput from "@/components/FormInput.vue";
import FormRadioOrder from "@/components/FormRadioOrder.vue";
import FormTextarea from "@/components/FormTextarea.vue";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "OrderView",
  components: { BaseBreadcrumbs, FormInput, FormTextarea, FormRadioOrder },
  computed: {
    ...mapState(["userData", "orderErrorsData", "deliveryType", "paymentType"]),

    userDataValue: {
      get() {
        return this.userData;
      },
      set(newValue) {
        this.updateUserData(newValue);
      }
    },
    breadcrumbsData() {
      return [
        {
          titlePage: "Каталог",
          routerName: "home"
        },
        {
          titlePage: "Корзина",
          routerName: "basket"
        },
        {
          titlePage: "Оформление заказа",
          routerName: "",
          cursorNone: true
        }
      ];
    }
  },
  methods: {
    ...mapMutations(["updateUserData"]),
    ...mapActions(["createOrder"]),
    doCreateOrder() {
      const formData = {};
      this.createOrder(formData);
    }
  }
};
</script>
