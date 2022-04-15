<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
header h1 {
  font-family: "Inter", sans-serif;
  font-size: 40px;
  font-weight: 900;
  padding-bottom: 8px;
}
</style>