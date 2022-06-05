<template>
  <div class="shadow bg-white p-5">
    <div class="filter-main">
      <a-row :gutter="[16]" type="flex" class="">
        <a-col :span="24">
          <div class="title-filter">
            <h4>3871 განცხადება 26535 კომპანია 120180 CV</h4>
          </div>
        </a-col>
        <a-col :sm="{ span: 24 }" :md="{ span: 12 }">
          <div class="">
            <div class="search">
              <a-input :value="value" placeholder="საძიებო სიტყვა ...">
                <!-- <template #prefix>
                  <label class="label" for="search">
                    <a-icon type="search" />
                  </label>
                </template> -->
              </a-input>
            </div>
          </div>
        </a-col>
        <a-col :sm="{ span: 24 }" :md="{ span: 6 }">
          <div class="search">
            <!-- <input type="text" class="custom-input" /> -->
            <a-cascader
              :value="selectedCategory"
              :options="options"
              :placeholder="$t('category')"
            />
          </div>
        </a-col>
        <a-col :sm="{ span: 24 }" :md="{ span: 6 }">
          <div class="search">
            <!-- <input type="text" class="custom-input" /> -->
            <a-cascader
              :value="selectedCity"
              :options="options"
              :placeholder="$t('city')"
              class="p-3"
            />
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="bottom-filter">
      <a-button class="filter-button" type="primary">
        <span class="search-icon">
          <a-icon type="search" /> {{ $t("buttons.search") }}
        </span>
      </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobFilterTop",

  data() {
    return {
      value: "",
      selectedCategory: [],
      selectedCity: [],
      options: [
        {
          value: "zhejiang",
          label: "Zhejiang",
        },
      ],
    };
  },
  methods: {
    handleMenuClick(e) {},
  },
};
</script>

<style scoped>
.bolder {
  font-weight: bolder;
}

.bordless {
  border-radius: 0 !important;
}
.filter-keyword {
  padding-top: 40px;
}
.title-filter {
  padding-bottom: 40px;
}
.flex-center-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
}
h4 {
  font-weight: bolder;
  font-size: 17px;
}
.search-icon {
  font-size: 18px;
  font-weight: bolder;
}
.label {
  display: flex;
  align-items: center;
  font-size: 22px;
}
.search {
  display: flex;
}
.filter-main {
  padding-bottom: 35px;
  border-radius: 8px;
}
.p-5 {
  padding: 25px;
}
.filter-button {
  width: 200px;
  height: 40px;
}

.bg-white {
  background-color: white;
}

.bottom-filter {
  /* background-image: url(../assets/img/bottom-white.png); */
  height: 55px;
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: -39px;
  display: flex;
  justify-content: center;
  z-index: 2;
}

.custom-input {
  background-color: #f6f6f6 !important;
  width: 100%;
  height: 49px !important;
  border-radius: 8px;
  outline: none;
  box-shadow: none;
  border: none;
  padding-left: 15px;
  padding: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.custom-input:focus {
  border: 2px solid #2388e5;
  outline: none;
}
</style>