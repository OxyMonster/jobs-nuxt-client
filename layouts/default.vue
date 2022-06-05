
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
  head: {
    title: "my website title",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "my website description",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
};
</script>

<style>
.header {
  background-color: white;
  /* background: #1890ff; */
  height: 90px;
}

.mt-3 {
  margin-top: 30px;
}
.sticky {
  position: sticky;
  z-index: 3;
  top: 0;
}

.shadow {
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px; */
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
  /* box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px; */

  border: 1px solid transparent;
  border-radius: 8px !important;
}

.__nuxt-error-page {
  background-color: #fdfdfd;
}

.error {
  width: 100%;
  height: 100%;
  background: white;
}
</style>