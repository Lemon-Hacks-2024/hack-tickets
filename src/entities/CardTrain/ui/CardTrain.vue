<script lang="ts" setup>
import route from "@/shared/icons/route.vue";
import arrowLeft from "@/shared/icons/arrowLeft.vue";
import arrowNext from "@/shared/icons/arrowNext.vue";
import CountPlaces from "@/entities/CountPlaces";
</script>

<template>
  <router-link :to="`/booking/1`" class="card-train">
    <div class="card-train__head">
      <route />
      <div class="card-train__city">Ростов-на-Дону</div>
      <arrowLeft class="white arrow-left" />
      <div class="card-train__city">Адлер</div>
    </div>

    <div class="card-train__content">
      <div class="card-train__time">
        <div class="time">00:24</div>
        <div class="time__different">
          <span>8 ч 23 мин</span>
          <arrowNext />
        </div>
        <div class="time time_right">12:34</div>
      </div>
      <a-divider type="vertical" class="divider" />
      <div class="card-train__places">
        <CountPlaces type="Плацкартный" :count="317" :price="1592" />
        <CountPlaces type="Купе" :count="0" />
      </div>
    </div>
  </router-link>
</template>

<style lang="scss" scoped>
.card-train {
  background-color: var(--dark-color-2);
  padding: 20px 30px;
  border-radius: 15px;
  margin-bottom: 30px;
  cursor: pointer;
  display: block;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.4);
    transform: translateY(-1px);
  }

  &__head {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 14px;
  }

  &__city {
    font-size: 20px;
    color: #fff;
  }

  &__content {
    display: flex;
  }

  &__time {
    width: 60%;
    display: flex;
    gap: 20px;
    align-items: center;
  }
  &__places {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
.arrow-left {
  width: 25px;
}
.divider {
  background-color: #fff;
  height: auto;
  margin: 0 30px;
}
.time {
  font-family: "Jura";
  color: #fff;
  font-weight: bold;
  font-size: 40px;

  &__different {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0;
    text-align: center;

    span {
      color: #a6a6a6;
    }
  }
}
</style>
