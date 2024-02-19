<template>
  <div class="w-full h-auto bg-isGray relative">
    <div class="w-full lg:w-1/2 mx-auto md:w-1/3 xl:w-1/2 p-2">
      <h1 class="text-center text-white text-xl font-serif font-bold mt-14">
        LET'S GET IN TOUCH
      </h1>
      <form @submit.prevent="addProduct" class="w-full">
        <!-- 1 first name last name 18 year -->
        <div class="mt-10 space-y-4">
          <label class="flex flex-col-reverse relative focus group">
            <input
              type="text"
              v-model="firstName"
              required
              autofocus
              placeholder="First Name *"
              class="border-2 border-white bg-transparent px-4 py-2 text-white leading-10 rounded-md outline-none"
            />
          </label>
          <label class="flex flex-col-reverse relative focus group">
            <input
              type="text"
              v-model="lastName"
              required
              placeholder="Last Name *"
              class="border-2 border-white bg-transparent px-4 py-2 text-white leading-10 rounded-md outline-none"
            />

            <span
              class="absolute text-xl transform text-white -translate-y-3 placeholder:text-white placeholder:text-2xl left-4 transition leading-10 group-focus:opacity-0"
            >
            </span>
          </label>
          <input
            v-model="yearChecked"
            type="checkbox"
            class="w-5 h-5 bg-transparent"
          />
          <span class="ml-3 text-white">I'm 18 Years old or older</span>
        </div>
        <!-- 2 email phone-->
        <div class="mt-4 space-y-4">
          <label class="flex flex-col-reverse relative focus group">
            <input
              type="text"
              v-model="email"
              required
              placeholder="Email *"
              class="border-2 border-white bg-transparent px-4 py-2 text-white leading-10 rounded-md outline-none"
            />
          </label>
          <label class="flex flex-col-reverse relative focus group">
            <input
              type="text"
              v-model="phoneNumber"
              required
              placeholder="Phone Number *"
              class="border-2 border-white bg-transparent px-4 py-2 text-white leading-10 rounded-md outline-none"
            />

            <span
              class="absolute text-xl transform text-white -translate-y-3 placeholder:text-white placeholder:text-2xl left-4 transition leading-10 group-focus:opacity-0"
            >
            </span>
          </label>
        </div>
        <!-- date time -->
        <div class="mt-2">
          <div class="w-full px-2 py-3 border-white border-2 rounded-md">
            <ejs-datetimepicker
              v-model="dateTime"
              placeholder="Choose Date Time"
            >
            </ejs-datetimepicker>
          </div>
        </div>
        <!-- 4 choose option text area-->
        <div class="mt-2">
          <h1 class="text-white text-xl font-semibold">
            Choose Service <span class="text-red-600">*</span>
          </h1>
          <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->
          <div
            class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] border-2 border-white bg-transparent px-4 py-2 text-black leading-10 rounded-md outline-none"
          >
            <select class="bg-transparent text-white" v-model="chooseOption">
              <option v-for="item in chooseOptions" :key="item" :value="item">
                {{ item }}
              </option>
            </select>
          </div>
        </div>
        <!-- 5 artsit body orther-->
        <div class="mt-4 space-y-4">
          <label class="flex flex-col-reverse relative focus group">
            <input
              type="text"
              v-model="artist"
              required
              placeholder="Preferred Artist *"
              class="border-2 border-white bg-transparent px-4 py-2 text-white leading-10 rounded-md outline-none"
            />
          </label>
          <label class="flex flex-col-reverse relative focus group">
            <input
              type="text"
              v-model="bodyPreference"
              placeholder="Preferred Loacation body "
              class="border-2 border-white bg-transparent px-4 py-2 text-white leading-10 rounded-md outline-none"
            />

            <span
              class="absolute text-xl transform text-white -translate-y-3 placeholder:text-white placeholder:text-2xl left-4 transition leading-10 group-focus:opacity-0"
            >
            </span>
          </label>
          <label class="flex flex-col-reverse relative focus group">
            <input
              type="text"
              placeholder="Other "
              v-model="other"
              class="border-2 border-white bg-transparent px-4 py-2 text-white leading-10 rounded-md outline-none"
            />

            <span
              class="absolute text-xl transform text-white -translate-y-3 placeholder:text-white placeholder:text-2xl left-4 transition leading-10 group-focus:opacity-0"
            >
            </span>
          </label>
          <label class="flex-col-reverse relative focus group hidden">
            <input
              type="text"
              placeholder="status "
              v-model="status"
              class="border-2 border-white bg-transparent px-4 py-2 text-white leading-10 rounded-md outline-none"
            />
            <span
              class="absolute text-xl transform text-white -translate-y-3 placeholder:text-white placeholder:text-2xl left-4 transition leading-10 group-focus:opacity-0"
            >
            </span>
          </label>
          <label class="flex flex-col-reverse relative focus group">
            <textarea
              type="text"
              v-model="description"
              placeholder="Description "
              class="border-2 border-white bg-transparent px-4 py-2 text-white leading-10 rounded-md outline-none"
            />

            <span
              class="absolute text-xl transform text-white -translate-y-3 placeholder:text-white placeholder:text-2xl left-4 transition leading-10 group-focus:opacity-0"
            >
            </span>
          </label>
        </div>
        <!-- 6 file-->
        <div class="mt-4">
          <section class="overflow-auto w-full h-1/2 flex flex-col">
            <header
              class="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center"
            >
              <p
                class="mb-3 font-semibold text-white flex flex-wrap justify-center"
              >
                <span>Photo Preferred</span>
              </p>
              <input @change="handleFileChange" id="hidden-input" type="file" />
            </header>
          </section>
        </div>

        <div class="mt-4 w-full flex items-center justify-end">
          <button
            type="submit"
            class="bg-delete w-full py-2 rounded-lg text-white text-xl"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <div
      class="fixed bg-white p-5 top-20 right-4 flex items-center justify-center gap-5 rounded-md shadow"
      :class="{
        '-translate-x-[1%] transition ease-in-out duration-300': isPending,
        'translate-x-[120%] transition ease-in-out duration-300 ': !isPending,
      }"
    >
      <div class="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8 text-green-600"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
      <div><h1>Your booking has been sent successfully!</h1></div>
    </div>
  </div>
</template>

<script>
import useCollection from "@/composible/useCollection";
import useStorage from "@/composible/useStorange";
import { timestamp } from "@/firebase/config";

import { ref, computed } from "vue";
export default {
  setup() {
    const { uploadImage, removeImage } = useStorage();
    const { addDocs, removeDoc, updateDocs } = useCollection("bookings");
    const isPending = ref(false);
    const firstName = ref("");
    const lastName = ref("");
    const year = ref(false);
    const email = ref("");
    const dateTime = ref("");
    const phoneNumber = ref("");
    const chooseOption = ref("");
    const artist = ref("");
    const bodyPreference = ref("");
    const other = ref("");
    const description = ref("");
    const status = ref("Prending");
    const chooseOptions = ref(["Tattoo", "Piercing ", "Tattoo Removal "]);
    const img = ref(null);
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (!file) {
        console.error("No file selected.");
        return;
      }

      const allowedExtensions = ["jpg", "png", "svg", "jpeg"];
      const extension = file.name.split(".").pop().toLowerCase();

      if (!allowedExtensions.includes(extension)) {
        console.error("Only jpg, png, svg, and jpeg files are allowed.");
        return;
      }

      img.value = file;
    };
    const yearChecked = computed({
      get: () => year.value,
      set: (newValue) => {
        year.value = newValue;
        if (newValue) {
          year.value = 18;
        } else {
          year.value = null;
        }
      },
    });
    const addProduct = async () => {
      try {
        if (
          !firstName.value ||
          !lastName.value ||
          !email.value ||
          !dateTime.value ||
          !chooseOption.value ||
          !artist.value ||
          !status.value
        ) {
          console.error("Required fields are empty. Please fill them out.");
          return;
        }

        let imageURL = null;
        if (img.value) {
          if (img.value.size > 1024 * 1024) {
            console.error("Image size exceeds 1MB limit.");
            return;
          }
          const storagePath = `products/${img.value.name}`;
          imageURL = await uploadImage(storagePath, img.value);
        }
        setTimeout(() => {
          // Set isPending to true after 3 seconds
          isPending.value = true;

          // Set isPending back to false after another 3 seconds
          setTimeout(() => {
            isPending.value = false;
          }, 2000);
        }, 2000);
        const productData = {
          firstname: firstName.value,
          lastname: lastName.value,
          years: year.value,
          email: email.value,
          phone: phoneNumber.value,
          datetime: dateTime.value,
          option: chooseOption.value,
          artist: artist.value,
          body: bodyPreference.value,
          other: other.value,
          description: description.value,
          status: status.value,
          img: imageURL,
          createdAt: timestamp(),
        };

        await addDocs(productData);

        firstName.value = "";
        lastName.value = "";
        year.value = "";
        email.value = "";
        phoneNumber.value = "";
        dateTime.value = "";
        chooseOption.value = "";
        artist.value = "";
        bodyPreference.value = "";
        other.value = "";
        description.value = "";
        img.value = null;
        console.log("Product operation successful");
      } catch (error) {
        console.error("Error performing product operation:", error);
      }
    };

    return {
      firstName,
      lastName,
      year,
      email,
      dateTime,
      chooseOption,
      artist,
      bodyPreference,
      other,
      description,
      img,
      phoneNumber,
      chooseOptions,
      handleFileChange,
      addProduct,
      yearChecked,
      isPending,
      status,
    };
  },
};
</script>
