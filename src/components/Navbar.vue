<template>
  <div
    class="h-[70px] fixed z-50 bg-isGray w-full flex items-center justify-between shadow-md"
  >
    <div class="flex items-center space-x-3">
      <div>
        <div>
          <span class="icon-[ant-design--dashboard-outlined]"></span>
          <img class="w-10 h-10 ml-2" src="../assets/img/logo.png" alt="" />
        </div>
      </div>
      <h1 class="text-primary1 text-[27px] ml-3 font-bold tracking-wide">
        Ac🌰rns Tattoo
      </h1>
    </div>
    <div class="flex items-center space-x-3 mr-5 p-2 relative">
      <div
        class="absolute bg-red-600 text-white top-0 right-14 w-5 flex items-center justify-center rounded-full text-sm h-5"
      >
        {{
          dataitem.filter((userbooking) => userbooking.status === "Prending")
            .length
        }}
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>
      </div>
      <div
        class="p-1 w-10 h-10 border-2 text-white flex items-center justify-center rounded-full"
      >
        <h1>
          {{ user?.displayName[0] }}
        </h1>
      </div>
    </div>
    <!-- <div class="absolute bg-white rounded-md p-4 right-14 top-[100%]">
      <div v-for="userbooking in dataitem" :key="userbooking.id">
        <h1>{{ userbooking.status }}</h1>
      </div>
    </div> -->
  </div>
</template>

<script>
import { getCollectionQuery } from "@/composible/getCollection";
import { ref, onMounted } from "vue";
import getUser from "../composible/getUser";

export default {
  setup() {
    const dataitem = ref([]);
    onMounted(() => {
      getData();
    });
    const { user } = getUser();
    const getData = async () => {
      try {
        await getCollectionQuery(
          "bookings",
          [],
          (data) => {
            dataitem.value = data;
          },
          true
        );
      } catch (error) {
        return error.message;
      }
    };
    return { dataitem, user };
  },
};
</script>
