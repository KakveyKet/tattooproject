<template>
  <div
    class="duration-300 w-full h-screen fixed top-0 bg-black bg-opacity-60 right-0 flex items-center justify-center"
  >
    <div class="p-3 w-1/2 bg-white mx-auto space-y-3 rounded-md">
      <button
        @click="handleClose"
        class="w-5 h-5 bg-red-400 rounded-full text-white flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
      <form
        @submit.prevent="addProduct"
        class="w-full bg-white rounded-md p-3 space-y-6"
      >
        <div class="flex justify-start space-x-5 items-center ml-12">
          <label class="text-2xl font-semibold text-black">Artist Name </label>
          <input
            class="px-4 py-2 outline-none rounded-lg border-2 border-black"
            type="text"
            v-model="artistsName"
            placeholder="Name..."
          />
        </div>
        <div class="flex justify-start space-x-9 items-center ml-12">
          <label class="text-2xl font-semibold text-black"> WorkingDay </label>
          <select
            v-model="WorkingDay"
            class="px-4 py-2 outline-none rounded-lg border-2 border-black"
          >
            <option v-for="type in WorkingDayStatus" :key="type" :value="type">
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
            <option v-for="type in WorkingTimeStatus" :key="type" :value="type">
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
                Product Added
              </DialogTitle>
              <div class="mt-2"></div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref, onMounted } from "vue";
import useCollection from "../composible/useCollection";
import useStorage from "../composible/useStorange";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import getDataByid from "../composible/getCollectionbyid";
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
  props: ["id", "datatedit"],
  setup(props, { emit }) {
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
    const isOpen = ref(false);
    function closeModal() {
      isOpen.value = false;
    }
    function openModal() {
      isOpen.value = true;
    }
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
        handleClose();
        setTimeout(() => {
          isOpen.value = true;
          setTimeout(() => {
            isOpen.value = false;
          }, 1000);
        }, 1000);
        if (props.datatedit) {
          await updateDocs(props.datatedit?.id, productData);
        } else {
          await addDocs(productData);
        }
        artistsName.value = "";
        bio.value = null;
        isActive.value = "";
        WorkingDayStatus.value = null;
        WorkingTimeStatus.value = null;
        img.value = null;
      } catch (error) {
        console.error("Error performing product operation:", error);
      }
    };
    onMounted(() => {
      if (props.datatedit) {
        artistsName.value = props.datatedit.name;
        bio.value = props.datatedit.bio;
        isActive.value = props.datatedit.statuse;
        WorkingDay.value = props.datatedit.workingday;
        WorkingTime.value = props.datatedit.workingtime;
      }
    });
    const handleClose = () => {
      emit("close");
    };
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
      closeModal,
      openModal,
      isOpen,
      handleClose,
    };
  },
};
</script>
