<template>
  <a-form
    :model="formState"
    v-bind="layout"
    name="nest-messages"
    :validate-messages="validateMessages"
    @finish="onFinish"
  >
    <a-form-item
      :name="['user', 'name']"
      label="email"
      :rules="[{ required: true }]"
    >
      <a-input :value="formState.email" v-model="formState.email" />
    </a-form-item>
    <a-form-item
      :name="['user', 'name']"
      label="Phone"
      :rules="[{ required: true }]"
    >
      <a-input :value="formState.phone" v-model="formState.phone" />
    </a-form-item>
    <a-form-item
      :name="['user', 'name']"
      label="email"
      :rules="[{ required: true }]"
    >
      <a-textarea
        v-model="formState.description"
        :rows="4"
        placeholder="maxLength is 6"
        :maxlength="6"
      />
    </a-form-item>
    <div class="">
      <a-button type="primary">Submit</a-button>
    </div>
  </a-form>
</template>

<script>
export default {
  data: function () {
    const formState = {
      email: "",
      phone: "",
      description: "",
    };
    return {
      formState,
    };
  },
};
</script>

<style>
</style>