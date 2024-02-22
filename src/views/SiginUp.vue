<template>
  <div>
    <MenuBarVue />
  </div>
  <div class="flex w-full h-screen items-center justify-center p-2">
    <form
      @submit.prevent="handleSigUp"
      class="lg:w-[40%] xl:w-[50%] md:w-[40%] w-full p-2 bg-card shadow-lg rounded-lg"
    >
      <div class="text-4xl py-8 font-semibold">
        <h1>Sigup New Account</h1>
      </div>
      <div class="space-y-2">
        <label class="text-lg">Username</label>
        <br />
        <input
          type="text"
          required
          v-model="username"
          class="text-lg px-3 py-2 rounded-lg outline-none w-full"
          placeholder="Username"
        />
      </div>
      <div class="space-y-2">
        <label class="text-lg">Email</label>
        <br />
        <input
          type="email"
          required
          v-model="email"
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
      <div class="space-y-2">
        <label class="text-lg">Confirm Password</label>
        <br />
        <input
          v-model="confirmpassword"
          type="password"
          required
          class="text-lg px-3 py-2 rounded-lg outline-none w-full"
          placeholder="Confirm Password"
        />
      </div>
      <div class="space-y-2 mt-4">
        <button class="w-full py-2 bg-active text-white rounded-lg">
          Sign Up
        </button>
      </div>
      <div class="space-y-2 mt-4">
        <router-link to="/login" class="underline">
          Already have account
        </router-link>
      </div>
    </form>
  </div>
  <div>
    <Footer />
  </div>
</template>

<script>
import { ref } from "vue";
import useCollection from "@/composible/useCollection";
import useSignUp from "@/composible/Signup";
import { useRouter } from "vue-router";
import MenuBarVue from "../client/MenuBar.vue";
import Footer from "@/client/Footer.vue";
export default {
  components: {
    MenuBarVue,
    Footer,
  },
  setup() {
    const username = ref("");
    const email = ref("");
    const password = ref("");
    const confirmpassword = ref("");
    const { addUser } = useCollection("users");
    const { signup, error } = useSignUp();
    const router = useRouter();
    const handleSigUp = async () => {
      try {
        if (password.value !== confirmpassword.value) {
          throw new Error("Password does not match");
        }

        const res = await signup(email.value, password.value, username.value);
        if (res && res.user && res.user.uid) {
          await addUser({
            username: username.value,
          });

          router.push({ name: "homeweb" });
        }
      } catch (err) {
        error.value = err.message;
      }
    };

    return {
      username,
      email,
      confirmpassword,
      password,
      handleSigUp,
    };
  },
};
</script>
