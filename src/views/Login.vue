<template>
  <div>
    <Menubar />
  </div>
  <div class="flex w-full h-screen items-center justify-center">
    <form
      @submit.prevent="handleSignIn"
      class="lg:w-[40%] xl:w-[50%] md:w-[40%] w-full p-2 bg-card shadow-lg rounded-lg"
    >
      <div class="text-4xl py-8 font-semibold">
        <h1>Sigup New Account</h1>
      </div>
      <div class="space-y-2">
        <label class="text-lg">Email</label>
        <br />
        <input
          type="email"
          v-model="email"
          required
          class="text-lg px-3 py-2 rounded-lg outline-none w-full"
          placeholder="Email"
        />
      </div>
      <div class="space-y-2">
        <label class="text-lg">Password</label>
        <br />
        <input
          type="password"
          v-model="password"
          required
          class="text-lg px-3 py-2 rounded-lg outline-none w-full"
          placeholder="Password"
        />
      </div>

      <div class="space-y-2 mt-4">
        <button class="w-full py-2 bg-active text-white rounded-lg">
          Login
        </button>
      </div>
      <div class="space-y-2 mt-4">
        <router-link to="/signup" class="underline">
          Don't Have an have account
        </router-link>
      </div>
    </form>
  </div>
  <div>
    <FooterVue />
  </div>
</template>

<script>
import Menubar from "../client/MenuBar.vue";
import { ref, onMounted } from "vue";
import useSignIn from "../composible/Sigin";
import { useRouter } from "vue-router";
import FooterVue from "@/client/Footer.vue";
import { Dropdown, Ripple, initTE } from "tw-elements";

export default {
  components: {
    Menubar,
    FooterVue,
  },
  setup() {
    onMounted(() => {
      initTE({ Dropdown, Ripple });
    });
    const { signin, error, isPending } = useSignIn();
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const handleSignIn = async () => {
      await signin(email.value, password.value);
      if (!error.value && isPending.value === false) {
        router.push({ name: "homeweb" });
      }
    };
    return { email, password, handleSignIn, error, isPending };
  },
};
</script>
