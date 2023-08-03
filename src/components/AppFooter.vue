<template>
  <footer class="bg-gradient-to-t from-white from-60% to-orange-100">
    <div class="main-container">
      <div class="py-14 grid grid-cols-layout-foter gap-5">
        <!-- links -->
        <ul class="grid grid-cols-3 gap-x-5 gap-y-7">
          <li>
            <a
              class="text-sm leading-6 border-b-2 border-transparent hover:"
              href="#"
            >
              Каталог
            </a>
          </li>
          <li>
            <a class="footer__link" href="tel:88006009009"> 8 800 600 90 09 </a>
          </li>
          <li>
            <a class="footer__link" href="mailto:hi@technozavrrr.com">
              hi@technozavrrr.com
            </a>
          </li>
          <li>
            <a class="footer__link" href="#"> Распродажа </a>
          </li>
          <li>
            <a class="footer__link footer__link--medium" href="#">
              Заказать звонок
            </a>
          </li>
        </ul>
        <!-- social links -->
        <ul class="flex items-start justify-end">
          <li class="">
            <a class="social__link" href="#" aria-label="Вконтакте">
              <svg width="20" height="11" fill="currentColor">
                <use xlink:href="#icon-vk"></use>
              </svg>
            </a>
          </li>
          <li class="ml-7">
            <a class="social__link" href="#" aria-label="Инстаграм">
              <svg width="17" height="17" fill="currentColor">
                <use xlink:href="#icon-insta"></use>
              </svg>
            </a>
          </li>
          <li class="ml-7">
            <a class="social__link" href="#" aria-label="Facebook">
              <svg width="17" height="17" fill="currentColor">
                <use xlink:href="#icon-facebook"></use>
              </svg>
            </a>
          </li>
          <li class="ml-7">
            <a class="social__link" href="#" aria-label="Twitter">
              <svg width="17" height="14" fill="currentColor">
                <use xlink:href="#icon-twitter"></use>
              </svg>
            </a>
          </li>
          <li class="ml-7">
            <a class="social__link" href="#" aria-label="Telegram">
              <svg width="19" height="17" fill="currentColor">
                <use xlink:href="#icon-telegram"></use>
              </svg>
            </a>
          </li>
        </ul>
        <!-- description -->
        <p class="footer__desc">
          Все права на&nbsp;материалы, находящиеся на&nbsp;сайте, охраняются
          в&nbsp;соответствии с&nbsp;законодательством&nbsp;РФ, в&nbsp;том числе
          об&nbsp;авторском праве и&nbsp;смежных правах.
        </p>
        <!-- empty block -->
        <div></div>
        <!-- polisy -->
        <ul class="sm:order-last flex justify-between">
          <li>
            <a
              class="footer__link"
              href="#"
              target="_blank"
              rel="noopener"
              type="application/pdf"
            >
              Политика конфиденциальности
            </a>
          </li>
          <li>
            <a
              class="footer__link"
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
        <span class="footer__copyright"> © 2020 Moire </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>
