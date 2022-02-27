<template>
  <div class="">
    <div class="w-100">
      <AppHeader />
    </div>
    <div class="w-100">
      <AppNavigation />
    </div>

    <div class="w-100 mt-2 mb-3">
      <div class="container">
        <AppCarousel />
      </div>
    </div>

    <div class="jobs container">
      <a-row :gutter="[32, 16]">
        <a-col :md="{ span: 8 }" :sm="{ span: 24 }">
          <div class="">
            <JobFilterLeft />
          </div>
        </a-col>

        <a-col :md="{ span: 16 }" :sm="{ span: 24 }">
          <div class="content">
            <div class="">
              <JobFilterTop />

              <div class="view-box mb-3">
                <div @click="onChangeView(24)" class="box">
                  <img src="../assets/img/list.png" alt="list_view" />
                </div>
                <div @click="onChangeView(12)" class="box">
                  <img src="../assets/img/grid.png" alt="grid_view" />
                </div>
              </div>
            </div>
            <a-row :gutter="[16, 16]" type="flex" justify="space-between">
              <a-col :span="activeView">
                <div class="mb-3">
                  <JobListItem :activeView="activeView" />
                </div>
              </a-col>
              <a-col :span="activeView">
                <div class="mb-3">
                  <JobListItem :activeView="activeView" />
                </div>
              </a-col>
              <a-col :span="activeView">
                <div class="mb-3">
                  <JobListItem :activeView="activeView" />
                </div>
              </a-col>
              <a-col :span="activeView">
                <div class="mb-3">
                  <JobListItem :activeView="activeView" />
                </div>
              </a-col>
            </a-row>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobsLayout",
  data: function () {
    return {
      activeView: 24,
    };
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

<style>
body {
  background-color: rgb(251 251 251 / 76%);
}

.ant-page-header {
  background-color: white;
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
}

.mb-5 {
  margin-bottom: 50px;
}

.header {
  background-color: white;
  height: 46px;
}

.content {
  /* padding: 0px 0px 0px 30px; */
}

.alert {
  background-color: rgb(226 248 255);
  border-radius: 8px;
}
</style>
