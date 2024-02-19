<template>
  <div class="p-5 w-full mt-14">
    <div>
      <h1 class="text-xl font-semibold text-[black]">Dashboard</h1>
    </div>
    <!-- dashoard -->
    <div class="mt-6 w-full grid grid-cols-4 gap-3">
      <!-- booking -->
      <div
        class="w-[100%] shadow-md h-[100px] bg-nav p-3 rounded-lg flex items-center justify-between"
      >
        <div class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4em"
            height="4em"
            viewBox="0 0 56 56"
          >
            <path
              fill="currentColor"
              d="M15.555 53.125h24.89c4.852 0 7.266-2.461 7.266-7.336V24.508c0-3.024-.328-4.336-2.203-6.258L32.57 5.102c-1.78-1.829-3.234-2.227-5.882-2.227H15.555c-4.828 0-7.266 2.484-7.266 7.36v35.554c0 4.898 2.438 7.336 7.266 7.336m.187-3.773c-2.414 0-3.68-1.29-3.68-3.633V10.305c0-2.32 1.266-3.657 3.704-3.657h10.406v13.618c0 2.953 1.5 4.406 4.406 4.406h13.36v21.047c0 2.343-1.243 3.633-3.68 3.633ZM31 21.132c-.914 0-1.29-.374-1.29-1.312V7.375l13.5 13.758Zm5.625 9.985h-17.79c-.843 0-1.452.633-1.452 1.43c0 .82.61 1.453 1.453 1.453h17.789a1.43 1.43 0 0 0 1.453-1.453c0-.797-.633-1.43-1.453-1.43m0 8.18h-17.79c-.843 0-1.452.656-1.452 1.476c0 .797.61 1.407 1.453 1.407h17.789c.82 0 1.453-.61 1.453-1.407c0-.82-.633-1.476-1.453-1.476"
            />
          </svg>
        </div>
        <div class="font-bold">
          <h1 class="text-end text-3xl mr-2">{{ bookingList.length }}</h1>
          <p class="mr-2">New Booking</p>
        </div>
      </div>
      <!-- staff -->
      <div
        class="w-[100%] shadow-md h-[100px] bg-[white] p-3 rounded-lg flex items-center justify-between"
      >
        <div class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4em"
            height="4em"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M10 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6M6 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-4.51 7.326a.78.78 0 0 1-.358-.442a3 3 0 0 1 4.308-3.516a6.484 6.484 0 0 0-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 0 1-2.07-.655m14.95.654a4.97 4.97 0 0 0 2.07-.654a.78.78 0 0 0 .357-.442a3 3 0 0 0-4.308-3.517a6.484 6.484 0 0 1 1.907 3.96a2.32 2.32 0 0 1-.026.654M18 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0M5.304 16.19a.844.844 0 0 1-.277-.71a5 5 0 0 1 9.947 0a.843.843 0 0 1-.277.71A6.975 6.975 0 0 1 10 18a6.974 6.974 0 0 1-4.696-1.81"
            />
          </svg>
        </div>
        <div class="font-bold">
          <h1 class="text-end text-3xl mr-2">{{ staffList.length }}</h1>
          <p class="mr-2">Total Staff</p>
        </div>
      </div>
      <!-- review -->
      <div
        class="w-[100%] shadow-md h-[100px] bg-primary1 p-3 rounded-lg flex items-center justify-between"
      >
        <div class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4em"
            height="4em"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="m16 8l1.912 3.703l4.088.594L19 15l1 4l-4-2.25L12 19l1-4l-3-2.703l4.2-.594z"
            />
            <path
              fill="currentColor"
              d="M17.736 30L16 29l4-7h6a1.997 1.997 0 0 0 2-2V8a1.997 1.997 0 0 0-2-2H6a1.997 1.997 0 0 0-2 2v12a1.997 1.997 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a3.999 3.999 0 0 1 4-4h20a3.999 3.999 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.835Z"
            />
          </svg>
        </div>
        <div class="font-bold">
          <h1 class="text-end text-3xl mr-2">4</h1>
          <p class="mr-2">New Reviews</p>
        </div>
      </div>
      <!-- view -->
      <div
        class="w-[100%] shadow-md h-[100px] bg-active p-3 rounded-lg flex items-center justify-between"
      >
        <div class="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4em"
            height="4em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7.4 22L6 20.6l6.9-6.925l3.5 3.5L21.575 12L23 13.425L16.4 20l-3.5-3.5zM4 21q-.825 0-1.412-.587T2 19V5q0-.825.588-1.412T4 3h14q.825 0 1.413.588T20 5v4.2H4zM4 7.2h14V5H4zm0 0V5z"
            />
          </svg>
        </div>
        <div class="font-bold">
          <h1 class="text-end text-3xl mr-2">{{ productList.length }}</h1>
          <p class="mr-2">Total Product <br /></p>
        </div>
      </div>
    </div>
    <!-- chart even -->
    <div class="mt-7">
      <div class="w-[45%] bg-[white] shadow-md p-5 rounded-md">
        <div class="text-black font-semibold">
          <h1>Booking from this mounth</h1>
        </div>
        <!-- rating -->
        <div class="mt-5 space-y-5">
          <div class="w-full h-4 bg-slate-100 rounded-2xl">
            <div class="w-[40%] bg-nav rounded-2xl h-full"></div>
          </div>
          <div class="w-full h-4 bg-slate-100 rounded-2xl">
            <div class="w-[70%] bg-primary1 rounded-2xl h-full"></div>
          </div>
          <div class="w-full h-4 bg-slate-100 rounded-2xl">
            <div
              class="w-[90%] bg-black bg-opacity-50 rounded-2xl h-full"
            ></div>
          </div>
        </div>
        <div class="w-[80%] flex mt-7 justify-between">
          <div>
            <div class="flex items-center gap-3">
              <div class="w-5 h-5 bg-nav rounded-full"></div>
              <div class="text-lg font-semibold">18</div>
            </div>
            <div class="text-lg font-semibold">Tattoo</div>
          </div>
          <div>
            <div class="flex items-center gap-3">
              <div class="w-5 h-5 bg-primary1 rounded-full"></div>
              <div class="text-lg font-semibold">18</div>
            </div>
            <div class="text-lg font-semibold">Piercing</div>
          </div>
          <div>
            <div class="flex items-center gap-3">
              <div class="w-5 h-5 bg-black bg-opacity-50 rounded-full"></div>
              <div class="text-lg font-semibold">18</div>
            </div>
            <div class="text-lg font-semibold text-center">Tattoo removal</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { getCollectionQuery } from "@/composible/getCollection";
export default {
  setup() {
    const bookingList = ref([]);
    const productList = ref([]);
    const staffList = ref([]);
    const getBookingList = async () => {
      try {
        await getCollectionQuery(
          "bookings",
          [],
          (data) => {
            bookingList.value = data;
          },
          true
        );
      } catch (error) {
        console.error(error.message);
      }
    };
    const getProductList = async () => {
      try {
        await getCollectionQuery(
          "products",
          [],
          (data) => {
            productList.value = data;
          },
          true
        );
      } catch (error) {
        console.error(error.message);
      }
    };
    const getStaffList = async () => {
      try {
        await getCollectionQuery(
          "artists",
          [],
          (data) => {
            staffList.value = data;
          },
          true
        );
      } catch (error) {
        console.error(error.message);
      }
    };
    onMounted(() => {
      getBookingList();
      getProductList();
      getStaffList();
    });
    return { bookingList, productList, staffList };
  },
};
</script>
