<template>
  <div class="">
    <div class="filter-main">
      <a-row class="flex justify-between">
        <a-col :sm="{ span: 24 }" :md="{ span: 10 }">
          <div class="title">
            <h4>What</h4>
          </div>
          <div class="des">
            <span>Job title , keywords, or company</span>
          </div>
          <div class="search">
            <input
              class="custom-input"
              type="text"
              name=""
              id=""
              placeholder="Search ..."
            />
          </div>
        </a-col>
        <a-col :sm="{ span: 24 }" :md="{ span: 10 }">
          <div class="title">
            <h4>What</h4>
          </div>
          <div class="des">
            <span>Job title , keywords, or company</span>
          </div>
          <div class="search">
            <input type="text" class="custom-input" />
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="bottom-filter">
      <a-button class="filter-button" type="primary">
        {{ $t("buttons.search") }}
      </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobFilterTop",
};
</script>

<style scoped>
.filter-main {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
}

.filter-button {
  width: 200px;
  height: 40px;
}

.bottom-filter {
  background-image: url(../assets/img/bottom-white.png);
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
}
</style>