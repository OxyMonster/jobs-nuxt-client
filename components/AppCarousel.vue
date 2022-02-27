<template>
  <a-carousel class="h-100" autoplay>
    <div class="h-100">
      <div class="img"></div>
    </div>
    <div class="h-100">
      <div class="img"></div>
    </div>
    <div class="h-100">
      <div class="img"></div>
    </div>
    <div class="h-100">
      <div class="img"></div>
    </div>
  </a-carousel>
</template>

<script>
export default {
  name: "AppCarousel",
  methods: {},
};
</script>
 
<style scoped>
img {
  width: 100%;
  height: 100%;
}

.img {
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/b/b2/Cover_Corp_horizontal_logo_1.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 160px;
}

/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
  border-radius: 8px;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
  height: 100%;
}
</style>