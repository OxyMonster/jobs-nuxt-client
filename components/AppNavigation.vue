<template>
  <div class="">
    <div class="topMenu">
      <div class="container h-100 flex between">
        <ul class="list h-100 p-0">
          <li @click="showDrawer" class="starli h-100">
            <img
              class="star"
              src="https://jobs.ge/i/catStar.png"
              border="0"
              title="რჩეულები"
            />
          </li>
          <li class="h-100">
            <nuxt-link class="h-100 border-top-left-76" to="/jobs/list">{{
              $t("jobs")
            }}</nuxt-link>
          </li>
          <li class="h-100">
            <nuxt-link class="h-100" to="/company/list">{{
              $t("companies")
            }}</nuxt-link>
          </li>
          <li class="h-100">
            <nuxt-link class="h-100" to="/publish"
              >{{ $t("publish") }}
            </nuxt-link>
          </li>
          <li class="h-100">
            <nuxt-link class="h-100" to="/blog">{{ $t("blog") }} </nuxt-link>
          </li>
          <li class="h-100">
            <nuxt-link class="h-100 border-top-right-76" to="/contact">{{
              $t("contact")
            }}</nuxt-link>
          </li>
        </ul>
        <div class="right">
          <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
            <div class="engLang"><span>ENGLISH VERSION</span></div>
          </nuxt-link>

          <nuxt-link v-if="$i18n.locale !== 'ge'" :to="switchLocalePath('ge')">
            <div class="engLang"><span>GEORGIAN VERSION</span></div>
          </nuxt-link>

          <div class="auth-register">
            <div class="white">
              <nuxt-link class="h-100 white" to="/auth/login">
                <a-button>{{ $t("login") }} </a-button>
              </nuxt-link>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a-drawer
      :visible="visible"
      class="custom-class"
      style="color: red"
      title="Basic Drawer"
      placement="right"
      @close="onClose"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    onClose() {
      this.visible = false;
    },

    showDrawer() {
      this.visible = true;
    },
  },
};
</script> 

<style scoped>
.white {
  color: white !important;
  margin-left: 30px;
}
.auth-register {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
}
/* home route and active route will show in bold as it matches / and /about */
a.nuxt-link-active {
  background: #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
  background-position: center;
  color: #434343 !important;
  text-shadow: 1px 1px #fbfbfb;
  font-weight: bolder;
}

.right {
  display: flex;
  justify-content: space-between;
}
.star {
  widows: 20px;
  height: 20px;
}
.list {
  margin: 0;
  height: 100%;
}

.topMenu {
  height: 55px;
  /* background-color: #0b457a; */
  background-color: #2388e5;
  /* required */
}

.topMenu ul {
  list-style: none;
}

.topMenu li {
  float: left;
}

.topMenu li.starli {
  padding: 15px 10px 0px 15px;
  cursor: pointer;
}

.engLang {
  background: #0084af;
  border-radius: 4px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  padding: 5px;
  float: right;
  margin-top: 15px;
  font-size: 10px;
  color: #ffffff;
}

.engLang a {
  color: #fff;
  text-decoration: none;
}
.engLang a:hover {
  color: #333;
  text-decoration: none;
}

.engLang:hover {
  cursor: pointer;
  background: #fbfbfb;
  color: #333333;
}
.engLang:hover a {
  color: #333333;
}

.topMenu li a {
  border: 5px solid #fdfdfd;
  border-radius: 15px;
  /* font-size: 13px; */
  color: #ffffff;
  height: 34px;
  padding: 15px 15px 0px 15px;
  display: block;
  text-decoration: none;
}
.between {
  justify-content: space-between;
}
.border-top-left-76 {
  border-top-left-radius: 76px !important;
}
.border-top-right-76 {
  border-top-right-radius: 76px !important;
}

.topMenu li a:hover,
.topMenu li.sel a {
  /* background: url(/i/menubg.png) no-repeat #dfdfdf; */

  background-position: center;
  font-weight: bolder;
  /* color: #b9b9b9; */
  /* text-shadow: 1px 1px #fbfbfb; */
}
</style>