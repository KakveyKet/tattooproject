<template>
  <div
    class="w-full h-[60px] bg-[#2B2B2D] lg:flex xl:flex md:hidden hidden items-center justify-between shadow-md fixed z-50"
  >
    <!-- lg xl md -->
    <div class="flex items-center space-x-3">
      <div>
        <div>
          <span class="icon-[ant-design--dashboard-outlined]"></span>
          <img class="w-10 h-10 ml-2" src="../assets/img/logo.png" alt="" />
        </div>
      </div>
      <h1
        class="text-primary1 lg:text-[27px] xl:text-[27px] md:text-[27px] text-[20px] ml-3 font-bold tracking-wide"
      >
        Ac🌰rns Tattoo
      </h1>
    </div>
    <div class="lg:flex md:hidden xl:flex hidden items-center space-x-2 mr-4">
      <router-link class="text-lg font-semibold text-white" to="/homeweb"
        >Home</router-link
      >
      <div class="w-[2px] h-4 bg-white"></div>
      <router-link
        class="text-lg font-semibold text-white"
        to="/productandservice"
        >Product & Service</router-link
      >
      <div class="w-[2px] h-4 bg-white"></div>

      <router-link class="text-lg font-semibold text-white" to="/contactus"
        >Contact us</router-link
      >
      <div class="w-[2px] h-4 bg-white"></div>

      <router-link class="text-lg font-semibold text-white" to="/aboutus"
        >About US</router-link
      >
      <div class="w-[2px] h-4 bg-white"></div>

      <!-- <div>
        <button
          @click.prevent="handleGotoBooking"
          class="px-2 py-1 bg-red-600 rounded active:bg-red-800 duration-300 hover:bg-red-700 text-white flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-4 h-4"
          >
            <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
            <path
              fill-rule="evenodd"
              d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="text-sm">Booking</span>
        </button>
      </div> -->
      <div v-if="!user" class="">
        <button @click="handleSignIn" class="bg-card px-4 py-1 rounded-md">
          Sign In
        </button>
      </div>
      <div
        v-else
        data-te-dropdown-ref
        class="w-10 rounded-full flex items-center justify-center h-10 bg-isGray bg-opacity-50 text-white border relative"
      >
        <button
          id="dropdownMenuButton1"
          data-te-dropdown-toggle-ref
          aria-expanded="false"
          data-te-ripple-init
          data-te-ripple-color="light"
          class="uppercase w-8 h-8"
        >
          {{ user?.displayName[0] }}
        </button>
        <ul
          class="absolute z-[100] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
          aria-labelledby="dropdownMenuButton1"
          data-te-dropdown-menu-ref
        >
          <li>
            <a
              class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              href="#"
              data-te-dropdown-item-ref
              >Profile</a
            >
          </li>
          <li>
            <a
              @click="handleSignOut"
              class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              href="#"
              data-te-dropdown-item-ref
              >Log out</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- sm -->
  <div class="fixed w-full z-40">
    <div
      class="w-full p-2 h-[60px] bg-[#2B2B2D] flex lg:hidden xl:hidden md:hidden items-center justify-between shadow-md relative"
    >
      <div @click.prevent="handleOpenMenuMobile">
        <div v-if="isOpenMenuMobile == true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 text-white"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div v-else>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 text-white"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z"
            />
          </svg>
        </div>
      </div>
      <div class="flex items-center">
        <div>
          <img class="w-10 h-10" src="../assets/img/logo.png" alt="" />
        </div>
        <h1
          class="text-primary1 lg:text-[27px] xl:text-[27px] md:text-[27px] text-[15px] ml-1 font-bold tracking-wide"
        >
          Ac🌰rns <br />
          Tattoo
        </h1>
      </div>
      <div v-if="!user" class="">
        <button @click="handleSignIn" class="bg-card px-4 py-1 rounded-md">
          Sign In
        </button>
      </div>
      <div
        v-else
        class="w-10 h-10 border border-card rounded-full flex items-center justify-center"
      >
        <h1 class="uppercase text-white">
          {{ user?.displayName[0] }}
        </h1>
      </div>
      <div
        class="fixed top-[60px] w-full right-0 duration-300 z-50 h-screen bg-slate-900 bg-opacity-50"
        :class="{ '-translate-x-[100%] duration-300': isOpenMenuMobile }"
      >
        <div class="w-full flex flex-col h-screen bg-[#2B2B2D] p-4">
          <ul class="flex w-[70%] h-1/2 mt-10 flex-col ml-12 space-y-4">
            <router-link
              @click.prevent="handleOpenMenuMobile"
              class="text-xl font-semibold text-white"
              to="/homeweb"
              >Home</router-link
            >
            <router-link
              @click.prevent="handleOpenMenuMobile"
              class="text-xl font-semibold text-white"
              to="/productandservice"
              >Product & Service</router-link
            >
            <router-link
              @click.prevent="handleOpenMenuMobile"
              class="text-xl font-semibold text-white"
              to="/contactus"
              >Contact us</router-link
            >
            <router-link
              @click.prevent="handleOpenMenuMobile"
              class="text-xl font-semibold text-white"
              to="/aboutus"
              >About US</router-link
            >
            <router-link
              @click.prevent="handleOpenMenuMobile"
              class="text-xl font-semibold text-white"
              to="/bookingUser"
              >Booking</router-link
            >
            <router-link
              @click.prevent="handleOpenMenuMobile"
              class="text-xl font-semibold text-white"
              to="/feedback"
              >Feedback</router-link
            >
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { projectAuth } from "../firebase/config";
import { Dropdown, Ripple, initTE } from "tw-elements";
import getUser from "../composible/getUser";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    onMounted(() => {
      initTE({ Dropdown, Ripple });
    });
    const { user } = getUser();
    const router = useRouter();
    const isOpenMenuMobile = ref(true);
    const handleOpenMenuMobile = () => {
      isOpenMenuMobile.value = !isOpenMenuMobile.value;
    };
    const handleGotoBooking = () => {
      router.push({ name: "bookingUser" });
    };
    const handleSignOut = async () => {
      try {
        await projectAuth.signOut();
        console.log("Sign-out successful");
        router.push({ name: "signup" });
      } catch (error) {
        console.error("Error signing out:", error.message);
      }
    };
    const handleSignIn = () => {
      router.push({ name: "login" });
    };
    return {
      handleOpenMenuMobile,
      isOpenMenuMobile,
      handleGotoBooking,
      user,
      handleSignOut,
      handleSignIn,
    };
  },
};
</script>

<style>
.router-link-active {
  border-bottom: 2px red solid;
  display: inline-block;
}
</style>
