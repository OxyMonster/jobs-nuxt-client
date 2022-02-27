<template>
  <div class="">
    <div class="topMenu">
      <div class="container h-100">
        <ul class="list h-100 p-0">
          <li class="starli h-100">
            <img
              src="https://jobs.ge/i/catStar.png"
              border="0"
              title="რჩეულები"
            />
          </li>
          <li class="h-100">
            <nuxt-link class="h-100" to="/jobs">{{ $t("jobs") }}</nuxt-link>
          </li>
          <li class="h-100">
            <nuxt-link class="h-100" to="/publish"
              >{{ $t("publish") }}
            </nuxt-link>
          </li>
          <li class="h-100">
            <nuxt-link class="h-100" to="/about">{{ $t("about") }}</nuxt-link>
          </li>
          <li class="h-100">
            <nuxt-link class="h-100" to="/banner"
              >{{ $t("banner") }}
            </nuxt-link>
          </li>
          <li class="h-100">
            <nuxt-link class="h-100" to="/contact">{{
              $t("contact")
            }}</nuxt-link>
          </li>
          <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">
            <div class="engLang"><a>ENGLISH VERSION</a></div>
          </nuxt-link>

          <nuxt-link v-if="$i18n.locale !== 'ge'" :to="switchLocalePath('ge')">
            <div class="engLang"><a>GEORGIAN VERSION</a></div>
          </nuxt-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script> 

<style scoped>
/* home route and active route will show in bold as it matches / and /about */
a.nuxt-link-active {
  background: url(/i/menubg.png) no-repeat #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
  background-position: center;
  color: #434343 !important;
  text-shadow: 1px 1px #fbfbfb;
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
  margin-right: 20px;
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
  /* font-size: 13px; */
  color: #ffffff;
  height: 34px;
  padding: 20px 15px 0px 15px;
  display: block;
  text-decoration: none;
}

.topMenu li a:hover,
.topMenu li.sel a {
  background: url(/i/menubg.png) no-repeat #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
  background-position: center;
  color: #434343;
  text-shadow: 1px 1px #fbfbfb;
}
</style>