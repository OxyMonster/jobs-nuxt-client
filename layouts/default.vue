
<template>
  <div class="app">
    <div class="app__header">
      <a-row>
        <div class="">
          <a-col :span="24">
            <AppHeader />
          </a-col>
        </div>
        <div class="w-100">
          <a-col :span="24">
            <div class="mb-3 w-100">
              <AppNavigation />
            </div>
          </a-col>
        </div>
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

.sticky {
  position: sticky;
  z-index: 3;
  top: 0;
}
</style>