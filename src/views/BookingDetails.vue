<template>
  <div
    class="flex w-full bg-card h-screen items-center justify-center relative"
  >
    <router-link
      to="/booking"
      class="w-10 h-10 bg-card shadow-xl rounded-full absolute top-2 left-2 flex items-center justify-center"
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
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </router-link>
    <div class="bg-white p-5 rounded-md w-1/2">
      <div v-if="product" class="w-[70%] space-y-2">
        <div class="w-full flex items-center justify-center space-x-4">
          <div class="w-1/2">
            <h1 class="text-xl font-semibold text-isGray text-start">
              Client Name :
            </h1>
          </div>
          <div class="w-1/2">
            <h1 class="mt-1">{{ product.lastname }}</h1>
          </div>
          <div class="w-1/2">
            <h1 class="text-xl font-semibold text-isGray text-start">
              Artist Name :
            </h1>
          </div>
          <div class="w-1/2">
            <h1 class="mt-1">{{ product.artist }}</h1>
          </div>
        </div>
        <div class="w-full flex items-center justify-center space-x-4">
          <div class="w-1/2">
            <h1 class="text-xl font-semibold text-isGray text-start">Body :</h1>
          </div>
          <div class="w-1/2">
            <h1 v-if="product.body" class="mt-1">{{ product.body }}</h1>
            <h1 v-else class="text-red-500 font-semibold">Empty</h1>
          </div>
        </div>
        <div class="w-full flex items-center justify-center space-x-4">
          <div class="w-1/2">
            <h1 class="text-xl font-semibold text-isGray text-start">
              Option :
            </h1>
          </div>
          <div class="w-1/2">
            <h1 class="mt-1">{{ product.option }}</h1>
          </div>
        </div>
        <div class="w-full flex items-center justify-center space-x-4">
          <div class="w-1/2">
            <h1 class="text-xl font-semibold text-isGray text-start">
              Email :
            </h1>
          </div>
          <div class="w-1/2">
            <h1 class="mt-1">{{ product.email }}</h1>
          </div>
        </div>
        <div class="w-full flex items-center justify-center space-x-4">
          <div class="w-1/2">
            <h1 class="text-xl font-semibold text-isGray text-start">
              Phone Number :
            </h1>
          </div>
          <div class="w-1/2">
            <h1 class="mt-1">{{ product.phone }}</h1>
          </div>
        </div>
        <div class="w-full flex items-center justify-center space-x-4">
          <div class="w-1/2">
            <h1 class="text-xl font-semibold text-isGray text-start">Age :</h1>
          </div>
          <div class="w-1/2">
            <h1 class="mt-1">{{ product.years }}</h1>
          </div>
        </div>
        <div class="w-full flex items-center justify-center space-x-4">
          <div class="w-1/2">
            <h1 class="text-xl font-semibold text-isGray text-start">
              Image :
            </h1>
          </div>
          <div class="w-1/2">
            <img
              v-if="product.img"
              class="w-32 h-40"
              :src="product.img"
              alt=""
            />
            <h1 v-else class="text-red-500 font-semibold">Empty</h1>
          </div>
        </div>
        <div class="w-full flex items-center justify-center space-x-4">
          <div class="w-1/2">
            <h1 class="text-xl font-semibold text-isGray text-start">
              Description :
            </h1>
          </div>
          <div class="w-1/2">
            <h1 v-if="product.description">{{ product.description }}</h1>
            <h1 v-else class="text-red-500 font-semibold">Empty</h1>
          </div>
        </div>
        <div class="w-full flex items-center justify-center space-x-4">
          <div class="w-1/2">
            <h1 class="text-xl font-semibold text-isGray text-start">
              Booking At :
            </h1>
          </div>
          <div class="w-1/2">
            <h1 class="mt-1">
              {{ new Date(product.datetime.seconds * 1000).toLocaleString() }}
            </h1>
          </div>
        </div>
        <div class="w-full flex items-center justify-center space-x-4">
          <div class="w-1/2">
            <h1 class="text-xl font-semibold text-isGray text-start">
              Status :
            </h1>
          </div>
          <div class="w-1/2">
            <h1 class="mt-1">{{ product.status }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";
import { doc, onSnapshot } from "firebase/firestore";

export default {
  data() {
    return {
      product: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    const productId = to.params.id;
    const productRef = doc(projectFirestore, "bookings", productId);
    const product = ref(null);

    const unsubscribe = onSnapshot(productRef, (snapshot) => {
      if (snapshot.exists()) {
        product.value = { id: snapshot.id, ...snapshot.data() };
      } else {
        console.error(`Product with ID ${productId} not found.`);
      }
    });

    next((vm) => {
      vm.product = product;
    });

    return unsubscribe;
  },
};
</script>
