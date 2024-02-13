<template>
  <div
    class="w-full h-[60px] bg-[#2B2B2D] lg:flex xl:flex md:hidden hidden items-center justify-between shadow-md"
  >
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
      <router-link class="text-lg font-semibold text-white" to="/Home"
        >Product & Service</router-link
      >
      <div class="w-[2px] h-4 bg-white"></div>

      <router-link class="text-lg font-semibold text-white" to="/Home"
        >Contact us</router-link
      >
      <div class="w-[2px] h-4 bg-white"></div>

      <router-link class="text-lg font-semibold text-white" to="/Home"
        >About US</router-link
      >
      <div class="w-[2px] h-4 bg-white"></div>

      <div>
        <button
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
      </div>
    </div>
  </div>
  <div
    class="w-full p-2 h-[60px] bg-[#2B2B2D] flex items-center justify-between shadow-md"
  >
    <div>
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
    <div>
      <button
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
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
