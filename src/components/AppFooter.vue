<template>
  <footer class="bg-gradient-to-t from-white from-60% to-orange-100">
    <div class="main-container">
      <div
        class="py-9 grid grid-cols-1 gap-y-5 md:py-14 md:grid-cols-layout-footer md:gap-x-14 md:gap-y-7"
      >
        <!-- links -->
        <ul
          class="grid grid-cols-1 mob:grid-cols-2 gap-y-3 gap-x-5 sm:grid-cols-3 md:gap-y-7"
        >
          <li>
            <router-link class="footer-link" :to="{ name: 'home' }">
              Каталог
            </router-link>
          </li>
          <li>
            <a class="footer-link" href="tel:88006009009"> 8 800 600 90 09 </a>
          </li>
          <li>
            <a class="footer-link" href="mailto:hi@technozavrrr.com">
              hi@technozavrrr.com
            </a>
          </li>
          <li>
            <a class="footer-link" href="#"> Распродажа </a>
          </li>
          <li>
            <a class="footer-link font-medium" href="#"> Заказать звонок </a>
          </li>
        </ul>
        <!-- social links -->
        <ul
          class="flex items-start justify-start mob:justify-center md:justify-end"
        >
          <li>
            <a class="social-link" href="#" aria-label="Вконтакте">
              <svg width="20" height="11" fill="currentColor">
                <use xlink:href="#icon-vk"></use>
              </svg>
            </a>
          </li>
          <li class="ml-7">
            <a class="social-link" href="#" aria-label="Инстаграм">
              <svg width="17" height="17" fill="currentColor">
                <use xlink:href="#icon-insta"></use>
              </svg>
            </a>
          </li>
          <li class="ml-7">
            <a class="social-link" href="#" aria-label="Facebook">
              <svg width="17" height="17" fill="currentColor">
                <use xlink:href="#icon-facebook"></use>
              </svg>
            </a>
          </li>
          <li class="ml-7">
            <a class="social-link" href="#" aria-label="Twitter">
              <svg width="17" height="14" fill="currentColor">
                <use xlink:href="#icon-twitter"></use>
              </svg>
            </a>
          </li>
          <li class="ml-7">
            <a class="social-link" href="#" aria-label="Telegram">
              <svg width="19" height="17" fill="currentColor">
                <use xlink:href="#icon-telegram"></use>
              </svg>
            </a>
          </li>
        </ul>
        <!-- description -->
        <div class="flex justify-center md:justify-start">
          <p
            class="inline-block max-w-[550px] text-sm leading-6 text-secondary mob:text-center md:text-left"
          >
            Все права на&nbsp;материалы, находящиеся на&nbsp;сайте, охраняются
            в&nbsp;соответствии с&nbsp;законодательством&nbsp;РФ, в&nbsp;том
            числе об&nbsp;авторском праве и&nbsp;смежных правах.
          </p>
        </div>
        <!-- polisy -->
        <ul
          class="md:row-span-2 flex md:justify-between items-end flex-wrap content-end"
        >
          <li class="mr-6 md:mr-4">
            <a
              class="footer-link"
              href="#"
              target="_blank"
              rel="noopener"
              type="application/pdf"
            >
              Политика конфиденциальности
            </a>
          </li>
          <li class="pt-2 md:pt-3">
            <a
              class="footer-link"
              href="#"
              target="_blank"
              rel="noopener"
              type="application/pdf"
            >
              Публичная оферта
            </a>
          </li>
        </ul>
        <!-- copyright -->
        <span class="text-xs leading-4"> © 2020 Moire </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>
