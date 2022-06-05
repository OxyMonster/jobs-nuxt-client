<template>
  <div class="">
    <div class="root-0-2-340 root-0-2-368 shadow">
      <div class="header-0-2-342">
        <div class="image-0-2-343">
          <div class="cursorPointer-0-2-373">
            <img
              class="image-0-2-369"
              :src="item.avatarUrl"
              alt="Sweeft Digital"
            />
          </div>
        </div>
        <div class="primaryColumn-0-2-354">
          <div class="primaryColumnTop-0-2-355 primaryColumnTop-0-2-374">
            <div class="spotlightName-0-2-370 cursorPointer-0-2-373">
              {{ item.title }}
            </div>
          </div>
          <div class="primaryColumnBottom-0-2-356">
            <a class="companyName-0-2-371" href="/spotlights/sweeft"
              >Sweeft Digital</a
            >
          </div>
        </div>
      </div>
      <div class="lineFirst-0-2-350"></div>
      <div class="secondaryColumn-0-2-357">
        <div class="secondaryColumnTop-0-2-358">
          <div class="description-0-2-375">
            <p><strong>კომპანიის მოკლე აღწერა</strong></p>
            <p>Sweeft Digital</p>
          </div>
        </div>
        <div class="secondaryColumnBottom-0-2-359">
          <div class="root-0-2-364">
            <div class="dot-0-2-365"></div>
            Added 13 days ago
          </div>
        </div>
      </div>
      <div class="lineSecond-0-2-352"></div>
      <div class="tertiaryColumn-0-2-360">
        <div class="secondaryButton-0-2-361"></div>
        <div class="primaryButton-0-2-362">
          <nuxt-link :to="item._id">
            <a
              class="
                root-0-2-45
                animation-0-2-46
                weightMedium-0-2-60
                sizeMd-0-2-50
                variantAccent-0-2-55
              "
              href="/spotlights/sweeft"
              >Details</a
            >
          </nuxt-link>
          <!-- <a-button type="primary" size="lg">Details</a-button> -->
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyItem",
  props: ["item"],
  data: function () {
    return {};
  },
};
</script>

<style>
.root-0-2-340 {
  border: 1px solid rgb(247, 249, 255);
  display: flex;
  padding: 1rem;
  /* box-shadow: rgb(240, 243, 251) 0px 5px 60px 10px; */
  transition: background-color 0.2s ease-in 0s;
  border-radius: 20px;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
}
.header-0-2-342 {
  flex: 1 1 0%;
  display: flex;
  align-items: center;
}
.image-0-2-343 {
  display: flex;
  align-items: center;
  margin-right: 0.75rem;
}
.cursorPointer-0-2-373 {
  cursor: pointer;
}
.image-0-2-343 img {
  object-fit: contain;
}
.image-0-2-369 {
  width: 44px;
  border: 2px solid rgb(244, 244, 247);
  height: 44px;
  display: flex;
  align-items: center;
  border-radius: 18px;
  justify-content: center;
}
.image-0-2-369:hover {
  opacity: 0.7;
}
img {
  border-style: none;
}
.primaryColumn-0-2-354 {
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.primaryColumnTop-0-2-355 {
  color: rgb(23, 23, 37);
  font-size: 16px;
  margin-bottom: 0.25rem;
}
.primaryColumnTop-0-2-374 {
  display: flex;
  align-items: center;
}
.spotlightName-0-2-370 {
  color: rgb(23, 23, 37);
  font-family: MarkPro, Helvetica;
  font-weight: 500;
  text-decoration: none;
}
.primaryColumnBottom-0-2-356 {
  font-size: 16px;
}
.companyName-0-2-371 {
  color: rgb(23, 23, 37);
  opacity: 0.3;
  font-weight: 500;
  text-decoration: none;
}
a {
  background-color: transparent;
}
a {
  text-decoration: none;
}
.lineFirst-0-2-350 {
  width: auto;
  height: 1px;
  margin: 1rem 0px;
  background-color: rgb(244, 244, 247);
}
.secondaryColumn-0-2-357 {
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.secondaryColumnTop-0-2-358 {
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 0.25rem;
}
.description-0-2-375 h2,
.description-0-2-375 p {
  margin: 0px 0px 0.5rem;
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
}
b,
strong {
  font-weight: bolder;
}
.secondaryColumnBottom-0-2-359 {
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 0.25rem;
}
.root-0-2-364 {
  color: rgb(105, 105, 116);
  display: flex;
  opacity: 0.5;
  font-size: 12px;
  align-items: center;
  font-weight: 500;
  line-height: 16px;
}
.dot-0-2-365 {
  width: 0.5rem;
  height: 0.5rem;
  margin-right: 0.625rem;
  border-radius: 0.25rem;
  background-color: rgb(24, 199, 41);
}
.lineSecond-0-2-352 {
  width: auto;
  margin: 0.5rem 0px;
}
.tertiaryColumn-0-2-360 {
  height: 48px;
  display: grid;
  gap: 1.25rem;
  grid-template-columns: 1fr 1fr;
}
.secondaryButton-0-2-361 {
  display: flex;
  align-items: stretch;
}
.primaryButton-0-2-362 {
  display: flex;
  align-items: stretch;
}

.weightMedium-0-2-60 {
  font-weight: 500;
}
.primaryButton-0-2-362 div,
.primaryButton-0-2-362 button,
.primaryButton-0-2-362 a {
  flex: 1 1 0% !important;
  font-size: 16px !important;
  line-height: 20px !important;
}
</style>