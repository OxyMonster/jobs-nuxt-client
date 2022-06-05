<template>
  <div class="">
    <div class="">
      <div class="root-0-2-264">
        <div style="background-color: rgb(255, 105, 90)">
          <div class="alwaysNoMargin-0-2-97 container-0-2-266">
            <div
              class="primaryText-0-2-270"
              style="color: rgb(23, 23, 37)"
            ></div>
            <div class="placeholder-0-2-265"></div>
          </div>
        </div>
        <div class="alwaysNoMargin-0-2-97 main-0-2-267">
          <div class="left-0-2-268">
            <div class="leftHeader-0-2-271">
              <img class="logo-0-2-273" :src="selectedCompany.avatarUrl" />
              <div class="desktopInfo-0-2-274">
                <div
                  class="companyName-0-2-277"
                  style="color: rgb(255, 105, 90)"
                >
                  {{ selectedCompany.title }}
                </div>
                <!-- <div class="jobName-0-2-278">job title</div> -->
                <div class="tagGroup-0-2-281">
                  <div class="tagName-0-2-282">Tags</div>
                  <div class="root-0-2-188">
                    <div class="tag-0-2-190 md-0-2-192">#Tbilisi</div>
                    <div class="tag-0-2-190 md-0-2-192">#React</div>
                    <div class="tag-0-2-190 md-0-2-192">#web</div>
                    <div class="tag-0-2-190 md-0-2-192">#developer</div>
                  </div>
                </div>
              </div>
              <div class="buttonGroup-0-2-280">
                <a
                  class="
                    root-0-2-36
                    button-0-2-254
                    animation-0-2-37
                    weightMedium-0-2-51
                    sizeMd-0-2-41
                    variantSecondary-0-2-45
                  "
                  href="/c/LlRh4"
                  >Company</a
                >
              </div>
            </div>
            <div class="mobileInfo-0-2-275">
              <div class="companyName-0-2-277" style="color: rgb(255, 105, 90)">
                JSC EKIMO
              </div>
              <div class="jobName-0-2-278">React Developer</div>
              <div class="tagGroup-0-2-281">
                <div class="root-0-2-188">
                  <div class="tag-0-2-190 sm-0-2-191">#Tbilisi</div>
                  <div class="tag-0-2-190 sm-0-2-191">#React</div>
                  <div class="tag-0-2-190 sm-0-2-191">#web</div>
                  <div class="tag-0-2-190 sm-0-2-191">#developer</div>
                </div>
              </div>
            </div>

            <div class="temicloud-content content-0-2-279">
              <div class="temicloud-content content-0-2-253">
                <p>
                  <strong>"ექიმო"</strong>&nbsp;სწრაფად მზარდი ტექნოლოგიური
                  კომპანიაა, რომელიც მომხმარებელს ციფრულ ჯანდაცვის სერვისებს
                  სთავაზობს და ამით საკუთარ თავზე ზრუნვას უმარტივებს.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="">
      <div
        v-if="activeView === 12"
        @click="onChangeView(24)"
        class="box shadow"
      >
        <img src="../assets/img/list.png" alt="list_view" />
      </div>
      <div
        v-if="activeView === 24"
        @click="onChangeView(12)"
        class="box shadow"
      >
        <img src="../assets/img/grid.png" alt="grid_view" />
      </div>
    </div> -->

    <div v-if="$fetchState.pending" class="">
      <div class="item shadow">
        <a-skeleton avatar :paragraph="{ rows: 4 }" active />
      </div>
    </div>
    <div v-else-if="$fetchState.error">
      <a-skeleton avatar :paragraph="{ rows: 4 }" />
    </div>

    <!-- <div v-else>
      <template v-if="selectedCompany && selectedCompany.jobs.length > 0">
        <a-col
          v-for="item in selectedCompany.jobs"
          :key="item._id"
          :span="activeView"
        >
          <div class="mb-3">
            <JobListItem :activeView="activeView" :item="item" />
          </div>
        </a-col>
      </template>
    </div> -->
  </div>
</template>

<script>
require("dotenv").config();
export default {
  name: "Company",
  data() {
    return {
      activeView: 24,
      selectedCompany: {},
    };
  },
  methods: {
    onChangeView(viewNumber) {
      this.activeView = viewNumber;
    },
  },
  async fetch() {
    const id = this.$route.params.id;
    const selectedCompany = await this.$axios.$post(
      `${process.env.apiUrl}company/get-company-by-id`,
      { id }
    );

    this.selectedCompany = selectedCompany.data;
  },
};
</script>

<style>
.root-0-2-264 {
  margin-bottom: 0px;
}
.container-0-2-266 {
  height: 100%;
}
.primaryText-0-2-270 {
  height: 50%;
  display: flex;
  padding: 1.875rem 0px 3.125rem;
  font-size: 16px;
  box-sizing: border-box;
  align-items: center;
  font-weight: bold;
  margin-left: 1rem;
}
.placeholder-0-2-265 {
  height: auto;
  display: none;
}
.main-0-2-267 {
  display: flex;
  margin-top: 0px;
  align-items: flex-start;
}
.left-0-2-268 {
  width: 100% !important;
  display: flex;
  flex-direction: column;
}

.logo-0-2-273 {
  object-fit: contain;
  background-color: white;
}
.leftHeader-0-2-271 {
  height: auto;
  display: flex;
  position: relative;
  border-radius: 0px;
  background-color: rgb(255, 255, 255);
}
.logo-0-2-273 {
  width: 80px;
  border: 4px solid rgb(241, 241, 245);
  height: 80px;
  margin: -1.25rem 1rem 0.625rem;
  box-sizing: border-box;
  border-radius: 10px;
}
img {
  border-style: none;
}
.desktopInfo-0-2-274 {
  display: none;
  margin-top: 0px;
}
.companyName-0-2-277 {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 0.25rem;
}
.jobName-0-2-278 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
.tagGroup-0-2-281 {
  display: flex;
  align-items: center;
}
.tagName-0-2-282 {
  color: rgb(68, 68, 79);
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-right: 0.625rem;
}
.root-0-2-188 {
  display: flex;
  flex-wrap: wrap;
}
.tag-0-2-190 {
  color: rgb(0, 98, 255);
  margin-right: 0.375rem;
}
.md-0-2-192 {
  font-size: 14px;
  line-height: 18px;
}
.buttonGroup-0-2-280 {
  flex: 1 1 0%;
  display: flex;
  margin-top: 1rem;
  align-items: flex-end;
  margin-right: 1rem;
  flex-direction: column;
}
.root-0-2-36 {
  border: 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
.root-0-2-36:hover,
.root-0-2-36:focus {
  outline: none;
  text-decoration: none;
}
.animation-0-2-37 {
  transition: all 0.3s ease 0s;
}
.sizeMd-0-2-41 {
  padding: 0.875rem 1.75rem;
  font-size: 16px;
  border-radius: 10px;
}
.variantSecondary-0-2-45 {
  color: rgb(23, 23, 37);
  background-color: rgb(241, 241, 245);
}
.variantSecondary-0-2-45:hover {
  color: rgb(23, 23, 37);
  background-color: rgb(234, 234, 239);
}
.variantSecondary-0-2-45:focus {
  box-shadow: rgb(250, 250, 251) 0px 0px 0px 2px;
}
.variantSecondary-0-2-45:active {
  box-shadow: unset;
  background-color: rgb(224, 224, 230);
}
.weightMedium-0-2-51 {
  font-weight: 500;
}
.button-0-2-254 {
  padding: 0.625rem 0.875rem;
  font-size: 12px;
  border-radius: 8px;
}
a {
  background-color: transparent;
}
a {
  text-decoration: none;
}
.mobileInfo-0-2-275 {
  display: block;
  margin-left: 1rem;
}
.sm-0-2-191 {
  font-size: 12px;
  line-height: 24px;
}
.mobileSidecar-0-2-276 {
  display: block;
}
.root-0-2-284 {
  padding: 1rem;
  margin-bottom: 1.5rem;
}
.card-0-2-302 {
  border: 1px solid rgb(247, 249, 255);
  display: none;
  z-index: 1;
  box-shadow: rgba(240, 243, 251, 0.5) 0px 40px 60px 10px;
  border-radius: 20px;
  background-color: rgb(255, 255, 255);
}
.grid-0-2-285 {
  display: grid;
  gap: 0.75rem;
  margin-bottom: 0px;
  grid-template-columns: repeat(2, 1fr);
}
.entry-0-2-286 {
  flex: 1 1 0%;
  display: flex;
}
.root-0-2-87 {
  display: flex;
  align-items: center;
  border-radius: 18px;
  justify-content: center;
  background-color: rgb(242, 242, 252);
}
.sizeMd-0-2-88 {
  width: 3rem;
  height: 3rem;
}
.capsule-0-2-287 {
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.75rem;
  border-radius: 8px;
}
.fill-0-2-35 {
  fill: #2388e5;
}
.capsuleIcon-0-2-288 {
  fill: #2388e5;
  width: 1.125rem;
  height: 1.125rem;
}
.label-0-2-289 {
  color: rgb(146, 146, 157);
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 0.25rem;
}
.value-0-2-290 {
  color: rgb(23, 23, 37);
  font-size: 14px;
  font-weight: 500;
}
.root-0-2-304 {
  fill: #2388e5;
}
.xs-0-2-195 {
  color: rgb(23, 23, 37);
  padding: 0.5rem 0.875rem;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  border-radius: 10px;
}
.salaryButton-0-2-300 {
  flex: 1 1 0%;
}
.buttonGroup-0-2-291 {
  display: none;
}
.share-0-2-292 {
  margin-right: 0.8125rem;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0px;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
.root-0-2-305 {
  width: 320px;
  border: 1px solid rgb(247, 249, 255);
  padding: 1rem 1.375rem;
  z-index: 6;
  background: rgb(255, 255, 255);
  border-radius: 1rem;
}
.shareTop-0-2-306 {
  display: flex;
  font-size: 18px;
  text-align: center;
  align-items: center;
  font-weight: bold;
  margin-bottom: 1rem;
  justify-content: space-between;
}
.closeIcon-0-2-308 {
  fill: rgb(146, 146, 157);
  width: 18px;
  height: 18px;
}
.shareMid-0-2-309 {
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.input-0-2-310 {
  border: 1px solid rgb(146, 146, 157);
  height: 24px;
  display: flex;
  padding: 0.625rem;
  overflow: hidden;
  position: relative;
  flex-grow: 1;
  font-size: 16px;
  text-align: center;
  align-items: center;
  font-weight: normal;
  border-radius: 0.5rem 0rem 0rem 0.5rem;
  text-overflow: ellipsis;
}
.input-0-2-310:focus {
  border: 1px solid rgb(146, 146, 157);
  outline: none;
}
.variantBlank-0-2-49 {
  color: rgb(23, 23, 37);
  background-color: unset;
}
.copyButton-0-2-311 {
  border-width: 1px 1px 1px 0px;
  border-style: solid;
  border-color: rgb(146, 146, 157);
  border-image: initial;
  height: 20px;
  padding: 1.375rem;
  border-radius: 0rem 0.5rem 0.5rem 0rem;
}
.stroke-0-2-34 {
  stroke: #2388e5;
}
.copyIcon-0-2-312 {
  stroke: rgb(23, 23, 37);
}
.shareBot-0-2-313 {
  color: rgb(146, 146, 157);
  display: flex;
  font-size: 14px;
  align-items: center;
  font-weight: bold;
  justify-content: space-between;
}
.shareBotHidden-0-2-314 {
  visibility: hidden;
}
.variantPrimary-0-2-44 {
  color: rgb(255, 255, 255);
  background-color: #2388e5;
}
.variantPrimary-0-2-44:hover {
  color: rgb(255, 255, 255);
  background-color: #40a9ff;
}
.variantPrimary-0-2-44:focus {
  box-shadow: #40a9ff 0px 0px 0px 2px;
}
.variantPrimary-0-2-44:active {
  box-shadow: unset;
  background-color: #096dd9;
}
.root-0-2-315 {
  color: rgb(255, 255, 255);
  border: 0px;
  font-size: 16px;
  font-weight: 500;
}
.normal-0-2-317 {
  padding: 0.875rem 1.75rem;
}
.apply-0-2-293 {
  flex: 1 1 0%;
}
.root-0-2-318 {
  width: 100%;
  margin-bottom: 1.25rem;
}
.label-0-2-319 {
  color: rgb(23, 23, 37);
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 1.25rem;
}
.asteriskValid-0-2-320 {
  opacity: 0.2;
}
.inputWrapper-0-2-322 {
  position: relative;
}
.input-0-2-323 {
  color: rgb(23, 23, 37);
  width: 100%;
  border: 2px solid transparent;
  display: block;
  padding: 1.375rem 1.5rem;
  font-size: 16px;
  box-sizing: border-box;
  border-radius: 15px;
  background-color: rgb(239, 243, 255);
}
.input-0-2-323:hover {
  border: 2px solid #40a9ff;
  outline: none;
}
.input-0-2-323:focus {
  border: 2px solid #40a9ff;
  outline: none;
}
.sizeLg-0-2-43 {
  padding: 1.4rem 3.25rem;
  font-size: 16px;
  border-radius: 10px;
}
.button-0-2-303 {
  width: 100%;
}
.temicloud-content {
  color: rgb(105, 105, 116);
  font-size: 14px;
  word-break: break-all;
  line-height: 24px;
  margin-bottom: 0px;
}
.content-0-2-279 {
  flex: 1 1 0%;
  padding: 1rem;
  position: relative;
  border-top: 1px solid rgb(242, 242, 252);
  border-radius: 0px;
  background-color: rgb(255, 255, 255);
}
.content-0-2-253 {
  padding: 0.75rem 1rem;
}
.temicloud-content p {
  color: rgb(105, 105, 116);
  font-size: 14px;
  line-height: 24px;
}
b,
strong {
  font-weight: bolder;
}
.right-0-2-283 {
  width: 400px;
  margin-left: 1.5625rem;
}
@media (min-width: 1280px) {
  .root-0-2-264 {
    margin-bottom: 3rem;
  }
}
@media (min-width: 1280px) {
  .alwaysNoMargin-0-2-97 {
    margin: auto;
    max-width: 1280px;
  }
}
@media (min-width: 1280px) {
  .container-0-2-266 {
    padding: 0px 1rem;
  }
}
@media (min-width: 1280px) {
  .primaryText-0-2-270 {
    padding: 4rem 0px;
    font-size: 36px;
    line-height: 64px;
    margin-left: 0px;
  }
}
@media (min-width: 1280px) {
  .placeholder-0-2-265 {
    height: 180px;
    display: block;
  }
}
@media (min-width: 1280px) {
  .alwaysNoMargin-0-2-97 {
    margin: auto;
    max-width: 1280px;
  }
}
@media (min-width: 1280px) {
  .main-0-2-267 {
    padding: 0px 1rem;
    margin-top: -180px;
  }
}
@media (min-width: 1280px) {
  .leftHeader-0-2-271 {
    height: 180px;
    border-bottom: 1px solid rgb(242, 242, 252);
    border-radius: 20px 20px 0px 0px;
  }
}
@media (min-width: 1280px) {
  .logo-0-2-273 {
    width: 168px;
    border: 6px solid rgb(241, 241, 245);
    height: 168px;
    margin: -1.5rem 2.5rem 1.5rem;
    border-radius: 20px;
  }
}
@media (min-width: 1280px) {
  .desktopInfo-0-2-274 {
    display: block;
    margin-top: 1.875rem;
  }
}
@media (min-width: 1280px) {
  .companyName-0-2-277 {
    font-size: 16px;
  }
}
@media (min-width: 1280px) {
  .jobName-0-2-278 {
    font-size: 24px;
    margin-bottom: 1.25rem;
  }
}
@media (min-width: 1280px) {
  .buttonGroup-0-2-280 {
    margin-top: 1.875rem;
    margin-right: 1.875rem;
  }
}
@media (min-width: 1280px) {
  .button-0-2-254 {
    padding: 0.875rem 1.75rem;
    font-size: 16px;
    border-radius: 10px;
  }
}
@media (min-width: 1280px) {
  .mobileInfo-0-2-275 {
    display: none;
  }
}
@media (min-width: 1280px) {
  .companyName-0-2-277 {
    font-size: 16px;
  }
}
@media (min-width: 1280px) {
  .jobName-0-2-278 {
    font-size: 24px;
    margin-bottom: 1.25rem;
  }
}
@media (min-width: 1280px) {
  .mobileSidecar-0-2-276 {
    display: none;
  }
}
@media (min-width: 1280px) {
  .root-0-2-284 {
    padding: 2.5rem 1.875rem;
  }
}
@media (min-width: 1280px) {
  .card-0-2-302 {
    display: block;
  }
}
@media (min-width: 1280px) {
  .grid-0-2-285 {
    gap: 1.25rem;
    margin-bottom: 2.5rem;
  }
}
@media (min-width: 1280px) {
  .capsule-0-2-287 {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    border-radius: 15px;
  }
}
@media (min-width: 1280px) {
  .capsuleIcon-0-2-288 {
    width: auto;
    height: auto;
  }
}
@media (min-width: 1280px) {
  .label-0-2-289 {
    font-size: 14px;
  }
}
@media (min-width: 1280px) {
  .value-0-2-290 {
    font-size: 16px;
  }
}
@media (min-width: 1280px) {
  .capsule-0-2-287 {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    border-radius: 15px;
  }
}
@media (min-width: 1280px) {
  .capsuleIcon-0-2-288 {
    width: auto;
    height: auto;
  }
}
@media (min-width: 1280px) {
  .label-0-2-289 {
    font-size: 14px;
  }
}
@media (min-width: 1280px) {
  .value-0-2-290 {
    font-size: 16px;
  }
}
@media (min-width: 1280px) {
  .capsule-0-2-287 {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    border-radius: 15px;
  }
}
@media (min-width: 1280px) {
  .capsuleIcon-0-2-288 {
    width: auto;
    height: auto;
  }
}
@media (min-width: 1280px) {
  .label-0-2-289 {
    font-size: 14px;
  }
}
@media (min-width: 1280px) {
  .value-0-2-290 {
    font-size: 16px;
  }
}
@media (min-width: 1280px) {
  .capsule-0-2-287 {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    border-radius: 15px;
  }
}
@media (min-width: 1280px) {
  .capsuleIcon-0-2-288 {
    width: auto;
    height: auto;
  }
}
@media (min-width: 1280px) {
  .label-0-2-289 {
    font-size: 14px;
  }
}
@media (min-width: 1280px) {
  .value-0-2-290 {
    font-size: 16px;
  }
}
@media (min-width: 1280px) {
  .capsule-0-2-287 {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    border-radius: 15px;
  }
}
@media (min-width: 1280px) {
  .label-0-2-289 {
    font-size: 14px;
  }
}
@media (min-width: 1280px) {
  .value-0-2-290 {
    font-size: 16px;
  }
}
@media (min-width: 1280px) {
  .capsule-0-2-287 {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    border-radius: 15px;
  }
}
@media (min-width: 1280px) {
  .xs-0-2-195 {
    padding: 0.75rem 1.25rem;
  }
}
@media (min-width: 1280px) {
  .buttonGroup-0-2-291 {
    display: flex;
  }
}
@media (min-width: 1280px) {
  .root-0-2-284 {
    padding: 2.5rem 1.875rem;
  }
}
@media (min-width: 1280px) {
  .card-0-2-302 {
    display: block;
  }
}
@media (min-width: 1280px) {
  .content-0-2-279 {
    border-width: 0px 1px 1px;
    border-top-style: initial;
    border-top-color: initial;
    border-left-style: solid;
    border-left-color: rgb(242, 242, 252);
    border-right-style: solid;
    border-right-color: rgb(242, 242, 252);
    border-bottom-style: solid;
    border-bottom-color: rgb(242, 242, 252);
    border-radius: 0px 0px 20px 20px;
  }
}
@media (min-width: 1280px) {
  .content-0-2-253 {
    padding: 1rem 1.5rem;
  }
}
@media (min-width: 1280px) {
  .root-0-2-284 {
    padding: 2.5rem 1.875rem;
  }
}
@media (min-width: 1280px) {
  .card-0-2-302 {
    display: block;
  }
}
@media (min-width: 1280px) {
  .grid-0-2-285 {
    gap: 1.25rem;
    margin-bottom: 2.5rem;
  }
}
@media (min-width: 1280px) {
  .capsule-0-2-287 {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    border-radius: 15px;
  }
}
@media (min-width: 1280px) {
  .capsuleIcon-0-2-288 {
    width: auto;
    height: auto;
  }
}
@media (min-width: 1280px) {
  .label-0-2-289 {
    font-size: 14px;
  }
}
@media (min-width: 1280px) {
  .value-0-2-290 {
    font-size: 16px;
  }
}
@media (min-width: 1280px) {
  .capsule-0-2-287 {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    border-radius: 15px;
  }
}
@media (min-width: 1280px) {
  .capsuleIcon-0-2-288 {
    width: auto;
    height: auto;
  }
}
@media (min-width: 1280px) {
  .label-0-2-289 {
    font-size: 14px;
  }
}
@media (min-width: 1280px) {
  .value-0-2-290 {
    font-size: 16px;
  }
}
@media (min-width: 1280px) {
  .capsule-0-2-287 {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    border-radius: 15px;
  }
}
@media (min-width: 1280px) {
  .capsuleIcon-0-2-288 {
    width: auto;
    height: auto;
  }
}
@media (min-width: 1280px) {
  .label-0-2-289 {
    font-size: 14px;
  }
}
@media (min-width: 1280px) {
  .value-0-2-290 {
    font-size: 16px;
  }
}
@media (min-width: 1280px) {
  .capsule-0-2-287 {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    border-radius: 15px;
  }
}
@media (min-width: 1280px) {
  .capsuleIcon-0-2-288 {
    width: auto;
    height: auto;
  }
}
@media (min-width: 1280px) {
  .label-0-2-289 {
    font-size: 14px;
  }
}
@media (min-width: 1280px) {
  .value-0-2-290 {
    font-size: 16px;
  }
}
@media (min-width: 1280px) {
  .capsule-0-2-287 {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    border-radius: 15px;
  }
}
@media (min-width: 1280px) {
  .label-0-2-289 {
    font-size: 14px;
  }
}
@media (min-width: 1280px) {
  .value-0-2-290 {
    font-size: 16px;
  }
}
@media (min-width: 1280px) {
  .capsule-0-2-287 {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
    border-radius: 15px;
  }
}
@media (min-width: 1280px) {
  .xs-0-2-195 {
    padding: 0.75rem 1.25rem;
  }
}
@media (min-width: 1280px) {
  .buttonGroup-0-2-291 {
    display: flex;
  }
}
@media (min-width: 1280px) {
  .root-0-2-284 {
    padding: 2.5rem 1.875rem;
  }
}
@media (min-width: 1280px) {
  .card-0-2-302 {
    display: block;
  }
}
</style>