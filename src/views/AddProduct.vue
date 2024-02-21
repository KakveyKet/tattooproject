<template>
  <div class="w-full h-full">
    <div
      class="duration-300 w-full h-screen p-5 flex items-center justify-center"
    >
      <div class="p-3 w-[60%] bg-isGray2 mx-auto space-y-3 rounded-md">
        <div class="w-full space-y-2">
          <h1 class="text-2xl font-semibold text-black">
            {{ productName ? "Update Product" : "Product & Service" }}
          </h1>
          <router-link
            to="/products"
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
              v-model="productName"
              placeholder="Name..."
            />
          </div>
          <div class="flex justify-start space-x-9 items-center ml-12">
            <label class="text-2xl font-semibold text-black"> Type </label>
            <select
              v-model="selectedType"
              class="px-4 py-2 outline-none rounded-lg border-2 border-black"
            >
              <option v-for="type in types" :key="type" :value="type">
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
              v-model="descriptions"
              class="px-4 py-2 outline-none rounded-lg border-2 border-black"
              cols="50"
              placeholder="Descriptions"
            ></textarea>
          </div>
          <div class="w-full flex justify-end">
            <button
              class="bg-green-500 text-white text-md font-semibold px-5 py-1 rounded-lg"
            >
              {{ productName ? "Update" : "Add Product" }}
            </button>
          </div>
        </form>
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
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import getDataByid from "../composible/getCollectionbyid";
export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  },
  props: ["id"],
  setup() {
    const { addDocs, removeDoc, updateDocs } = useCollection("products");
    const { uploadImage } = useStorage();
    const { document, fetchPostById } = getDataByid("products");
    const route = useRoute();
    const productName = ref("");
    const selectedType = ref("");
    const descriptions = ref("");
    const types = ref(["Tattoo", "Piercing", "Tattoo Removal"]);
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
          name: productName.value,
          type: selectedType.value,
          description: descriptions.value,
          status: isActive.value,
          image: imageURL,
        };
        setTimeout(() => {
          isOpen.value = true;
          setTimeout(() => {
            isOpen.value = false;
          }, 1000);
        }, 1000);

        if (route.query.id) {
          await updateDocs(route.query.id, productData);
        } else {
          await addDocs(productData);
        }
        productName.value = "";
        selectedType.value = null;
        descriptions.value = "";
        isActive.value = null;
        img.value = null;

        console.log("Product operation successful");
        router.push({ name: "/products" }); // Corrected the route name
      } catch (error) {
        console.error("Error performing product operation:", error);
      }
    };

    console.log("Route Query:", route.query, document);

    onMounted(async () => {
      if (route.query.id) {
        await fetchPostById(route.query.id);
      }
      if (document.value) {
        const postData = document.value;
        productName.value = postData.name;
        selectedType.value = postData.type;
        descriptions.value = postData.description;
        isActive.value = postData.status;
        img.value = postData.image;
      }
    });
    return {
      productName,
      selectedType,
      descriptions,
      types,
      statuses,
      isActive,
      img,
      handleFileChange,
      addProduct,
      router,
      closeModal,
      openModal,
      isOpen,
    };
  },
};
</script>
