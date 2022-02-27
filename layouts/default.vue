
<template>
  <div class="app">
    <div class="app__header">
      <a-row>
        <a-col :span="24">
          <AppHeader />
        </a-col>
        <a-col :span="24">
          <div class="mb-3">
            <AppNavigation />
          </div>
        </a-col>
        <a-col :span="24">
          <div class="container">
            <Nuxt />
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>

<style>
.header {
  background-color: white;
  height: 90px;
}
</style>