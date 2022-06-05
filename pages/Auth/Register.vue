<template>
  <section class="flex justify-center items-center h-screen bg-gray-100">
    <div class="max-w-md w-full bg-white rounded p-6 space-y-4">
      <div class="mb-4">
        <p class="text-gray-600">Sign In</p>
        <h2 class="text-xl font-bold">Join our community</h2>
      </div>
      <div>
        <input
          class="
            w-full
            p-4
            text-sm
            bg-gray-50
            focus:outline-none
            border border-gray-200
            rounded
            text-gray-600
          "
          type="text"
          placeholder="Email"
        />
      </div>
      <div class="mt-15 mb-20">
        <input
          class="
            w-full
            p-4
            text-sm
            bg-gray-50
            focus:outline-none
            border border-gray-200
            rounded
            text-gray-600
          "
          type="text"
          placeholder="Password"
        />
      </div>
      <div class="mt-15 mb-20">
        <input
          class="
            w-full
            p-4
            text-sm
            bg-gray-50
            focus:outline-none
            border border-gray-200
            rounded
            text-gray-600
          "
          type="text"
          placeholder="Confirm Password"
        />
      </div>
      <div class="mb-20">
        <button
          class="
            w-full
            py-4
            bg-blue-600
            hover:bg-blue-700
            rounded
            text-sm
            font-bold
            text-gray-50
            transition
            duration-200
          "
        >
          Register
        </button>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex flex-row items-center">
          <input
            type="checkbox"
            class="
              focus:ring-blue-500
              h-4
              w-4
              text-blue-600
              border-gray-300
              rounded
            "
          />
          <label for="comments" class="ml-2 text-sm font-normal text-gray-600"
            >Remember me</label
          >
        </div>
        <div>
          <a class="text-sm text-blue-600 hover:underline" href="#"
            >Forgot password?</a
          >
        </div>
      </div>
    </div>
  </section>
</template>
 <script >
require("dotenv").config();

export default {
  name: "Login",
  layout: "auth",
  data() {
    const formState = {
      email: "",
      password: "",
      remember: true,
    };
    const isLoading = false;
    return {
      formState,
      isLoading,
    };
  },
  methods: {
    async onFinish() {
      if (this.formState.email && this.formState.password) {
        this.isLoading = true;
        const resposne = await this.onAuth(
          this.formState.email,
          this.formState.password
        );
      }
    },

    async onAuth(email, password) {
      const payload = { email, password };
      const res = await this.$axios
        .$post(`${process.env.apiUrl}auth/signin`, payload)
        .catch((err) => {});
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.login {
  background-color: white;
  padding: 50px;
}

.animation-login {
  display: flex;
  justify-content: center;
}
</style>