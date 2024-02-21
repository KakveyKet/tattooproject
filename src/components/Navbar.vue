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

      <Menu as="div" class="relative inline-block text-left">
        <div class="w-10 h-10 flex items-center justify-center">
          <MenuButton
            class="inline-flex w-full h-full items-center border-card border-2 rounded-full justify-center bg-black/20 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          >
            {{ user?.displayName[0] }}
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
          >
            <div class="px-1 py-1">
              <MenuItem @click="handleSignOut" v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-isGray text-card' : 'text-isGray',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  Log Out
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-isGray text-card' : 'text-isGray',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                >
                  Setting
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
    <!-- <div class="absolute bg-white rounded-md p-4 right-14 top-[100%]">
      <div v-for="userbooking in dataitem" :key="userbooking.id">
        <h1>{{ userbooking.status }}</h1>
      </div>
    </div> -->
  </div>
</template>

<script>
import { projectAuth } from "../firebase/config";
import { getCollectionQuery } from "@/composible/getCollection";
import { ref, onMounted } from "vue";
import getUser from "../composible/getUser";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { useRouter } from "vue-router";
export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
  },

  setup() {
    const dataitem = ref([]);
    onMounted(() => {
      getData();
    });
    const router = useRouter();
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
    const handleSignOut = async () => {
      try {
        await projectAuth.signOut();
        console.log("Sign-out successful");
        router.push({ name: "adminlogin" });
      } catch (error) {
        console.error("Error signing out:", error.message);
      }
    };
    return { dataitem, user, handleSignOut };
  },
};
</script>
