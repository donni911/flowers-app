<template>
  <vue-collapsible-panel
    :id="key"
    :expanded="false"
    :class="color"
    class="c-list__item"
  >
    <template #title>
      <div class="c-wrapper">
        <div class="c-info">
          <h2 class="c-title">{{ name }}</h2>
          <div class="c-save">
            <div class="c-icon c-save__temperature">
              <icon name="temperature"></icon>
              <span>{{ numeralFormat(temperature, "0,0[.] ") }}°C</span>
            </div>
            <div class="c-icon c-save__humidty">
              <icon name="humidty"></icon>
              <span>{{ numeralFormat(humidty, "0,0[.] ") }}%</span>
            </div>
          </div>
        </div>
        <div class="c-img">
          <img :src="require('@/assets/' + img)" alt="" />
        </div>
      </div>
    </template>
    <template #content>
      <div>
        <p class="c-description" v-html="description"></p>
      </div>
    </template>
  </vue-collapsible-panel>
</template>

<script>
import Icon from "./UI/Icon.vue";

export default {
  components: {
    Icon,
  },

  props: [
    "key",
    "name",
    "color",
    "temperature",
    "humidty",
    "description",
    "img",
  ],
};
</script>

<style scoped>
.c-list__item:not(:last-child) {
  margin-bottom: 16px;
}

.c-title {
  font-family: "Inter", sans-serif;
  font-weight: 800;
  font-size: 28px;

  margin-bottom: 12px;
}

.c-save {
  display: flex;
}

.c-icon {
  border-radius: 8px;
  font-family: "Inter", serif;
  font-weight: 600;
  font-size: 14px;
  padding: 8px;

  display: flex;
  align-items: center;
}

.c-icon:first-child {
  margin-right: 4px;
}
</style>