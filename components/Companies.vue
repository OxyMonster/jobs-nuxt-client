<template>
  <div class="">
    <a-row :gutter="[16]" type="flex" justify="space-between">
      <a-col
        v-for="item in companies"
        :key="item._id"
        :md="{ span: 6 }"
        :sm="{ span: 24 }"
      >
        <div class="client_box shadow">
          <div class="company-logo-wrapper">
            <img class="company-logo" :src="item.avatarUrl" alt="" />
          </div>
          <div class="see-all-vacancy">
            <!-- <a-button :size="'small'">
             
            </a-button> -->
            <nuxt-link class="h-100 ss" :to="'/company/' + item._id"
              >ყველა ვაკანსი</nuxt-link
            >
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "Companies",
  props: ["companies"],
};
</script>

<style>
.client_box {
  background-color: white;
  /* width: 170px; */
  height: 105px;
  border-radius: 4px;

  /* float: left; */
  padding: 15px 20px;
  margin-bottom: 20px;
}

.company-logo-wrapper {
  width: 100%;
  height: 37px;
}

.company-logo {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
}

.see-all-vacancy {
  padding-top: 20px;
  text-align: center;
}

.ss {
  font-size: 12px !important;
  color: #1890ff !important;
  text-decoration: none;
  font-weight: bolder;
}
</style>