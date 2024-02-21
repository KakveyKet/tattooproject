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
        v-for="(booking, index) in dataitem"
        :key="booking.id"
        class="flex w-full overflow-hidden text-black font-semibold justify-between p-2 bg-white border-b-2 border-black border-opacity-50"
      >
        <div class="w-[20%] flex items-center">
          <h1 class="ml-3">
            {{ index + 1 }}
          </h1>
        </div>
        <div class="w-[20%] flex items-center">
          {{ new Date(booking.datetime.seconds * 1000).toLocaleString() }}
        </div>
        <div class="w-[20%] flex items-center">
          {{ booking.firstname }} {{ booking.lastname }}
        </div>
        <div
          v-if="booking.img"
          class="w-[20%] h-[120px] flex justify-start items-center"
        >
          <img
            :src="booking.img"
            class="w-[50%] h-full object-cover rounded-lg"
          />
        </div>
        <div v-else class="w-[20%] h-[120px] flex items-center">
          <h1>Don't have image</h1>
        </div>

        <div class="w-[20%] flex items-center">{{ booking.option }}</div>
        <div class="w-[20%] flex items-center justify-start">
          <button
            class="bg-active text-lg text-white rounded-full px-5 py-[2px]"
            :class="{ 'bg-pending': booking.status == 'Prending' }"
          >
            {{ booking.status }}
          </button>
        </div>

        <div class="w-[20%] flex items-center space-x-2">
          <router-link
            :to="{ name: 'bookingdetail', params: { id: booking.id } }"
            class="bg-blue-600 p-1 rounded"
          >
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
          </router-link>
          <button
            @click="openModal(booking.id)"
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
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-center text-gray-900"
              >
                Are you sure to cancel this client ?
              </DialogTitle>
              <div
                class="mt-5 w-[100%] flex justify-center text-white space-x-2"
              >
                <button
                  @click="closeModal"
                  class="px-3 py-2 bg-yellow-500 rounded-md"
                >
                  Cancel
                </button>
                <button
                  @click="deleteProduct"
                  class="px-3 py-2 bg-red-500 rounded-md"
                >
                  Yes
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { onMounted, ref } from "vue";
import { getCollectionQuery } from "../composible/getCollection"; // Assuming you have this module for fetching data
import { collection, doc, updateDoc } from "firebase/firestore";
import { projectFirestore, timestamp } from "@/firebase/config";
import useCollection from "@/composible/useCollection";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  },
  setup() {
    const dataitem = ref([]);
    const { addDocs, removeDoc, updateDocs } = useCollection("bookings");

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
    const isOpen = ref(false);
    function closeModal() {
      isOpen.value = false;
    }
    function openModal(id) {
      productId.value = id;
      isOpen.value = true;
    }
    const productId = ref(null);
    const deleteProduct = async () => {
      try {
        if (!productId.value) {
          console.error("Product ID is required.");
          return;
        }
        await removeDoc(productId.value);
        closeModal();
        console.log(productId.value);
        productId.value = "";
        console.log("Product deleted successfully");
      } catch (error) {
        console.error("Error deleting product:", error);
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
      await updateDoc(docRef, { status, createdAt: timestamp() }); // Include createdAt field with server timestamp
    };

    onMounted(() => {
      getData();
    });

    return {
      dataitem,
      toggleStatus,
      deleteProduct,
      openModal,
      isOpen,
      closeModal,
    };
  },
};
</script>
