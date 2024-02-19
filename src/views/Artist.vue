<template>
  <div class="p-5 mt-14">
    <div class="flex justify-between">
      <h1 class="text-xl font-semibold">Artist</h1>
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
            class="px-4 h-8 shadow rounded-lg border-primary1 border-2 flex justify-start items-center"
          >
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 mr-4"
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
            Filter
          </button>
          <ul
            class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-isGray [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButton1"
            data-te-dropdown-menu-ref
          >
            <li @click="handleSort('active')">
              <a
                class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                href="#"
                data-te-dropdown-item-ref
                >Sort by Active</a
              >
            </li>
            <li @click="handleSort('inactive')">
              <a
                class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                href="#"
                data-te-dropdown-item-ref
                >Sort by Inactive</a
              >
            </li>
            <li @click="handleSort('Mon-Fri')">
              <a
                class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                href="#"
                data-te-dropdown-item-ref
                >Mon-Fri</a
              >
            </li>
            <li @click="handleSort('Sat-Sun')">
              <a
                class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                href="#"
                data-te-dropdown-item-ref
                >Sat-Sun</a
              >
            </li>
            <li @click="handleSort('Morning Section')">
              <a
                class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                href="#"
                data-te-dropdown-item-ref
                >Morning Section</a
              >
            </li>
            <li @click="handleSort('Afternoon section')">
              <a
                class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                href="#"
                data-te-dropdown-item-ref
                >Afternoon-section</a
              >
            </li>
          </ul>
        </div>
        <router-link to="/addartist">
          <button
            class="px-4 h-8 shadow rounded-lg bg-primary1 text-white flex items-center justify-center"
          >
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 mr-2"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M16 2A14.173 14.173 0 0 0 2 16a14.173 14.173 0 0 0 14 14a14.173 14.173 0 0 0 14-14A14.173 14.173 0 0 0 16 2m8 15h-7v7h-2v-7H8v-2h7V8h2v7h7Z"
                />
                <path fill="none" d="M24 17h-7v7h-2v-7H8v-2h7V8h2v7h7z" /></svg
            ></span>
            add
          </button>
        </router-link>
      </div>
    </div>
    <div
      class="flex w-full mt-7 rounded-t text-black font-semibold border-b-2 border-black border-opacity-50 justify-between p-4 bg-isGray2 bg-opacity-50"
    >
      <div class="w-[20%]">Profile</div>
      <div class="w-[20%]">Name</div>
      <div class="w-[20%] text-center">Bio</div>
      <div class="w-[20%] text-center">Status</div>
      <div class="w-[20%]">Working day</div>
      <div class="w-[20%]">Working time</div>
      <div class="w-[20%]">Actions</div>
    </div>
    <div
      v-if="filteredAndSortedData.length > 0"
      class="w-full h-[650px] overflow-auto"
    >
      <div
        v-for="user in filteredAndSortedData"
        :key="user"
        class="flex w-full overflow-hidden text-black font-semibold justify-between p-2 bg-white border-b-2 border-black border-opacity-50"
      >
        <div class="w-[20%] flex items-center">
          <img class="w-12 h-12 rounded-full" :src="user.image" alt="" />
        </div>
        <div class="w-[20%] flex items-center">{{ user.name }}</div>
        <div class="w-[20%] flex items-center">{{ user.bio }} /artist</div>
        <div class="w-[20%] flex items-center">
          <div class="w-[20%] flex items-center">
            <button
              class="bg-active text-lg text-white ml-12 rounded-full px-5 py-[2px]"
              :class="{ 'bg-red-600': user.statuse == 'inactive' }"
            >
              {{ user.statuse }}
            </button>
          </div>
        </div>
        <div class="w-[20%] flex items-center">{{ user.workingday }}</div>
        <div class="w-[20%] flex items-center">{{ user.workingtime }}</div>

        <div class="w-[20%] flex items-center space-x-2">
          <button class="bg-view p-1 rounded bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4 text-view"
            >
              <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <path
                fill-rule="evenodd"
                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button
            @click="handleEdit(user.id)"
            class="bg-active p-1 rounded bg-opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z"
              />
              <path
                d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z"
              />
            </svg>
          </button>
          <button class="bg-delete p-1 rounded bg-opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4 text-delete"
            >
              <path
                fill-rule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div v-else class="w-full h-[700px] flex items-center justify-center">
      <div class="w-[200px] p-5">
        <h1>Not Found</h1>
      </div>
    </div>
    <div>
      <div class="w-full mt-3 flex items-center justify-end">
        <nav aria-label="Page navigation example">
          <ul class="list-style-none flex space-x-2">
            <li>
              <a
                class="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm transition-all duration-300"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white"
                href="#!"
                >1</a
              >
            </li>
            <li aria-current="page">
              <a
                class="relative block rounded bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300"
                href="#!"
                >2
                <span
                  class="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]"
                  >(current)</span
                >
              </a>
            </li>

            <li>
              <a
                class="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm transition-all duration-300"
                href="#!"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { getCollectionQuery } from "@/composible/getCollection";
import { ref, onMounted, computed } from "vue";
import { Dropdown, Ripple, initTE } from "tw-elements";

export default {
  setup() {
    const dataitem = ref([]);
    const searchQuery = ref("");
    const sortBy = ref(null);

    onMounted(async () => {
      await getData();
      initTE({ Dropdown, Ripple });
    });

    const getData = async () => {
      try {
        await getCollectionQuery(
          "artists",
          [],
          (data) => {
            dataitem.value = data;
          },
          true
        );
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    const filteredAndSortedData = computed(() => {
      let filteredData = dataitem.value.filter((artist) => {
        return artist.name
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase());
      });

      if (sortBy.value === "active" || sortBy.value === "inactive") {
        filteredData = filteredData.filter(
          (artist) => artist.statuse === sortBy.value
        );
      } else if (sortBy.value === "Mon-Fri" || sortBy.value === "Sat-Sun") {
        filteredData = filteredData.filter(
          (artist) => artist.workingday === sortBy.value
        );
      } else if (
        sortBy.value === "Morning Section" ||
        sortBy.value === "Afternoon Section"
      ) {
        filteredData = filteredData.filter(
          (artist) => artist.workingtime === sortBy.value
        );
      }

      return filteredData;
    });

    const handleSort = (sortValue) => {
      sortBy.value = sortValue;
    };

    const router = useRouter();

    const handleEdit = (id) => {
      router.push({
        name: "addartist",
        params: { id: id },
        query: { id: id },
      });
    };

    return {
      handleEdit,
      dataitem,
      filteredAndSortedData,
      handleSort,
      searchQuery,
    };
  },
};
</script>
