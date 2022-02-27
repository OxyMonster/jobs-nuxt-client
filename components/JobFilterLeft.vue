<template>
  <div class="">
    <a-menu
      mode="inline"
      :default-selected-keys="['1']"
      :default-open-keys="['sub1', 'sub2', 'sub3']"
      style="height: 100%"
    >
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="user" />Type of employment</span>
        <a-menu-item key="1" class="flex justify-between">
          <a-checkbox> Full time Jobs </a-checkbox>
          <a-tag>123</a-tag>
        </a-menu-item>
        <a-menu-item key="2" class="flex justify-between">
          <a-checkbox> Part time Jobs </a-checkbox>
          <a-tag>123</a-tag>
        </a-menu-item>
        <a-menu-item key="3" class="flex justify-between">
          <a-checkbox> Remote Jobs </a-checkbox>
          <a-tag>123</a-tag>
        </a-menu-item>
        <a-menu-item key="4" class="flex justify-between">
          <a-checkbox> Intership Jobs </a-checkbox>
          <a-tag>123</a-tag>
        </a-menu-item>
        <a-menu-item key="5" class="flex justify-between">
          <a-checkbox> Contract Jobs </a-checkbox>
          <a-tag>123</a-tag>
        </a-menu-item>
        <a-menu-item key="6" class="flex justify-between">
          <a-checkbox> Training Jobs </a-checkbox>
          <a-tag>123</a-tag>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="laptop" />Seniority level</span>
        <a-menu-item key="7" class="flex justify-between">
          <a-checkbox> Entry Level </a-checkbox>
          <a-tag>123</a-tag>
        </a-menu-item>
        <a-menu-item key="8" class="flex justify-between">
          <a-checkbox> Mid Level </a-checkbox>
          <a-tag>123</a-tag>
        </a-menu-item>
        <a-menu-item key="9" class="flex justify-between">
          <a-checkbox> Senior Level </a-checkbox>
          <a-tag>123</a-tag>
        </a-menu-item>
        <a-menu-item key="10" class="flex justify-between">
          <a-checkbox> Director Level </a-checkbox>
          <a-tag>123</a-tag>
        </a-menu-item>
        <a-menu-item key="11" class="flex justify-between">
          <a-checkbox> VIP or Above </a-checkbox>
          <a-tag>123</a-tag>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <span slot="title"><a-icon type="notification" />Salary range</span>
        <a-menu-item key="12" class="flex justify-between">
          <a-checkbox> $700 - $1000 </a-checkbox>
          <a-tag>123</a-tag>
        </a-menu-item>
        <a-menu-item key="13" class="flex justify-between">
          <a-checkbox> $700 - $1000 </a-checkbox>
          <a-tag>123</a-tag>
        </a-menu-item>
        <a-menu-item key="14" class="flex justify-between">
          <a-checkbox> $1000 - $1200 </a-checkbox>
          <a-tag>123</a-tag>
        </a-menu-item>
        <a-menu-item key="15" class="flex justify-between">
          <a-checkbox> $1200 - $1400 </a-checkbox>
          <a-tag>123</a-tag>
        </a-menu-item>
        <a-menu-item key="16" class="flex justify-between">
          <a-checkbox> $1500 - $1800 </a-checkbox>
          <a-tag>123</a-tag>
        </a-menu-item>
        <a-menu-item key="17" class="flex justify-between">
          <a-checkbox> $2000 - $3000 </a-checkbox>
          <a-tag>123</a-tag>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: "JobFilterLeft",
};
</script>

<style scoped>
.ant-menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ant-menu {
  border-radius: 8px;
  border: none;
}
</style>