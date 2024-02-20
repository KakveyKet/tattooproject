<template>
  <div
    class="w-full bg-isGray h-screen flex flex-col items-center justify-center relative overflow-hidden"
  >
    <div class="flex absolute items-center space-x-3 top-[20%] left-[40%]">
      <div>
        <div>
          <span class="icon-[ant-design--dashboard-outlined]"></span>
          <img class="w-10 h-10 ml-2" src="../assets/img/logo.png" alt="" />
        </div>
      </div>
      <h1 class="text-primary1 text-[37px] ml-3 font-bold tracking-wide">
        Ac🌰rns Tattoo
      </h1>
    </div>
    <br />
    <form
      @submit.prevent="handleSignIn"
      class="p-5 rounded-md bg-white bg-opacity-10 border-2 border-card w-auto z-10"
    >
      <div>
        <h1 class="text-2xl font-semibold text-white">Login Here</h1>
      </div>
      <div>
        <label>
          <h1 class="text-lg text-white py-3">Email</h1>
          <input
            type="email"
            v-model="email"
            class="bg-transparent w-[420px] px-3 py-2 text-white border-card border-2 rounded-md outline-none"
            placeholder="Email"
          />
        </label>
      </div>
      <div>
        <label>
          <h1 class="text-lg text-white py-3">Password</h1>
          <input
            type="password"
            v-model="password"
            class="bg-transparent w-[420px] px-3 py-2 text-white border-card border-2 rounded-md outline-none"
            placeholder="Password"
          />
        </label>
      </div>
      <div class="py-3">
        <button
          type="submit"
          class="bg-transparent w-[420px] px-3 py-2 text-white border-card border-2 rounded-md outline-none"
        >
          Log in
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import useSignIn from "../composible/Sigin";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { signin, error, isPending } = useSignIn();
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const handleSignIn = async () => {
      await signin(email.value, password.value);
      if (!error.value && isPending.value === false) {
        router.push({ name: "admin" });
      }
    };
    return { email, password, handleSignIn, error, isPending };
  },
};
</script>
