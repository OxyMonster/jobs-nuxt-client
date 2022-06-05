<template>
  <div class="">
    <a-row :gutter="[16, 16]" type="flex" justify="space-between">
      <a-col
        v-for="item in companies"
        :key="item._id"
        :sm="{ span: 24 }"
        :md="6"
      >
        <CompanyItem :item="item" />
      </a-col>
    </a-row>
  </div>
</template>
<script>
require("dotenv").config();
export default {
  name: "Companies",
  data: function () {
    const companies = [];
    return {
      companies,
    };
  },
  async fetch() {
    const [companies] = await Promise.all([
      this.$axios.$get(`${process.env.apiUrl}company/get-all-companies`),
    ]);
    this.companies = companies.data;
  },
};
</script>

<style>
</style>