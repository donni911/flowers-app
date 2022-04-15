<template>
  <div>
    <vue-collapsible-panel-group accordion class="c-list">
      <flower-item
        v-for="flower in flowers.slice(0, 3)"
        :key="flower.id"
        :name="flower.name"
        :color="flower.color"
        :img="flower.img"
        :temperature="flower.temperature"
        :humidty="flower.humidty"
        :description="flower.description"
      ></flower-item>
    </vue-collapsible-panel-group>
    <p class="caption">Displaying 3 out of total {{ flowers.length }} flowers</p>
  </div>
</template>

<script>
import FlowerItem from "./FlowerItem.vue";

export default {
  inject: ["flowers"],

  components: {
    FlowerItem,
  },
};
</script>

<style scoped>

.caption {
  margin-top: 16px;
  padding-bottom: 100px;

  text-align: center;
  font-family: "Inter", "serif";
  font-size: 18px;
  font-weight: 500;
}
</style>