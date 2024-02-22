<template>
  <div
    class="w-full p-5 flex items-center justify-center bg-black bg-opacity-60 fixed bottom-0 right-0 h-screen"
  >
    <div class="p-3 w-1/2 mx-auto space-y-3 rounded-md">
      <form
        @submit.prevent="addProduct"
        class="w-full bg-white rounded-md p-3 space-y-6"
      >
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
        <div class="flex justify-start space-x-5 items-center ml-12">
          <label class="text-xl font-semibold text-black">Product Name </label>
          <input
            class="px-4 py-2 outline-none rounded-lg border-2 border-black"
            type="text"
            v-model="productName"
            placeholder="Name..."
          />
        </div>
        <div class="flex justify-start space-x-9 items-center ml-12">
          <label class="text-2xl font-semibold text-black">Product Type </label>
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
          <label class="text-2xl font-semibold text-black"
            >Product Image
          </label>
          <input
            type="file"
            @change="handleFileChange"
            class="px-4 py-2 outline-none rounded-lg border-2 border-black"
          />
        </div>
        <div class="flex justify-start space-x-9 items-center ml-12">
          <label class="text-2xl font-semibold text-black"
            >Product Status
          </label>
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
</template>

<script>
import { onMounted, ref } from "vue";
import useCollection from "../composible/useCollection";
import useStorage from "../composible/useStorange";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";

export default {
  props: ["datatedit"],
  setup(props, { emit }) {
    const { addDocs, removeDoc, updateDocs } = useCollection("products");
    const { uploadImage } = useStorage();
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
    onMounted(() => {
      console.log("is", props.datatedit);
    });
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

        if (props.datatedit) {
          await updateDocs(props.datatedit?.id, productData);
          console.log(datatedit);
        } else {
          console.log("newProduct:", productData);
          await addDocs(productData);
        }
        handleClose();
        productName.value = "";
        selectedType.value = null;
        descriptions.value = "";
        isActive.value = null;
        img.value = null;
        console.log("Product operation successful");
      } catch (error) {
        console.error("Error performing product operation:", error);
      }
    };
    onMounted(() => {
      if (props.datatedit) {
        productName.value = props.datatedit.name;
        descriptions.value = props.datatedit.description;
        selectedType.value = props.datatedit.type;
        isActive.value = props.datatedit.status;
      }
    });
    const handleClose = () => {
      emit("close");
    };
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
      handleClose,
    };
  },
};
</script>
