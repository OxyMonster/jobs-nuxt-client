<template>
  <div class="">
    <a-row :gutter="[16]" type="flex" justify="space-between">
      <a-col
        v-for="i in [1, 2, 3, 4, 5, 6, 7, 8]"
        :key="i"
        :md="{ span: 6 }"
        :sm="{ span: 24 }"
      >
        <div class="client_box shadow">
          <div class="company-logo-wrapper">
            <!-- <img class="company-logo" alt="" /> -->
            <div class="company-logo center">
              <a-spin />
            </div>
          </div>
          <div class="see-all-vacancy">
            <!-- <a-button :size="'small'">
             
            </a-button> -->
            <a href="?view=client&amp;client=nova-co" class="ss"
              >ყველა ვაკანსია</a
            >
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "CompaniesSkeleton",
};
</script>

<style>
.center {
  display: flex;
  justify-content: center;
}
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
}
</style>