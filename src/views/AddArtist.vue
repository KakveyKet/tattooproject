<template>
  <div class="w-full h-full">
    <div
      class="duration-300 w-full h-screen p-5 flex items-center justify-center"
    >
      <div class="p-3 w-[60%] bg-isGray2 mx-auto space-y-3 rounded-md">
        <div class="w-full space-y-2">
          <h1 class="text-2xl font-semibold text-black">
            {{ artistsName ? "Update Artist" : "Add Artist" }}
          </h1>
          <router-link
            to="/artist"
            class="text-xl border-2 w-[150px] border-black rounded-lg px-3 flex items-center justify-center space-x-2"
          >
            <span class="mr-2"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </span>
            Go Back
          </router-link>
        </div>

        <form
          @submit.prevent="addProduct"
          class="w-full bg-white rounded-md p-3 space-y-6"
        >
          <div class="flex justify-start space-x-5 items-center ml-12">
            <label class="text-2xl font-semibold text-black"> Name </label>
            <input
              class="px-4 py-2 outline-none rounded-lg border-2 border-black"
              type="text"
              v-model="artistsName"
              placeholder="Name..."
            />
          </div>
          <div class="flex justify-start space-x-9 items-center ml-12">
            <label class="text-2xl font-semibold text-black">
              WorkingDay
            </label>
            <select
              v-model="WorkingDay"
              class="px-4 py-2 outline-none rounded-lg border-2 border-black"
            >
              <option
                v-for="type in WorkingDayStatus"
                :key="type"
                :value="type"
              >
                {{ type }}
              </option>
            </select>
          </div>
          <div class="flex justify-start space-x-9 items-center ml-12">
            <label class="text-2xl font-semibold text-black">
              Working Time
            </label>
            <select
              v-model="WorkingTime"
              class="px-4 py-2 outline-none rounded-lg border-2 border-black"
            >
              <option
                v-for="type in WorkingTimeStatus"
                :key="type"
                :value="type"
              >
                {{ type }}
              </option>
            </select>
          </div>
          <div class="flex justify-start space-x-5 items-center ml-12">
            <label class="text-2xl font-semibold text-black"> Image </label>
            <input
              type="file"
              @change="handleFileChange"
              class="px-4 py-2 outline-none rounded-lg border-2 border-black"
            />
          </div>
          <div class="flex justify-start space-x-9 items-center ml-12">
            <label class="text-2xl font-semibold text-black"> Status </label>
            <select
              v-model="isActive"
              class="px-4 py-2 outline-none rounded-lg border-2 border-black"
            >
              <option v-for="actives in statuses" :key="actives">
                {{ actives }}
              </option>
            </select>
          </div>
          <div class="flex justify-start space-x-5 items-center ml-12">
            <label class="text-2xl font-semibold text-black">
              Descriptions
            </label>
            <textarea
              v-model="bio"
              class="px-4 py-2 outline-none rounded-lg border-2 border-black"
              cols="50"
              placeholder="Descriptions"
            ></textarea>
          </div>
          <div class="w-full flex justify-end">
            <button
              class="bg-green-500 text-white text-md font-semibold px-5 py-1 rounded-lg"
            >
              {{ artistsName ? "Update Artist" : "Add Product" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import useCollection from "../composible/useCollection";
import useStorage from "../composible/useStorange";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import getDataByid from "../composible/getCollectionbyid";
export default {
  props: ["id"],
  setup() {
    const { addDocs, removeDoc, updateDocs } = useCollection("artists");
    const { uploadImage } = useStorage();

    const { document, fetchPostById } = getDataByid("artists");
    const route = useRoute();
    const artistsName = ref("");
    const bio = ref("");
    const WorkingDay = ref("");
    const WorkingDayStatus = ref(["Mon-Fri", "Sat-Sun"]);
    const WorkingTime = ref("");
    const WorkingTimeStatus = ref(["Morning Section", "Afternoon Section"]);
    const statuses = ref(["active", "inactive"]);
    const isActive = ref("");
    const img = ref(null);
    const router = useRouter();
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

    const addProduct = async () => {
      try {
        let imageURL = null;
        if (img.value) {
          if (img.value.size > 1024 * 1024) {
            console.error("Image size exceeds 1MB limit.");
            return;
          }
          const storagePath = `products/${img.value.name}`;
          imageURL = await uploadImage(storagePath, img.value);
        }

        const productData = {
          name: artistsName.value,
          bio: bio.value,
          statuse: isActive.value,
          workingday: WorkingDay.value,
          workingtime: WorkingTime.value,

          image: imageURL,
        };

        if (route.query.id) {
          await updateDocs(route.query.id, productData);
        } else {
          await addDocs(productData);
        }

        // Reset form fields after adding/updating product
        artistsName.value = "";
        bio.value = null;
        isActive.value = "";
        WorkingDayStatus.value = null;
        WorkingTimeStatus.value = null;
        img.value = null;
        router.push({ name: "artist" }); // Corrected the route name
      } catch (error) {
        console.error("Error performing product operation:", error);
      }
    };

    console.log("Route Query:", route.query, document);

    onMounted(async () => {
      if (router.currentRoute.value.query.id) {
        await fetchPostById(router.currentRoute.value.query.id);
        if (document.value) {
          const postData = document.value;
          artistsName.value = postData.name;
          bio.value = postData.bio;
          isActive.value = postData.status;
          WorkingDay.value = postData.workingday;
          WorkingTime.value = postData.workingtime;
          img.value = postData.image;
        }
      }
    });

    return {
      artistsName,
      bio,
      WorkingDay,
      WorkingDayStatus,
      WorkingTimeStatus,
      WorkingTime,
      statuses,
      img,
      isActive,
      handleFileChange,
      addProduct,
      router,
    };
  },
};
</script>
