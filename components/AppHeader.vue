<template>
  <div class="header">
    <div class="container h-100">
      <a-row type="flex" class="h-100">
        <a-col class="h-100" :span="12" :order="1">
          <div class="header__logo flex h-100">
            <NuxtLogo />
          </div>
        </a-col>

        <a-col class="h-100" :span="12" :order="3">
          <div class="flex justify-end align-center h-100">
            <AppHeaderBanner />
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style>
.header {
  height: 90px;
}
</style>