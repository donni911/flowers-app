<template>
  <section class="c-collapse__wrapper">
    <the-header title="Your Herbarium"></the-header>
    <flower-list></flower-list>
  </section>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import FlowerList from "./components/FlowerList.vue";

export default {
  components: {
    TheHeader,
    FlowerList,
  },

  data() {
    return {
      flowers: [
        {
          id: "fec8f7235bf8769c101b2eaa014edbeb2d540a02",
          name: "Tulip",
          color: "pink",
          img: "tulip.png",
          temperature: 25.32,
          humidty: 33,
          description:
            "Tulips (<i>Tulipa</i>) are a genus of spring-blooming perennial herbaceous bulbiferous geophytes. The flowers are usually large, showy and brightly colored, generally red, pink, yellow, or white.",
        },
        {
          id: "9ad170f59c13b9cc9f354a4f6fc7ded3df6409e9",
          name: "Gerbera",
          color: "blue",
          img: "gerbera.png",
          temperature: 23.6666667,
          humidty: 32.5,
          description:
            "<i>Gerbera</i> is a genus of plants in the Asteraceae (Compositae) family. Gerbera species are tufted, caulescent, perennial herbs, often with woolly crown, up to 80 cm high.",
        },
        {
          id: "c0458e3064a7da61b9e97ba0c7c2fbb19cb9984b",
          name: "Orchid",
          color: "green",
          img: "orchid.png",
          temperature: 31.1,
          humidty: 83,
          description:
            "<i>Orchids </i>is a genus of plants, that are easily distinguished from other plants, as they share some very evident derived characteristics or synapomorphies.",
        },
        {
          id: "a00a9516d5990b2a3bc0d650adfa6a2661dd10fe123xc",
          name: "Chrysanthemum",
          color: "pink",
          img: "orchid.png",
          temperature: 22.32,
          humidty: 45.11,
          description:
            "Chrysanthemums are flowering plants of the genus <i>Chrysanthemum</i> in the family Asteraceae. They are native to East Asia and northeastern Europe and the center of diversity is in China.",
        },
        {
          id: "d793dc12cb58062cc2a64d438d541dc8ad4daa95",
          name: "Zinnia",
          color: "green",
          img: "orchid.png",
          temperature: 26,
          humidty: 39.5,
          description:
            "<i>Zinnias</i> are annuals which flower officially in summer, but with the number of cultivars available you're covered for spring into autumn.",
        },
      ],
    };
  },

  // computed: {
  //   sortFlowers() {
  //     return this.flowers.sort((a, b) => (a.name > b.name ? 1 : -1));
  //   },
  // },

  provide() {
    return {
      flowers: this.flowers.sort((a, b) => (a.name > b.name ? 1 : -1)),
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background: #fff;
}

ul {
  padding-left: 0;
}

.c-collapse__wrapper{
  padding: 100px 16px 100px 16px;
}
</style>
