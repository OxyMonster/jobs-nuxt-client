<template>
  <div class="item">
    <a-row tyoe="flex" justify="space-between">
      <a-col :md="{ span: logoCol }" :sm="{ span: 24 }">
        <div class="avatar">
          <img src="../assets/img/airbnb-logo.png" alt="" />
        </div>
      </a-col>
      <a-col :md="{ span: textCol }" :sm="{ span: 24 }">
        <div class="item__company">
          <h1>Google</h1>
        </div>
        <div class="item__title">
          <p>Full Stack Developer</p>
        </div>
        <div class="item__tags mb-2">
          <div>
            <a-tag color="pink"> pink </a-tag>
            <a-tag color="red"> red </a-tag>
            <a-tag color="orange"> orange </a-tag>
            <a-tag color="green"> green </a-tag>
            <a-tag color="cyan"> cyan </a-tag>
            <a-tag color="blue"> blue </a-tag>
            <a-tag color="purple"> purple </a-tag>
          </div>
        </div>
        <div class="item__count">
          <span>3 Days ago</span>
          <span class="dot"></span>
          <span>6 Applied</span>
        </div>
      </a-col>
      <a-col :md="{ span: buttonCol }" :sm="{ span: 24 }">
        <div class="flex justify-end">
          <a-button>
            <a-icon type="heart" />
          </a-button>
        </div>
        <div class="flex justify-end mt-2">
          <a-button type="primary">Read more</a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "JobListItem",
  props: ["activeView"],
  data: function () {
    return {
      logoCol: 3,
      textCol: 17,
      buttonCol: 4,
    };
  },
  created() {
    console.log(this.logoCol);
  },
  watch: {
    activeView: function (newVal, oldValue) {
      const gridView = 12;

      if (newVal === gridView) {
        this.logoCol = 24;
        this.textCol = 24;
        this.buttonCol = 24;
      } else {
        this.logoCol = 3;
        this.textCol = 17;
        this.buttonCol = 4;
      }
    },
  },
};
</script>

<style>
.item {
  background-color: white;
  border-radius: 8px;
  padding: 15px;
}

.dot {
  height: 9px;
  width: 9px;
  background-color: #87859c;
  border-radius: 50%;
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
}
</style>