<template>
  <div class="p-5 mt-14 relative">
    <div class="flex justify-between">
      <h1 class="text-xl font-semibold">Booking List</h1>
      <div class="flex space-x-4 items-center">
        <div
          class="w-[200px] h-8 flex justify-between items-center border-gray-600 border-2 rounded-lg"
        >
          <input
            class="w-[80%] px-3 h-full placeholder:text-sm bg-transparent outline-none"
            type="text"
            placeholder="Search..."
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
        <div>
          <button
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
        </div>
      </div>
    </div>
    <div
      class="flex w-full mt-7 rounded-t text-black font-semibold border-b-2 border-black border-opacity-50 justify-between p-4 bg-isGray2 bg-opacity-50"
    >
      <div class="w-[20%]">No.</div>
      <div class="w-[20%]">Date Time</div>
      <div class="w-[20%]">Client Name</div>
      <div class="w-[20%]">Image</div>
      <div class="w-[20%]">Details</div>
      <div class="w-[20%]">Status</div>
      <div class="w-[20%]">Actions</div>
    </div>
    <div class="w-full h-[650px] overflow-auto">
      <div
        v-for="booking in dataitem"
        :key="booking.id"
        class="flex w-full overflow-hidden text-black font-semibold justify-between p-2 bg-white border-b-2 border-black border-opacity-50"
      >
        <div class="w-[20%] flex items-center">
          {{ booking.id.slice(1, 6) }}
        </div>
        <div class="w-[20%] flex items-center">
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
        <div
          v-else
          class="w-[20%] h-[120px] text-center flex items-center ml-14"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-9 h-9 text-red-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
            />
          </svg>
        </div>

        <div class="w-[20%] flex items-center">{{ booking.option }}</div>
        <div class="w-[20%] flex items-center">
          <button
            class="bg-active text-lg text-white rounded-full px-5 py-[2px]"
            :class="{ 'bg-pending': booking.status == 'Prending' }"
          >
            {{ booking.status }}
          </button>
        </div>

        <div class="w-[20%] flex items-center space-x-2">
          <button class="bg-blue-600 p-1 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4 text-white"
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
            class="bg-delete p-1 rounded"
            :class="{ hidden: booking.status == 'Done' }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <button
            @click.prevent="toggleStatus(booking.id)"
            class="bg-green-500 p-1 rounded"
            :class="{ hidden: booking.status == 'Done' }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { getCollectionQuery } from "../composible/getCollection"; // Assuming you have this module for fetching data
import { collection, doc, updateDoc } from "firebase/firestore";
import { projectFirestore } from "@/firebase/config";

export default {
  setup() {
    const dataitem = ref([]); // Array to store the fetched data

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
    };
  },
};
</script>
