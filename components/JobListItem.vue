<template>
  <div class="item shadow">
    <a-row type="flex" justify="space-between">
      <a-col :md="{ span: logoCol }" :sm="{ span: 24 }">
        <div class="avatar-center">
          <div class="avatar">
            <img class="avatar-url" :src="item.company.avatarUrl" alt="" />
          </div>
        </div>
      </a-col>
      <a-col :md="{ span: textCol }" :sm="{ span: 24 }">
        <div class="item__company">
          <h1>{{ item.title }}</h1>
        </div>
        <div class="item__title">
          <p>{{ item.company.title }}</p>
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
        <div class="buttons-block">
          <div class="flex justify-end">
            <a-button @click="openMessage">
              <a-icon type="heart" />
            </a-button>
          </div>
          <div class="flex justify-end mt-2">
            <nuxt-link class="h-100" :to="'/jobs/' + item._id">
              <a
                class="
                  root-0-2-45
                  animation-0-2-46
                  weightMedium-0-2-60
                  sizeMd-0-2-50
                  variantAccent-0-2-55
                "
                href="/spotlights/sweeft"
                >{{ $t("buttons.readMore") }}</a
              >
            </nuxt-link>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { message } from "ant-design-vue";

export default {
  name: "JobListItem",
  props: ["activeView", "item"],
  data: function () {
    return {
      logoCol: 3,
      textCol: 17,
      buttonCol: 4,
    };
  },
  methods: {
    openMessage() {
      const key = "updatable";

      message.loading({ content: "Loading...", key });
      setTimeout(() => {
        message.success({ content: "Added to favourites !", key, duration: 2 });
      }, 1000);
    },
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
.avatar-center {
  padding-bottom: 20px;
}

.buttons-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  widows: 100%;
}
.item {
  background-color: white;
  border-radius: 8px;
  padding: 25px;
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

.avatar {
  width: 55px;
  height: 55px;
}

.avatar-url {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>