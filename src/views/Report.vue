<template>
  <div class="p-5 mt-14 relative">
    <div class="flex justify-between">
      <h1 class="text-xl font-semibold">Daily Report</h1>
      <div class="flex space-x-4 items-center">
        <div
          class="w-[200px] h-8 flex justify-between items-center border-gray-600 border-2 rounded-lg"
        >
          <input
            class="w-[80%] px-3 h-full placeholder:text-sm bg-transparent outline-none"
            type="text"
            placeholder="Search..."
            v-model="searchQuery"
          />
          <span class="mr-2"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 48 48"
            >
              <g fill="#616161">
                <path
                  d="m29.175 31.99l2.828-2.827l12.019 12.019l-2.828 2.827z"
                />
                <circle cx="20" cy="20" r="16" />
              </g>
              <path
                fill="#37474f"
                d="m32.45 35.34l2.827-2.828l8.696 8.696l-2.828 2.828z"
              />
              <circle cx="20" cy="20" r="13" fill="#64b5f6" />
              <path
                fill="#bbdefb"
                d="M26.9 14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2 1.2-6.9 3.2c-.4.4-.3 1.1.1 1.4c.4.4 1.1.3 1.4-.1C16 13.9 17.9 13 20 13s4 .9 5.4 2.5c.2.2.5.4.8.4c.2 0 .5-.1.6-.2c.4-.4.4-1.1.1-1.5"
              /></svg
          ></span>
        </div>
        <div class="relative" data-te-dropdown-ref>
          <button
            id="dropdownMenuButton1"
            data-te-dropdown-toggle-ref
            aria-expanded="false"
            data-te-ripple-init
            class="px-2 h-8 shadow rounded-lg flex justify-start items-center"
          >
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4"
                viewBox="0 0 32 32"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2 5s4-2 14-2s14 2 14 2L19 18v9l-6 3V18z"
                />
              </svg>
            </span>
          </button>
          <ul
            class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButton1"
            data-te-dropdown-menu-ref
          >
            <li @click="handleSort('Tattoo')">
              <a
                class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                data-te-dropdown-item-ref
                >Tattoo</a
              >
            </li>
            <li @click="handleSort('Piercing ')">
              <a
                class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                data-te-dropdown-item-ref
                >Piercing</a
              >
            </li>
            <li @click="handleSort('Tattoo Removal ')">
              <a
                class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                data-te-dropdown-item-ref
                >Tattoo Removal</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="flex w-full mt-7 rounded-t text-black font-semibold border-b-2 border-black border-opacity-50 justify-between p-4 bg-isGray2 bg-opacity-50"
    >
      <div class="w-[20%]">No.</div>
      <div class="w-[20%]">Booking At</div>
      <div class="w-[20%]">Client Name</div>
      <div class="w-[20%]">Image</div>
      <div class="w-[20%]">Details</div>
      <div class="w-[20%]">Actions</div>
    </div>
    <div
      v-if="filteredAndSortedData.length > 0"
      class="w-full h-[650px] overflow-auto"
    >
      <div
        v-for="(booking, index) in filteredAndSortedData"
        :key="booking.id"
        class="flex w-full overflow-hidden text-black font-semibold justify-between p-2 bg-white border-b-2 border-black border-opacity-50"
      >
        <div class="w-[20%] flex items-center">
          <h1 class="ml-4">
            {{ index + 1 }}
          </h1>
        </div>
        <div class="w-[20%] flex items-center tracking-wider">
          {{ new Date(booking.datetime.seconds * 1000).toLocaleString() }}
        </div>
        <div class="w-[20%] flex items-center">
          {{ booking.firstname }} {{ booking.lastname }}
        </div>
        <div v-if="booking.img" class="w-[20%] h-[120px]">
          <img
            :src="booking.img"
            class="w-[50%] h-full object-cover rounded-lg"
          />
        </div>
        <div v-else class="w-[20%] h-[120px] flex items-center ml-3">
          <h1>Don't Have Image</h1>
        </div>

        <div class="w-[20%] flex items-center">{{ booking.option }}</div>

        <div class="w-[20%] flex items-center space-x-2 mr-5 text-white">
          <router-link
            :to="{ name: 'reportdetail', params: { id: booking.id } }"
            class="bg-blue-600 hover:bg-blue-700 duration-300 active:bg-blue-800 px-2 py-1 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 0 0 3 3h.27l-.155 1.705A1.875 1.875 0 0 0 7.232 22.5h9.536a1.875 1.875 0 0 0 1.867-2.045l-.155-1.705h.27a3 3 0 0 0 3-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0 0 18 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM16.5 6.205v-2.83A.375.375 0 0 0 16.125 3h-8.25a.375.375 0 0 0-.375.375v2.83a49.353 49.353 0 0 1 9 0Zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 0 1-.374.409H7.232a.375.375 0 0 1-.374-.409l.526-5.784a.373.373 0 0 1 .333-.337 41.741 41.741 0 0 1 8.566 0Zm.967-3.97a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H18a.75.75 0 0 1-.75-.75V10.5ZM15 9.75a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V10.5a.75.75 0 0 0-.75-.75H15Z"
                clip-rule="evenodd"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
    <div v-else class="w-full h-[700px] flex items-center justify-center">
      <div class="w-[200px] p-5">
        <h1>Not Found</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, computed } from "vue";
import { getCollectionQuery } from "../composible/getCollection"; // Assuming you have this module for fetching data
import { collection, doc, updateDoc } from "firebase/firestore";
import { projectFirestore } from "@/firebase/config";
import { Dropdown, Ripple, initTE } from "tw-elements";
export default {
  setup() {
    onMounted(() => {
      initTE({ Dropdown, Ripple });
    });
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
        console.error(error.message);
      }
    };
    const dataitem = ref([]);
    const searchQuery = ref("");
    const sortBy = ref(null);

    const filteredAndSortedData = computed(() => {
      return filterData();
    });

    const filteredBookings = computed(() => {
      return dataitem.value.filter((booking) => booking.status === "Done");
    });

    function filterData() {
      let filteredData = dataitem.value.filter((product) => {
        return product.firstname
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase());
      });

      if (sortBy.value !== null) {
        filteredData = filteredData.filter(
          (product) => product.option === sortBy.value
        );
      }

      return filteredData;
    }

    const handleSort = (sortValue) => {
      sortBy.value = sortValue;
    };

    const toggleStatus = async (id) => {
      try {
        const index = dataitem.value.findIndex((item) => item.id === id);
        const updatedStatus =
          dataitem.value[index].status === "Done" ? "Pending" : "Done";
        await updateStatusInFirestore(id, updatedStatus);
        dataitem.value[index].status = updatedStatus;
      } catch (error) {
        console.error(error.message);
      }
    };

    const updateStatusInFirestore = async (id, status) => {
      const docRef = doc(projectFirestore, "bookings", id);
      await updateDoc(docRef, { status });
    };

    onMounted(() => {
      getData();
    });

    return {
      dataitem,
      toggleStatus,
      filteredBookings,
      filteredAndSortedData,
      searchQuery,
      filterData,
      handleSort,
    };
  },
};
</script>
