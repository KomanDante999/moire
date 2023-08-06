<template>
  <section class="flex flex-col self-stretch pb-20">
    <ul
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-10 lg:gap-y-16 mb-16"
    >
      <li class="flex flex-col items-center">
        <a class="catalog__pic" href="#">
          <img
            src="img/product-1.jpg"
            srcset="img/product-1@2x.jpg 2x"
            alt="Название товара"
          />
        </a>

        <router-link :to="{ name: 'product' }">
          <h3 class="max-w-[270px] mb-2">Кружевной бюстгалтер без косточек</h3>
        </router-link>

        <span class="catalog__price"> 3 690 ₽ </span>

        <ul class="select-colors">
          <li class="select-colors__item">
            <label class="select-colors__label" tabindex="0">
              <input
                class="select-colors__input sr-only"
                type="radio"
                name="color-1"
                value="#73B6EA"
                checked=""
              />
              <span
                class="select-colors__value"
                style="background-color: #73b6ea"
              >
              </span>
            </label>
          </li>
          <li class="select-colors__item">
            <label class="select-colors__label" tabindex="0">
              <input
                class="select-colors__input sr-only"
                type="radio"
                name="color-1"
                value="#8BE000"
              />
              <span
                class="select-colors__value"
                style="background-color: #8be000"
              >
              </span>
            </label>
          </li>
          <li class="select-colors__item">
            <label class="select-colors__label" tabindex="0">
              <input
                class="select-colors__input sr-only"
                type="radio"
                name="color-1"
                value="#222"
              />
              <span class="select-colors__value" style="background-color: #222">
              </span>
            </label>
          </li>
        </ul>
      </li>

      <li>
        <a class="catalog__pic" href="#">
          <img
            src="img/product-2.jpg"
            srcset="img/product-2@2x.jpg 2x"
            alt="Название товара"
          />
        </a>

        <h3 class="max-w-[270px] mb-2">
          <a href="#"> Трусы с кружевными элементами </a>
        </h3>

        <span class="catalog__price"> 5 660 ₽ </span>

        <ul class="select-colors">
          <li class="select-colors__item">
            <label class="select-colors__label">
              <input
                class="sr-only"
                type="radio"
                name="color-2"
                value="#F0F0F0"
                checked=""
              />
              <span
                class="select-colors__value"
                style="background-color: #f0f0f0"
              >
              </span>
            </label>
          </li>
          <li class="select-colors__item">
            <label class="select-colors__label">
              <input
                class="sr-only"
                type="radio"
                name="color-2"
                value="#8BE000"
              />
              <span
                class="select-colors__value"
                style="background-color: #8be000"
              >
              </span>
            </label>
          </li>
          <li class="select-colors__item">
            <label class="select-colors__label">
              <input
                class="colors__radio sr-only"
                type="radio"
                name="color-2"
                value="#73B6EA"
              />
              <span
                class="select-colors__value"
                style="background-color: #73b6ea"
              >
              </span>
            </label>
          </li>
        </ul>
      </li>

      <li>
        <a class="catalog__pic" href="#">
          <img
            src="img/product-3.jpg"
            srcset="img/product-2@2x.jpg 2x"
            alt="Название товара"
          />
        </a>

        <h3 class="max-w-[270px] mb-2">
          <a href="#"> Теплые шерстяные носки </a>
        </h3>

        <span class="catalog__price"> 790 ₽ </span>

        <ul class="select-colors">
          <li class="select-colors__item">
            <label class="select-colors__label">
              <input
                class="colors__radio sr-only"
                type="radio"
                name="color-02"
                value="#F0F0F0"
                checked=""
              />
              <span
                class="select-colors__value"
                style="background-color: #f0f0f0"
              >
              </span>
            </label>
          </li>
          <li class="select-colors__item">
            <label class="select-colors__label">
              <input
                class="colors__radio sr-only"
                type="radio"
                name="color-02"
                value="#8BE000"
              />
              <span
                class="select-colors__value"
                style="background-color: #8be000"
              >
              </span>
            </label>
          </li>
          <li class="select-colors__item">
            <label class="select-colors__label">
              <input
                class="colors__radio sr-only"
                type="radio"
                name="color-02"
                value="#73B6EA"
              />
              <span
                class="select-colors__value"
                style="background-color: #73b6ea"
              >
              </span>
            </label>
          </li>
        </ul>
      </li>

      <li>
        <a class="catalog__pic" href="#">
          <img
            src="img/product-4.jpg"
            srcset="img/product-4@2x.jpg 2x"
            alt="Название товара"
          />
        </a>

        <h3 class="max-w-[270px] mb-2">
          <a href="#"> Теплые шерстяные носки </a>
        </h3>

        <span class="catalog__price"> 690 ₽ </span>

        <ul class="select-colors">
          <li class="select-colors__item">
            <label class="select-colors__label">
              <input
                class="colors__radio sr-only"
                type="radio"
                name="color-3"
                value="#939393"
                checked=""
              />
              <span
                class="select-colors__value"
                style="background-color: #939393"
              >
              </span>
            </label>
          </li>
          <li class="select-colors__item">
            <label class="select-colors__label">
              <input
                class="colors__radio sr-only"
                type="radio"
                name="color-3"
                value="#FF6B00"
              />
              <span
                class="select-colors__value"
                style="background-color: #ff6b00"
              >
              </span>
            </label>
          </li>
          <li class="select-colors__item">
            <label class="select-colors__label">
              <input
                class="colors__radio sr-only"
                type="radio"
                name="color-3"
                value="#222"
              />
              <span class="select-colors__value" style="background-color: #222">
              </span>
            </label>
          </li>
        </ul>
      </li>

      <li>
        <a class="catalog__pic" href="#">
          <img
            src="img/product-5.jpg"
            srcset="img/product-5@2x.jpg 2x"
            alt="Название товара"
          />
        </a>

        <h3 class="max-w-[270px] mb-2">
          <a href="#"> Носки с принтом мороженое </a>
        </h3>

        <span class="catalog__price"> 960 ₽ </span>

        <ul class="select-colors">
          <li class="select-colors__item">
            <label class="select-colors__label">
              <input
                class="colors__radio sr-only"
                type="radio"
                name="color-03"
                value="#939393"
                checked=""
              />
              <span
                class="select-colors__value"
                style="background-color: #939393"
              >
              </span>
            </label>
          </li>
          <li class="select-colors__item">
            <label class="select-colors__label">
              <input
                class="colors__radio sr-only"
                type="radio"
                name="color-03"
                value="#FF6B00"
              />
              <span
                class="select-colors__value"
                style="background-color: #ff6b00"
              >
              </span>
            </label>
          </li>
          <li class="select-colors__item">
            <label class="select-colors__label">
              <input
                class="colors__radio sr-only"
                type="radio"
                name="color-03"
                value="#222"
              />
              <span class="select-colors__value" style="background-color: #222">
              </span>
            </label>
          </li>
        </ul>
      </li>

      <li>
        <a class="catalog__pic" href="#">
          <img
            src="img/product-6.jpg"
            srcset="img/product-7@2x.jpg 2x"
            alt="Название товара"
          />
        </a>

        <h3 class="max-w-[270px] mb-2">
          <a href="#"> Базовая футболка </a>
        </h3>

        <span class="catalog__price"> 960 ₽ </span>

        <ul class="select-colors">
          <li class="select-colors__item">
            <label class="select-colors__label">
              <input
                class="colors__radio sr-only"
                type="radio"
                name="color-04"
                value="#FFBE15"
                checked=""
              />
              <span
                class="select-colors__value"
                style="background-color: #ffbe15"
              >
              </span>
            </label>
          </li>
          <li class="select-colors__item">
            <label class="select-colors__label">
              <input
                class="colors__radio sr-only"
                type="radio"
                name="color-04"
                value="#8BE000"
              />
              <span
                class="select-colors__value"
                style="background-color: #8be000"
              >
              </span>
            </label>
          </li>
          <li class="select-colors__item">
            <label class="select-colors__label">
              <input
                class="colors__radio sr-only"
                type="radio"
                name="color-04"
                value="#FF6B00"
              />
              <span
                class="select-colors__value"
                style="background-color: #ff6b00"
              >
              </span>
            </label>
          </li>
        </ul>
      </li>

      <li>
        <a class="catalog__pic" href="#">
          <img
            src="img/product-7.jpg"
            srcset="img/product-7@2x.jpg 2x"
            alt="Название товара"
          />
        </a>

        <h3 class="max-w-[270px] mb-2">
          <a href="#"> Базовая хлопковая футболка </a>
        </h3>

        <span class="catalog__price"> 900 ₽ </span>

        <ul class="select-colors">
          <li class="select-colors__item">
            <label class="select-colors__label">
              <input
                class="colors__radio sr-only"
                type="radio"
                name="color-4"
                value="#FFBE15"
                checked=""
              />
              <span
                class="select-colors__value"
                style="background-color: #ffbe15"
              >
              </span>
            </label>
          </li>
          <li class="select-colors__item">
            <label class="select-colors__label">
              <input
                class="colors__radio sr-only"
                type="radio"
                name="color-4"
                value="#8BE000"
              />
              <span
                class="select-colors__value"
                style="background-color: #8be000"
              >
              </span>
            </label>
          </li>
          <li class="select-colors__item">
            <label class="select-colors__label">
              <input
                class="colors__radio sr-only"
                type="radio"
                name="color-4"
                value="#FF6B00"
              />
              <span
                class="select-colors__value"
                style="background-color: #ff6b00"
              >
              </span>
            </label>
          </li>
        </ul>
      </li>

      <li>
        <a class="catalog__pic" href="#">
          <img
            src="img/product-8.jpg"
            srcset="img/product-8@2x.jpg 2x"
            alt="Название товара"
          />
        </a>

        <h3 class="max-w-[270px] mb-2">
          <a href="#"> Базовая футболка для сна </a>
        </h3>

        <span class="catalog__price"> 600 ₽ </span>

        <ul class="select-colors">
          <li class="select-colors__item">
            <label class="select-colors__label">
              <input
                class="colors__radio sr-only"
                type="radio"
                name="color-5"
                value="#939393"
                checked=""
              />
              <span
                class="select-colors__value"
                style="background-color: #939393"
              >
              </span>
            </label>
          </li>
          <li class="select-colors__item">
            <label class="select-colors__label">
              <input
                class="colors__radio sr-only"
                type="radio"
                name="color-5"
                value="#F0F0F0"
              />
              <span
                class="select-colors__value"
                style="background-color: #f0f0f0"
              >
              </span>
            </label>
          </li>
        </ul>
      </li>

      <li>
        <a class="catalog__pic" href="#">
          <img
            src="img/product-9.jpg"
            srcset="img/product-9@2x.jpg 2x"
            alt="Название товара"
          />
        </a>

        <h3 class="max-w-[270px] mb-2">
          <a href="#"> Кружевной бюстгалтер на бретелях </a>
        </h3>

        <span class="catalog__price"> 4 990 ₽ </span>

        <ul class="select-colors">
          <li class="select-colors__item">
            <label class="select-colors__label">
              <input
                class="sr-only"
                type="radio"
                name="color-6"
                value="#222"
                checked=""
              />
              <span class="select-colors__value" style="background-color: #222">
              </span>
            </label>
          </li>
          <li class="select-colors__item">
            <label class="colors__label">
              <input
                class="sr-only"
                type="radio"
                name="color-6"
                value="#73B6EA"
              />
              <span
                class="select-colors__value"
                style="background-color: #73b6ea"
              >
              </span>
            </label>
          </li>
        </ul>
      </li>

      <li>
        <a class="catalog__pic" href="#">
          <img
            src="img/product-10.jpg"
            srcset="img/product-10@2x.jpg 2x"
            alt="Название товара"
          />
        </a>

        <h3 class="max-w-[270px] mb-2">
          <a href="#"> Мужские домашние шорты для сна </a>
        </h3>

        <span class="catalog__price"> 1 090 ₽ </span>

        <ul class="select-colors">
          <li class="select-colors__item">
            <label class="colors__label">
              <input
                class="sr-only"
                type="radio"
                name="color-7"
                value="#FFBE15"
                checked=""
              />
              <span
                class="select-colors__value"
                style="background-color: #ffbe15"
              >
              </span>
            </label>
          </li>
          <li class="select-colors__item">
            <label class="colors__label">
              <input
                class="sr-only"
                type="radio"
                name="color-7"
                value="#8BE000"
              />
              <span
                class="select-colors__value"
                style="background-color: #8be000"
              >
              </span>
            </label>
          </li>
          <li class="select-colors__item">
            <label class="colors__label">
              <input class="sr-only" type="radio" name="color-7" value="#222" />
              <span class="select-colors__value" style="background-color: #222">
              </span>
            </label>
          </li>
        </ul>
      </li>

      <li>
        <a class="catalog__pic" href="#">
          <img
            src="img/product-11.jpg"
            srcset="img/product-11@2x.jpg 2x"
            alt="Название товара"
          />
        </a>

        <h3 class="max-w-[270px] mb-2">
          <a href="#"> Базовая хлопковая майка </a>
        </h3>

        <span class="catalog__price"> 560 ₽ </span>

        <ul class="select-colors">
          <li class="select-colors__item">
            <label class="colors__label">
              <input
                class="sr-only"
                type="radio"
                name="color-07"
                value="#FFBE15"
                checked=""
              />
              <span
                class="select-colors__value"
                style="background-color: #ffbe15"
              >
              </span>
            </label>
          </li>
          <li class="select-colors__item">
            <label class="colors__label">
              <input
                class="sr-only"
                type="radio"
                name="color-07"
                value="#222"
              />
              <span class="select-colors__value" style="background-color: #222">
              </span>
            </label>
          </li>
        </ul>
      </li>

      <li>
        <a class="catalog__pic" href="#">
          <img
            src="img/product-12.jpg"
            srcset="img/product-12@2x.jpg 2x"
            alt="Название товара"
          />
        </a>

        <h3 class="max-w-[270px] mb-2">
          <a href="#"> Детский комбинезон (1-4 мес) </a>
        </h3>

        <span class="catalog__price"> 990 ₽ </span>

        <ul class="select-colors">
          <li class="select-colors__item">
            <label class="colors__label">
              <input
                class="sr-only"
                type="radio"
                name="color-6"
                value="#222"
                checked=""
              />
              <span class="select-colors__value" style="background-color: #222">
              </span>
            </label>
          </li>
          <li class="select-colors__item">
            <label class="colors__label">
              <input
                class="sr-only"
                type="radio"
                name="color-6"
                value="#FF6B00"
              />
              <span
                class="select-colors__value"
                style="background-color: #ff6b00"
              >
              </span>
            </label>
          </li>
        </ul>
      </li>
    </ul>
    <!-- pagination -->
    <ul class="flex items-center justify-center flex-wrap mb-auto">
      <li class="pagination__item mr-6">
        <a
          class="pagination__link pagination__link-arrow pagination__link--disabled"
          aria-label="Предыдущая страница"
        >
          <svg class="mr-[2px]" width="8" height="14" fill="currentColor">
            <use xlink:href="#icon-arrow-left"></use>
          </svg>
        </a>
      </li>
      <li>
        <a
          class="pagination__link pagination__link--events pagination__link--current"
        >
          1
        </a>
      </li>
      <li>
        <a class="pagination__link pagination__link--events" href="#"> 2 </a>
      </li>
      <li>
        <a class="pagination__link pagination__link--events" href="#"> 3 </a>
      </li>
      <li>
        <a class="pagination__link pagination__link--events" href="#"> 4 </a>
      </li>
      <li>
        <a class="pagination__link pagination__link--events" href="#"> ... </a>
      </li>
      <li>
        <a class="pagination__link pagination__link--events" href="#"> 10 </a>
      </li>
      <li class="pagination__item ml-6">
        <a
          class="pagination__link pagination__link--events pagination__link-arrow pagination__link-arrow--events"
          href="#"
          aria-label="Следующая страница"
        >
          <svg class="ml-[2px]" width="8" height="14" fill="currentColor">
            <use xlink:href="#icon-arrow-right"></use>
          </svg>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>
