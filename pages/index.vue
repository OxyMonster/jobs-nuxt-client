<template>
  <div class="index">
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  middleware: "routerMiddlware",
  layout: "Default",
};
</script>
