<template>
  <div class="">
    <!-- <div class="w-100 mt-2 mb-3">
      <div class="container">
        <AppCarousel />
      </div>
    </div> -->

    <div class="jobs container">
      <a-row :gutter="[32, 16]">
        <a-col :md="{ span: 8 }" :sm="{ span: 24 }">
          <div class="shadow">
            <LazyJobFilterLeft />
          </div>
        </a-col>

        <a-col :md="{ span: 16 }" :sm="{ span: 24 }">
          <a-row :gutter="[16, 16]" type="flex" justify="space-between">
            <a-col :span="24">
              <div class="companies">
                <div v-if="$fetchState.pending" class="">
                  <LazyCompaniesSkeleton></LazyCompaniesSkeleton>
                </div>
                <div v-else-if="$fetchState.error">
                  <LazyCompaniesSkeleton></LazyCompaniesSkeleton>
                </div>
                <div v-else class="">
                  <LazyCompanies :companies="companies" />
                </div>
              </div>
            </a-col>
            <a-col :span="24">
              <LazyJobFilterTop />
            </a-col>
            <a-col :span="24">
              <a-row class="center">
                <a-col :span="12">
                  <div class="">
                    <a-dropdown :trigger="['click']">
                      <a class="ant-dropdown-link" @click.prevent>
                        თარიღი კლებადობით
                        <!-- <DownOutlined /> -->
                      </a>
                      <template #overlay>
                        <a-menu>
                          <a-menu-item key="0">
                            <a href="http://www.alipay.com/">1st menu item</a>
                          </a-menu-item>
                          <a-menu-item key="1">
                            <a href="http://www.taobao.com/">2nd menu item</a>
                          </a-menu-item>
                          <a-menu-divider />
                          <a-menu-item key="3">3rd menu item</a-menu-item>
                        </a-menu>
                      </template>
                    </a-dropdown>
                  </div>
                </a-col>
                <a-col :span="12">
                  <div class="view-box mt-16 mb-16">
                    <div
                      v-if="activeView === 12"
                      @click="onChangeView(24)"
                      class="box shadow"
                    >
                      <img
                        class="toggle-icon"
                        src="../../assets/img/list.png"
                        alt="list_view"
                      />
                    </div>
                    <div
                      v-if="activeView === 24"
                      @click="onChangeView(12)"
                      class="box shadow"
                    >
                      <img
                        class="toggle-icon"
                        src="../../assets/img/grid.png"
                        alt="grid_view"
                      />
                    </div>
                  </div>
                </a-col>
              </a-row>

              <div v-if="$fetchState.pending" class="">
                <div class="item shadow">
                  <a-skeleton avatar :paragraph="{ rows: 4 }" active />
                </div>
              </div>
              <div v-else-if="$fetchState.error">
                <a-skeleton avatar :paragraph="{ rows: 4 }" />
              </div>

              <div v-else>
                <template v-if="jobs && jobs.length > 0">
                  <a-col
                    v-for="item in jobs"
                    :key="item._id"
                    :span="activeView"
                  >
                    <div class="mb-3">
                      <LazyJobListItem :activeView="activeView" :item="item" />
                    </div>
                  </a-col>
                </template>
              </div>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
require("dotenv").config();

export default {
  name: "Jobs",
  data: function () {
    return {
      activeView: 24,
      jobs: [],
      companies: [],
    };
  },
  async fetch() {
    const [jobs, companies] = await Promise.all([
      this.$axios.$get(`${process.env.apiUrl}jobs/get-all-jobs`),
      this.$axios.$get(`${process.env.apiUrl}company/get-all-companies`),
    ]);

    this.jobs = jobs.data;
    this.companies = companies.data;
  },

  methods: {
    onChangeView(viewType) {
      const gridView = 12;
      const listView = 24;

      if (viewType === gridView) {
        this.activeView = gridView;
      } else {
        this.activeView = listView;
      }
    },
  },
};
</script>

<style scoped>
.center {
  display: flex;
  align-items: center;
  padding: 8px;
}
.toggle-icon {
  width: 15px;
  height: 15px;
}
.companies {
  /* margin-top: 30px; */
}

.mt-16 {
  margin-top: 16px;
}

.mb-16 {
  margin-bottom: 16px;
}
.view-box {
  display: flex;
  justify-content: flex-end;
}

.box {
  margin-left: 20px;
  padding: 15px;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 8px;
  cursor: pointer;
  width: 45px;
  height: 45px;
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
